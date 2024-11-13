'use client';
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";

const ReceiptScanner: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrResult, setOcrResult] = useState<string | null>(null);

  // 카메라로 캡처한 이미지를 OCR 처리하는 함수
  const captureAndProcessImage = async () => {
    if (webcamRef.current) {
      // 웹캠에서 이미지 캡처
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setIsProcessing(true);
        try {
          // Tesseract.js로 이미지 텍스트 추출
          const result = await Tesseract.recognize(
            imageSrc,
            "eng", // OCR을 위한 언어 설정 (영어)
            {
              logger: (m) => console.log(m), // 진행 상황 로깅
            }
          );
          setOcrResult(result.data.text); // OCR 결과를 상태에 저장
        } catch (error) {
          console.error("OCR 처리 중 오류 발생:", error);
        } finally {
          setIsProcessing(false);
        }
      }
    }
  };

  return (
    <div>
      <h1>영수증 OCR 분석</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{
          facingMode: "environment", // 후면 카메라 사용
        }}
      />
      <button onClick={captureAndProcessImage} disabled={isProcessing}>
        {isProcessing ? "처리 중..." : "이미지 캡처 및 분석"}
      </button>
      {ocrResult && (
        <div>
          <h2>OCR 결과:</h2>
          <pre>{ocrResult}</pre>
        </div>
      )}
    </div>
  );
};

export default ReceiptScanner;
