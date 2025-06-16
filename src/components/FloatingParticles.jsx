import { useEffect, useState } from "react";

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = ["#00ffff", "#9d4edd", "#ff00ff"];
    const newParticles = [];

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: Math.random() * 6,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-10]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="animate-float"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            animationDelay: `${particle.animationDelay}s`,
            position: "absolute",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
