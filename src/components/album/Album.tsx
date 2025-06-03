'use client';
import React, { useState, useRef } from 'react';

interface AlbumProps {
  maxSelection?: number; // 최대 선택 가능 이미지 수 (옵션)
  onImagesSelected?: (images: string[]) => void; // 이미지 선택 콜백 (옵션)
}

const Album: React.FC<AlbumProps> = ({ maxSelection = 10, onImagesSelected }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);

      // 최대 선택 수 확인
      if (files.length + selectedImages.length > maxSelection) {
        alert(`최대 ${maxSelection}장까지 선택 가능합니다.`);
        return;
      }

      const newImageUrls = files.map((file) => URL.createObjectURL(file));
      const updatedImages = [...selectedImages, ...newImageUrls];

      setSelectedImages(updatedImages);

      // 콜백 함수 호출
      if (onImagesSelected) {
        onImagesSelected(updatedImages);
      }
    }
  };

  const removeImage = (index: number) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(newImages);

    // 콜백 함수 호출
    if (onImagesSelected) {
      onImagesSelected(newImages);
    }
  };

  return (
    <div className="album-container">
      {/* 숨겨진 파일 입력 */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        // 아래 속성 추가
        capture="environment" // 일부 브라우저에서 갤러리 우선
      />

      {/* 앨범 열기 버튼 */}
      <button
        className="album-open-btn"
        onClick={handleButtonClick}
        disabled={selectedImages.length >= maxSelection}
      >
        {selectedImages.length > 0
          ? `추가 선택 (${selectedImages.length}/${maxSelection})`
          : '앨범에서 사진 선택'}
      </button>

      {/* 선택한 이미지 미리보기 */}
      <div className="album-preview-container">
        {selectedImages.map((image, index) => (
          <div key={index} className="album-preview-item">
            <img
              src={image}
              alt={`선택 ${index + 1}`}
              className="album-preview-image"

            />
            <button
              className="album-remove-btn"
              onClick={() => removeImage(index)}
              aria-label="이미지 삭제"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;