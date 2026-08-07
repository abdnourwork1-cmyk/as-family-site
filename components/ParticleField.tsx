const PARTICLES = [
  { left: "6%", size: 3, duration: "10s", delay: "0s" },
  { left: "16%", size: 2, duration: "13s", delay: "1.2s" },
  { left: "27%", size: 4, duration: "9s", delay: "2.4s" },
  { left: "38%", size: 2, duration: "14s", delay: "0.6s" },
  { left: "49%", size: 3, duration: "11s", delay: "3s" },
  { left: "58%", size: 2, duration: "12s", delay: "1.8s" },
  { left: "68%", size: 4, duration: "10s", delay: "2.1s" },
  { left: "77%", size: 2, duration: "15s", delay: "0.3s" },
  { left: "86%", size: 3, duration: "9.5s", delay: "2.7s" },
  { left: "93%", size: 2, duration: "13.5s", delay: "1.5s" },
];

export function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle animate-drift"
          style={{
            left: p.left,
            bottom: "-10%",
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
