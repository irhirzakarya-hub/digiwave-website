"use client";

export function OceanWaveBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* LAYER 1 - Deep base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at 20% 50%,
            #0a1628 0%,
            #020810 50%,
            #000510 100%
          )`,
        }}
      />

      {/* LAYER 3 - Radial neon glow spots */}
      {/* Top-left glow */}
      <div
        className="absolute top-0 left-0"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      {/* Bottom-right glow */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(26, 111, 255, 0.08) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(0, 255, 204, 0.03) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* LAYER 2 - Animated SVG waves */}
      <div className="absolute bottom-0 left-0 w-[200%] h-[40vh]">
        {/* Wave 1 - Fastest */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full animate-wave-1"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          style={{ opacity: 0.15 }}
        >
          <path
            fill="#00d4ff"
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320L0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Wave 2 - Medium speed */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full animate-wave-2"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          style={{ opacity: 0.1 }}
        >
          <path
            fill="#1a6fff"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,186.7C672,192,768,224,864,229.3C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320L0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Wave 3 - Slowest */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full animate-wave-3"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          style={{ opacity: 0.07 }}
        >
          <path
            fill="#00ffcc"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,240C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,128L48,112C96,96,192,64,288,53.3C384,43,480,53,576,69.3C672,85,768,107,864,112C960,117,1056,107,1152,85.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320L0,320L48,320C96,320,192,320,288,320C384,320,480,320,576,320C672,320,768,320,864,320C960,320,1056,320,1152,320C1248,320,1344,320,1392,320L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* LAYER 4 - Noise texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
