import { useMemo } from 'react';
import { isHolidayMode } from '../holidayMode';

const FLAKE_COUNT = 40;

const Snowfall = () => {
  const flakes = useMemo(
    () =>
      Array.from({ length: FLAKE_COUNT }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${4 + Math.random() * 7}px`,
        duration: `${7 + Math.random() * 9}s`,
        delay: `${-Math.random() * 12}s`,
        opacity: 0.4 + Math.random() * 0.6,
      })),
    []
  );

  if (!isHolidayMode) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;