"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

export type PeerMode = "off" | "host" | "guest";
export type PeerStatus = "disconnected" | "generating" | "waiting" | "connecting" | "connected" | "error";

export interface SyncMessage {
  type:
    | "SYNC_STEP"
    | "SYNC_PLAYERS"
    | "SYNC_ICEBREAKER"
    | "SYNC_CHARACTER"
    | "SYNC_HEART_ACTION"
    | "SYNC_DISCUSSION";
  payload: any;
}

interface PeerContextType {
  mode: PeerMode;
  status: PeerStatus;
  roomCode: string;
  myRole: "host" | "guest" | null;
  createRoom: () => void;
  joinRoom: (code: string) => void;
  leaveRoom: () => void;
  broadcast: (msg: SyncMessage) => void;
  lastMessage: SyncMessage | null;
  errorMessage: string | null;
}

const PeerContext = createContext<PeerContextType>({
  mode: "off",
  status: "disconnected",
  roomCode: "",
  myRole: null,
  createRoom: () => {},
  joinRoom: () => {},
  leaveRoom: () => {},
  broadcast: () => {},
  lastMessage: null,
  errorMessage: null,
});

const ROOM_PREFIX = "h2h-worship-";

export const PeerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PeerMode>("off");
  const [status, setStatus] = useState<PeerStatus>("disconnected");
  const [roomCode, setRoomCode] = useState<string>("");
  const [myRole, setMyRole] = useState<"host" | "guest" | null>(null);
  const [lastMessage, setLastMessage] = useState<SyncMessage | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const peerRef = useRef<any>(null);
  const connRef = useRef<any>(null);

  // Generate 4-letter room code
  const generateCode = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let res = "";
    for (let i = 0; i < 4; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
  };

  // Setup connection handlers
  const bindConnection = (conn: any) => {
    connRef.current = conn;

    conn.on("open", () => {
      setStatus("connected");
      setErrorMessage(null);
    });

    conn.on("data", (data: any) => {
      try {
        const msg: SyncMessage = typeof data === "string" ? JSON.parse(data) : data;
        setLastMessage(msg);
      } catch (err) {
        console.error("Peer data parse error:", err);
      }
    });

    conn.on("close", () => {
      setStatus("disconnected");
      setErrorMessage("Partner disconnected.");
    });

    conn.on("error", (err: any) => {
      console.error("Connection error:", err);
      setStatus("error");
      setErrorMessage("Connection error occurred.");
    });
  };

  // Create room as Host
  const createRoom = useCallback(async () => {
    try {
      const { default: Peer } = await import("peerjs");
      const code = generateCode();
      const peerId = `${ROOM_PREFIX}${code}`;

      setStatus("generating");
      setRoomCode(code);
      setMyRole("host");
      setMode("host");

      const peer = new Peer(peerId, {
        debug: 1,
      });

      peerRef.current = peer;

      peer.on("open", () => {
        setStatus("waiting");
      });

      peer.on("connection", (conn: any) => {
        bindConnection(conn);
      });

      peer.on("error", (err: any) => {
        console.error("Peer host error:", err);
        setStatus("error");
        setErrorMessage("Room creation failed. Please try again.");
      });
    } catch (err) {
      console.error("Failed to load PeerJS:", err);
      setStatus("error");
      setErrorMessage("Could not initialize remote sync.");
    }
  }, []);

  // Join room as Guest
  const joinRoom = useCallback(async (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (!cleanCode) return;

    try {
      const { default: Peer } = await import("peerjs");
      const peerId = `${ROOM_PREFIX}guest-${Math.random().toString(36).substring(2, 7)}`;
      const targetHostId = `${ROOM_PREFIX}${cleanCode}`;

      setStatus("connecting");
      setRoomCode(cleanCode);
      setMyRole("guest");
      setMode("guest");

      const peer = new Peer(peerId, {
        debug: 1,
      });

      peerRef.current = peer;

      peer.on("open", () => {
        const conn = peer.connect(targetHostId, { reliable: true });
        bindConnection(conn);
      });

      peer.on("error", (err: any) => {
        console.error("Peer guest error:", err);
        setStatus("error");
        setErrorMessage("Could not connect to room code. Please check the code.");
      });
    } catch (err) {
      console.error("Failed to join room:", err);
      setStatus("error");
      setErrorMessage("Failed to connect.");
    }
  }, []);

  // Leave / Reset connection
  const leaveRoom = useCallback(() => {
    if (connRef.current) {
      connRef.current.close();
      connRef.current = null;
    }
    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }
    setMode("off");
    setStatus("disconnected");
    setRoomCode("");
    setMyRole(null);
    setLastMessage(null);
    setErrorMessage(null);
  }, []);

  // Broadcast message to partner
  const broadcast = useCallback((msg: SyncMessage) => {
    if (connRef.current && connRef.current.open) {
      connRef.current.send(msg);
    }
  }, []);

  return (
    <PeerContext.Provider
      value={{
        mode,
        status,
        roomCode,
        myRole,
        createRoom,
        joinRoom,
        leaveRoom,
        broadcast,
        lastMessage,
        errorMessage,
      }}
    >
      {children}
    </PeerContext.Provider>
  );
};

export const usePeer = () => useContext(PeerContext);
