"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ArrowRight, Wifi, Copy, Check, Smartphone, Globe, AlertCircle, Shield } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { usePeer } from "@/context/PeerContext";

interface PlayerSetupScreenProps {
  player1Name: string;
  player2Name: string;
  onUpdatePlayers: (name1: string, name2: string) => void;
  onContinue: () => void;
}

export const PlayerSetupScreen: React.FC<PlayerSetupScreenProps> = ({
  player1Name,
  player2Name,
  onUpdatePlayers,
  onContinue,
}) => {
  const [p1, setP1] = useState<string>(player1Name || "");
  const [p2, setP2] = useState<string>(player2Name || "");
  const [avatar1, setAvatar1] = useState<string>("🌿");
  const [avatar2, setAvatar2] = useState<string>("🌸");
  const [worshipMode, setWorshipMode] = useState<"single" | "remote">("single");
  const [inputCode, setInputCode] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const { mode: peerMode, status: peerStatus, roomCode, createRoom, joinRoom, leaveRoom, errorMessage, myRole, broadcast, lastMessage } = usePeer();

  const avatarChoices = ["🌿", "🌸", "🕊️", "⭐", "🌾", "🌊", "☀️", "🦋"];

  const isRemote = peerStatus === "connected";
  const isHost = !isRemote || myRole === "host";

  // Check URL query param for room code (e.g. ?room=LOVE)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const roomParam = urlParams.get("room");
      if (roomParam) {
        setWorshipMode("remote");
        setInputCode(roomParam.toUpperCase());
      }
    }
  }, []);

  // Sync names when host types or broadcasts
  const handleP1Change = (val: string) => {
    if (!isHost) return;
    setP1(val);
    if (isRemote) {
      broadcast({
        type: "SYNC_PLAYERS",
        payload: { p1: val, p2 },
      });
    }
  };

  const handleP2Change = (val: string) => {
    if (!isHost) return;
    setP2(val);
    if (isRemote) {
      broadcast({
        type: "SYNC_PLAYERS",
        payload: { p1, p2: val },
      });
    }
  };

  // Guest receives names automatically from Host
  useEffect(() => {
    if (lastMessage && lastMessage.type === "SYNC_PLAYERS" && lastMessage.payload) {
      if (lastMessage.payload.p1) setP1(lastMessage.payload.p1);
      if (lastMessage.payload.p2) setP2(lastMessage.payload.p2);
    }
  }, [lastMessage]);

  const isRemoteReady = worshipMode === "single" || peerStatus === "connected";

  const handleContinue = () => {
    if (!isHost) return; // Only Host can start session!
    if (!isRemoteReady) return;

    const finalP1 = p1.trim() || "Karabelo";
    const finalP2 = p2.trim() || "Candy";

    onUpdatePlayers(finalP1, finalP2);
    onContinue();
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && roomCode) {
      const shareUrl = `${window.location.origin}${window.location.pathname}?room=${roomCode}`;
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-forest-100 text-forest-800 border border-forest-300">
          <Users className="w-3.5 h-3.5" />
          Step 1 &bull; Worship Setup
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900">
          How are you worshipping today?
        </h2>
        <p className="text-sm text-forest-700 max-w-md mx-auto">
          Choose whether you are sharing one screen in person or worshipping remotely across two devices.
        </p>
      </motion.div>

      {/* Mode Selector Tabs */}
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => {
            setWorshipMode("single");
            leaveRoom();
          }}
          className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${
            worshipMode === "single"
              ? "bg-forest-800 text-cream-50 border-gold-400 shadow-md ring-2 ring-gold-300"
              : "bg-white/80 text-forest-800 border-cream-300 hover:bg-white"
          }`}
        >
          <Smartphone className="w-6 h-6" />
          <span className="text-xs font-bold">One Laptop / Phone</span>
          <span className="text-[10px] opacity-80">In-Person Together</span>
        </button>

        <button
          type="button"
          onClick={() => setWorshipMode("remote")}
          className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${
            worshipMode === "remote"
              ? "bg-forest-800 text-cream-50 border-gold-400 shadow-md ring-2 ring-gold-300"
              : "bg-white/80 text-forest-800 border-cream-300 hover:bg-white"
          }`}
        >
          <Globe className="w-6 h-6" />
          <span className="text-xs font-bold">Two Laptops / Phones</span>
          <span className="text-[10px] opacity-80">Remote WebRTC Sync</span>
        </button>
      </div>

      {/* Main Card */}
      <Card variant="glass" className="p-6 sm:p-8 space-y-8 text-left">
        {/* Remote Sync Setup Box */}
        {worshipMode === "remote" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="p-5 rounded-2xl bg-gradient-to-r from-gold-100/90 via-amber-50 to-gold-100 border-2 border-gold-300 space-y-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-forest-900 font-bold text-sm">
                <Wifi className="w-4 h-4 text-gold-700 animate-pulse" />
                <span>Remote Worship Connection</span>
              </div>
              {myRole && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-forest-800 text-gold-300">
                  {myRole === "host" ? "👑 Host (Full Control)" : "👀 Guest"}
                </span>
              )}
            </div>

            {peerStatus === "disconnected" || peerStatus === "error" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Host button */}
                <div className="p-4 rounded-xl bg-white border border-gold-300 space-y-2 text-center">
                  <p className="text-xs font-bold text-forest-900">Host New Session</p>
                  <p className="text-[10px] text-forest-600">Create room code (You have full control)</p>
                  <Button variant="gold" size="sm" onClick={createRoom} className="w-full">
                    <span>Create Room Code</span>
                  </Button>
                </div>

                {/* Join input */}
                <div className="p-4 rounded-xl bg-white border border-gold-300 space-y-2 text-center">
                  <p className="text-xs font-bold text-forest-900">Join Partner&apos;s Session</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={4}
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                      placeholder="e.g. LOVE"
                      className="w-full px-3 py-1.5 rounded-xl border border-cream-300 text-center font-mono font-bold uppercase text-sm tracking-widest"
                    />
                    <Button
                      variant="primary"
                      size="sm"
                      disabled={inputCode.length < 3}
                      onClick={() => joinRoom(inputCode)}
                    >
                      Join
                    </Button>
                  </div>
                </div>
              </div>
            ) : peerStatus === "waiting" || peerStatus === "generating" || peerStatus === "connecting" ? (
              /* Waiting for Partner */
              <div className="p-4 rounded-xl bg-white border border-gold-300 text-center space-y-3">
                <span className="text-xs font-bold text-forest-700 uppercase tracking-wider">
                  Your Worship Room Code
                </span>
                <div className="font-mono text-4xl font-extrabold text-forest-900 tracking-widest">
                  {roomCode}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
                  <Button variant="gold" size="sm" onClick={handleCopyLink}>
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Link Copied!" : "Copy WhatsApp Share Link"}</span>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-forest-700 font-semibold pt-1">
                  <AlertCircle className="w-4 h-4 text-amber-600 animate-bounce" />
                  <span>Waiting for partner to join room <strong>{roomCode}</strong>...</span>
                </div>
              </div>
            ) : (
              /* Connected State */
              <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-950">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                  <span>✅ Partner Connected! Room: {roomCode}</span>
                </div>
                <button
                  type="button"
                  onClick={leaveRoom}
                  className="text-xs text-rose-700 hover:underline font-semibold"
                >
                  Disconnect
                </button>
              </div>
            )}

            {errorMessage && (
              <p className="text-xs text-rose-700 font-semibold text-center">{errorMessage}</p>
            )}
          </motion.div>
        )}

        {/* Player Names Input */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-cream-100/90 to-white/90 border border-cream-300 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700">
              Player 1 Name (Host)
            </span>
            {!isHost && (
              <span className="text-[10px] text-forest-600 font-semibold flex items-center gap-1">
                <Shield className="w-3 h-3 text-gold-600" /> Set by Host
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 text-2xl flex items-center justify-center shadow-md border border-gold-300">
              {avatar1}
            </div>

            <input
              type="text"
              disabled={!isHost}
              value={p1}
              onChange={(e) => handleP1Change(e.target.value)}
              placeholder="e.g. Karabelo"
              className={`flex-1 px-4 py-3 rounded-2xl bg-white border border-cream-300 text-forest-900 font-medium focus:outline-none focus:ring-2 focus:ring-forest-700/50 shadow-inner text-base ${
                !isHost ? "opacity-75 cursor-not-allowed bg-cream-100/50" : ""
              }`}
            />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-r from-cream-100/90 to-white/90 border border-cream-300 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-700">
              Player 2 Name (Partner)
            </span>
            {!isHost && (
              <span className="text-[10px] text-forest-600 font-semibold flex items-center gap-1">
                <Shield className="w-3 h-3 text-gold-600" /> Set by Host
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-forest-800 text-2xl flex items-center justify-center shadow-md border border-gold-300">
              {avatar2}
            </div>

            <input
              type="text"
              disabled={!isHost}
              value={p2}
              onChange={(e) => handleP2Change(e.target.value)}
              placeholder="e.g. Candy"
              className={`flex-1 px-4 py-3 rounded-2xl bg-white border border-cream-300 text-forest-900 font-medium focus:outline-none focus:ring-2 focus:ring-forest-700/50 shadow-inner text-base ${
                !isHost ? "opacity-75 cursor-not-allowed bg-cream-100/50" : ""
              }`}
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-2 text-center">
          <Button
            variant="gold"
            size="lg"
            disabled={!isHost || !isRemoteReady}
            onClick={handleContinue}
            className={`w-full sm:w-auto shadow-md ${(!isHost || !isRemoteReady) ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            <span>
              {!isHost
                ? "Waiting for Host to start the session..."
                : isRemoteReady
                ? "Start Session (Continue to Icebreaker)"
                : "Waiting for Partner to Join..."}
            </span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
