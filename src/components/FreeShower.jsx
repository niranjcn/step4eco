import React, { useEffect, useState } from 'react';

const generateFreeItems = () => {
  const gradients = [
    'bg-gradient-to-r from-green-400 via-emerald-600 to-lime-400',
    'bg-gradient-to-r from-lime-300 via-green-600 to-emerald-500',
    'bg-gradient-to-r from-teal-300 via-green-500 to-lime-500',
    'bg-gradient-to-r from-green-300 via-lime-600 to-emerald-600',
    'bg-gradient-to-r from-emerald-300 via-green-700 to-lime-400',
  ];

  const items = [];
  for (let i = 0; i < 30; i++) {
    items.push({
      id: `${Date.now()}-${i}`,
      left: Math.random() * 100,
      size: Math.floor(Math.random() * 16) + 24, // 24px to 40px
      delay: Math.random(),
      duration: 4 + Math.random(), // 4s to 5s
      gradientClass: gradients[Math.floor(Math.random() * gradients.length)],
    });
  }
  return items;
};

const FreeShower = () => {
  const [freeItems, setFreeItems] = useState([]);

  useEffect(() => {
    const spawnItems = () => {
      const newItems = generateFreeItems();
      setFreeItems(newItems);

      setTimeout(() => {
        setFreeItems([]);
      }, 6000);
    };

    spawnItems();
    const interval = setInterval(spawnItems, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-10vh);
              opacity: 1;
            }
            100% {
              transform: translateY(110vh);
              opacity: 0.9;
            }
          }

          .animate-fall {
            animation-name: fall;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
          }

          .text-shadow {
            text-shadow:
              0 0 4px rgba(0,0,0,0.3);
          }
        `}
      </style>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] overflow-hidden">
        {freeItems.map((item) => (
          <span
            key={item.id}
            className={`absolute animate-fall ${item.gradientClass} text-transparent bg-clip-text font-extrabold text-shadow whitespace-nowrap`}
            style={{
              left: `${item.left}%`,
              fontSize: `${item.size}px`,
              animationDuration: `${item.duration}s`,
              animationDelay: `-${item.delay * item.duration}s`,
              top: 0,
            }}
          >
            FREE
          </span>
        ))}
      </div>
    </>
  );
};

export default FreeShower;
