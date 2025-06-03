'use client';
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const ReceiptScanner: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrResult, setOcrResult] = useState<string | null>(null);
  const [url, setUrl] = React.useState(null);
  const [sacn, setScan] = useState(false);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e: any) => {
    console.log(e);
  };



  return (
    <div>
      <h1>영수증 OCR 분석</h1>
      {
        sacn &&
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="480"  // 카메라 비디오의 가로 크기 설정
          height="auto"
          onUserMedia={onUserMedia}
          videoConstraints={{
            facingMode: "environment", // 후면 카메라 사용
          }}
        />
      }
      <button onClick={() => setScan(true)}>사진 찍기</button>
      <br/>
      <button onClick={capturePhoto} disabled={isProcessing}>
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
