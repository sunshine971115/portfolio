import React, { useState, useEffect } from 'react';
import './SemiDonutChart.css';
import { useInView } from 'react-intersection-observer';

const SemiDonutChart = ({ percentage, fill, txt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // When 50% of the component is in view
    triggerOnce: true // Only trigger once when entering the viewport
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`semi-donut margin ${isVisible ? 'visible' : ''}`}
      style={{ '--percentage': percentage, '--fill': fill }}
    >
      {txt}
    </div>
  );
}

export default SemiDonutChart;

