'use client';
import React, { useState } from 'react';

const BottomMenu = () => {
  const [rotation, setRotation] = useState(0);

  const handleDrag = (event: any) => {
    const deltaX = event.movementX; // 마우스 이동량
    setRotation((prev) => prev + deltaX * 0.5); // 각도 변경
  };

  return (
    <div
      className="donut"
      onMouseMove={handleDrag}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="button">A</div>
      <div className="button">B</div>
      <div className="button">C</div>
    </div>
  );
};

export default BottomMenu;