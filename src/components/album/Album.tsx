'use client';
import React, { useRef } from 'react';

const SCROLL_KEY = 'album-scroll-position';
const FILE_KEY = 'album-selected-file';

const Album = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 앨범 열기 버튼 클릭 시 input 클릭
  const handleOpenAlbum = () => {
    // 이전 스크롤 위치 복원
    const scrollY = localStorage.getItem(SCROLL_KEY);
    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
    }
    // 파일 선택창(앨범) 열기
    fileInputRef.current?.click();
  };

  // 파일 선택 시
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // 파일 이름과 현재 스크롤 위치 저장
      localStorage.setItem(FILE_KEY, file.name);
      localStorage.setItem(SCROLL_KEY, String(window.scrollY));
      // 여기서 파일 업로드 등 추가 작업 가능
    }
  };

  return (
    <div>
      <button onClick={handleOpenAlbum}>앨범 열기</button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      // capture 속성 없이 앨범/사진 선택만 가능 (카메라 바로 열리지 않음)
      />
    </div>
  );
};

export default Album;