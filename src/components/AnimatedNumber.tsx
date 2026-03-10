import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

export const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    return display.on("change", (latest) => {
      setCurrentValue(latest);
    });
  }, [display]);

  return (
    <span>
      {currentValue}
      {suffix}
    </span>
  );
};
