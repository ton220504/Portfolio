import React, { useEffect, useState } from 'react';
import { TechLogo, techNames } from './TechLogo';

export const FloatingLogos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const initialItems = techNames.flatMap((name, index) => {
      const count = Math.floor(Math.random() * 2) + 2;
      return Array.from({ length: count }, (_, i) => ({
        id: index * 10 + i,
        name,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 24 + Math.random() * 32,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        opacity: 0.1 + Math.random() * 0.2,
      }));
    });

    setItems(initialItems);

    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => {
          let x = item.x + item.speedX;
          let y = item.y + item.speedY;
          let sx = item.speedX;
          let sy = item.speedY;

          if (x < -5 || x > 105) sx = -sx;
          if (y < -5 || y > 105) sy = -sy;

          return {
            ...item,
            x,
            y,
            speedX: sx,
            speedY: sy,
            rotation: item.rotation + item.rotationSpeed,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            position: 'absolute',
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
            opacity: item.opacity,
          }}
        >
          <TechLogo
            name={item.name}
            style={{ width: item.size, height: item.size }}
          />
        </div>
      ))}
    </div>
  );
};

