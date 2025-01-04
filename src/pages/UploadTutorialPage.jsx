import React from "react";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";

const UploadTutorialPage = () => {
  const navigate = useNavigate()

  const goToUploadPage = () => {
    navigate('/upload')
  }

  return (
    <div style={{ padding: "16px", fontFamily: "'Arial', sans-serif" }}>
      {/* Upload Button */}
      <Button
        block
        color="primary"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: 'none'
        }}
      >
        上傳照片說明
      </Button>

      <div
        style={{
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          marginBottom: "16px",
          textAlign: "left",
          lineHeight: "1.6",
        }}
      >
        <div style={{ color: "red", fontSize: "14px", marginBottom: "8px" }}>
          1. 請在正常的燈光環境下拍攝或上傳
        </div>
        <div style={{ color: "#333", fontSize: "14px", marginBottom: "8px" }}>
          2. 請注意儀容或者在最自然的狀況下才能有最好的結果喔！
        </div>
        <div style={{ color: "#333", fontSize: "14px" }}>
          3. 測驗結果可能會因為環境或個人因素有所不同還須注意
        </div>
      </div>

      <Button
        block
        color="default"
        onClick={goToUploadPage}
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        測驗開始
      </Button>
    </div>
  );
};

export default UploadTutorialPage;

