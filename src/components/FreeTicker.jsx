import React from 'react';

const FreeTicker = () => {
  const freeCount = 40; // how many "FREE" texts in one set

  return (
    <>
      <style>
        {`
          @keyframes slideLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .free-ticker-wrapper {
            overflow: hidden;
            white-space: nowrap;
            background: #111; /* dark background, adjust if needed */
            padding: 4px 0;
            width: 100%;
            position: relative;
          }

          .free-ticker-content {
            display: inline-block;
            /* width is twice the wrapper so content can loop */
            width: 200%;
            animation: slideLeft 10s linear infinite;
          }

          .free-text {
            display: inline-block;
            margin-right: 2rem;
            font-weight: 700;
            font-size: 14px;
            background: linear-gradient(90deg, #ec4899, #f87171, #facc15); /* pink-red-yellow gradient */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            user-select: none;
            text-shadow: 0 0 3px rgba(0,0,0,0.5);
          }
        `}
      </style>

      <div className="free-ticker-wrapper">
        <div className="free-ticker-content">
          {[...Array(freeCount)].map((_, idx) => (
            <span key={`first-${idx}`} className="free-text">
              FREE
            </span>
          ))}
          {[...Array(freeCount)].map((_, idx) => (
            <span key={`second-${idx}`} className="free-text">
              FREE
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default FreeTicker;
