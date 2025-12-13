import React, { useEffect, useState } from 'react';
import { TechLogo, techNames } from './TechLogo';

export const FloatingLogos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Create initial floating items
    const initialItems = techNames.flatMap((name, index) => {
      // Create 2-3 instances of each logo for more density
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

    // Animation loop
    const animate = () => {
      setItems((prevItems) =>
        prevItems.map((item) => {
          let newX = item.x + item.speedX;
          let newY = item.y + item.speedY;
          let newSpeedX = item.speedX;
          let newSpeedY = item.speedY;

          // Bounce off edges
          if (newX < -5 || newX > 105) {
            newSpeedX = -newSpeedX;
            newX = Math.max(-5, Math.min(105, newX));
          }
          if (newY < -5 || newY > 105) {
            newSpeedY = -newSpeedY;
            newY = Math.max(-5, Math.min(105, newY));
          }

          return {
            ...item,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            rotation: item.rotation + item.rotationSpeed,
          };
        })
      );
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-background">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute transition-transform duration-75 ease-linear"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
            opacity: item.opacity,
          }}
        >
          <TechLogo
            name={item.name}
            className="text-logo"
            style={{ width: item.size, height: item.size }}
          />
        </div>
      ))}
    </div>
  );
};
