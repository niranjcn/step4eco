import React from 'react';

const FreeTicker = () => {
  const freeCount = 40; // Number of "FREE" texts in one set for seamless looping

  return (
    <>
      {/*
        Inline style block for CSS animations and ticker specific styles.
        This approach is used for keyframe animations that are not directly
        supported by Tailwind's utility classes for animation definitions.
      */}
      <style>
        {`
          /* Keyframe animation for horizontal sliding */
          @keyframes slideLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%); /* Moves content halfway to create a loop */
            }
          }

          /* Wrapper for the ticker to hide overflow and set background */
          .free-ticker-wrapper {
            overflow: hidden;
            white-space: nowrap;
            background: #0a0a0a; /* Very dark background for contrast */
            padding: 6px 0; /* Slightly increased padding */
            width: 100%;
            position: relative;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.3); /* Subtle inner shadow */
          }

          /* Content container that applies the animation */
          .free-ticker-content {
            display: inline-block;
            width: 200%; /* Twice the wrapper width for continuous loop */
            animation: slideLeft 15s linear infinite; /* Adjusted speed for smoother effect */
          }

          /* Styling for each "FREE" text element */
          .free-text {
            display: inline-block;
            margin-right: 2.5rem; /* Increased spacing between words */
            font-weight: 800; /* Extra bold font weight */
            font-size: 15px; /* Slightly larger font size */
            /* Eco-themed gradient: vibrant green to lime green */
            background: linear-gradient(90deg, #34d399, #84cc16, #d9f99d);
            -webkit-background-clip: text; /* Clip background to text shape */
            -webkit-text-fill-color: transparent; /* Make text transparent to show gradient */
            user-select: none; /* Prevent text selection */
            text-shadow: 0 0 5px rgba(52,211,153,0.4); /* Subtle glow effect matching the gradient */
            letter-spacing: 0.05em; /* Slight letter spacing for readability */
          }

          /* Pause animation on hover for better user experience */
          .free-ticker-wrapper:hover .free-ticker-content {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Main ticker wrapper */}
      <div className="free-ticker-wrapper">
        {/* Ticker content, duplicated to ensure continuous loop */}
        <div className="free-ticker-content">
          {/* First set of "FREE" texts */}
          {[...Array(freeCount)].map((_, idx) => (
            <span key={`first-${idx}`} className="free-text">
              FREE
            </span>
          ))}
          {/* Second set of "FREE" texts, immediately following the first */}
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
