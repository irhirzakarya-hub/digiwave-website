"use client";

export function DigiwaveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* LAYER 1 — Deep Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 70%, #0a1628 0%, #040c18 45%, #020810 100%)",
        }}
      />

      {/* LAYER 2 — Ambient Neon Glow Spots */}
      {/* Glow 1 — Center (blue) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 500px at 50% 55%, rgba(0,212,255,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Glow 2 — Bottom-left (electric blue) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 400px at 15% 80%, rgba(26,111,255,0.10) 0%, transparent 70%)",
        }}
      />
      {/* Glow 3 — Top-right (cyan) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 350px at 85% 20%, rgba(0,255,204,0.05) 0%, transparent 70%)",
        }}
      />

      {/* LAYER 3 — Subtle Digital Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='60'%3E%3Cpath d='M 80 0 L 0 0 0 60' fill='none' stroke='rgba(0,212,255,0.04)' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 60px",
        }}
      />

      {/* LAYER 4 — Animated Ocean Sine Waves */}
      <div
        className="absolute bottom-0 left-0 overflow-hidden"
        style={{ width: "200vw", height: "45vh", zIndex: 1 }}
      >
        {/* WAVE C — Back wave (subtlest) */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full animate-wave-c"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-c-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffcc" />
              <stop offset="100%" stopColor="#00ffcc" />
            </linearGradient>
          </defs>
          <path
            stroke="#00ffcc"
            strokeWidth="1"
            strokeOpacity="0.07"
            fill="rgba(0,255,204,0.03)"
            d="M0,90 C80,50 160,110 240,80 C320,50 400,110 480,80 C560,50 640,110 720,80 C800,50 880,110 960,80 C1040,50 1120,110 1200,80 C1280,50 1360,110 1440,80 L1440,200 L0,200 Z"
          />
        </svg>

        {/* WAVE B — Mid wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full animate-wave-b"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-b-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a6fff" />
              <stop offset="100%" stopColor="#1a6fff" />
            </linearGradient>
          </defs>
          <path
            stroke="#1a6fff"
            strokeWidth="1.5"
            strokeOpacity="0.12"
            fill="rgba(26,111,255,0.04)"
            d="M0,75 C80,35 160,95 240,65 C320,35 400,95 480,65 C560,35 640,95 720,65 C800,35 880,95 960,65 C1040,35 1120,95 1200,65 C1280,35 1360,95 1440,65 L1440,200 L0,200 Z"
          />
        </svg>

        {/* WAVE A — Front wave (most visible) */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full animate-wave-a"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-a-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
          <path
            stroke="#00d4ff"
            strokeWidth="2"
            strokeOpacity="0.18"
            fill="rgba(0,212,255,0.05)"
            d="M0,60 C80,20 160,80 240,50 C320,20 400,80 480,50 C560,20 640,80 720,50 C800,20 880,80 960,50 C1040,20 1120,80 1200,50 C1280,20 1360,80 1440,50 L1440,200 L0,200 Z"
          />
        </svg>
      </div>

      {/* LAYER 5 — Large Spiral Wave Decoration (bottom-right corner) */}
      <svg
        className="absolute pointer-events-none"
        style={{
          width: "520px",
          height: "480px",
          bottom: "-40px",
          right: "-40px",
          opacity: 0.22,
          zIndex: 1,
          filter:
            "drop-shadow(0 0 8px rgba(0,212,255,0.4)) drop-shadow(0 0 24px rgba(0,212,255,0.2))",
        }}
        viewBox="0 0 520 480"
        fill="none"
      >
        {/* Outer arc - large D-shaped curve */}
        <path
          d="M480,440 Q520,240 400,80 Q280,-40 120,60 Q40,120 60,220"
          stroke="#00d4ff"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Inner swirl - wave curling inward */}
        <path
          d="M60,220 Q100,280 180,260 Q260,240 280,180 Q300,120 240,100"
          stroke="#00d4ff"
          strokeWidth="2"
          fill="none"
        />
        {/* Secondary inner curl */}
        <path
          d="M240,100 Q180,90 160,130 Q140,170 180,190"
          stroke="#00d4ff"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Crest sparks - short curved lines */}
        <path d="M120,50 Q130,30 150,40" stroke="#00d4ff" strokeWidth="1" fill="none" />
        <path d="M100,70 Q105,55 120,60" stroke="#00d4ff" strokeWidth="1" fill="none" />
        <path d="M140,35 Q155,25 165,35" stroke="#00d4ff" strokeWidth="1" fill="none" />
        {/* Droplets - small filled circles at wave crest */}
        <circle cx="135" cy="25" r="3" fill="#00d4ff" />
        <circle cx="160" cy="20" r="2.5" fill="#00d4ff" />
        <circle cx="110" cy="40" r="2" fill="#00d4ff" />
        <circle cx="180" cy="30" r="2" fill="#00d4ff" />
        <circle cx="95" cy="55" r="2.5" fill="#00d4ff" />
        <circle cx="145" cy="15" r="1.5" fill="#00d4ff" />
        <circle cx="175" cy="45" r="2" fill="#00d4ff" />
      </svg>

      {/* LAYER 6 — Floating Particle Dots */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        {/* Particles scattered in upper 60% */}
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{ background: "#00d4ff", opacity: 0.5, top: "15%", left: "10%" }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ background: "#00ffcc", opacity: 0.4, top: "25%", left: "85%" }}
        />
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{ background: "#00d4ff", opacity: 0.6, top: "8%", left: "45%" }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ background: "#00ffcc", opacity: 0.35, top: "35%", left: "25%" }}
        />
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{ background: "#00d4ff", opacity: 0.45, top: "20%", left: "70%" }}
        />
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{ background: "#00ffcc", opacity: 0.3, top: "45%", left: "92%" }}
        />
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{ background: "#00d4ff", opacity: 0.55, top: "12%", left: "30%" }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ background: "#00ffcc", opacity: 0.4, top: "55%", left: "8%" }}
        />
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{ background: "#00d4ff", opacity: 0.5, top: "40%", left: "60%" }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ background: "#00ffcc", opacity: 0.35, top: "30%", left: "50%" }}
        />
      </div>
    </div>
  );
}
