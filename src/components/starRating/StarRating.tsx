'use client';
import React, { useState, useRef, useEffect } from "react";

// NOTE: 별점 테스트
const StarRating = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [value, setValue] = useState(0.5); // 슬라이더 값 (0.5 ~ 5)
  const [thumbPosition, setThumbPosition] = useState<number>();

  const min = 0.5; // 최소값
  const max = 5;   // 최대값
  const step = 0.5; // 단위

  const sliderWidth = sliderRef?.current?.clientWidth;

  const updateValue = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;


    const clampedOffsetX = Math.max(0, Math.min(offsetX, sliderRef.current?.clientWidth));

    if (sliderWidth) {
      const newValue = Math.round(((clampedOffsetX / sliderWidth) * (max - min) + min) / step) * step;
      setValue(newValue);
    }

  };

  const handleMouseEnter = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      updateValue(event.clientX);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseClick = (event: React.MouseEvent) => {
    updateValue(event.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (sliderWidth) {
    const position = ((value - min) / (max - min)) * sliderWidth;
    setThumbPosition(position)
  }

  return (
    <div>
      <div
        className="slider-container"
        ref={sliderRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseClick}
      >
        <div
          className="slider-thumb"
          ref={thumbRef}
          style={{ left: `${thumbPosition}px` }}
        />
      </div>
      <p>Value: {value.toFixed(1)}</p>
    </div>
  );
};

export default StarRating;
