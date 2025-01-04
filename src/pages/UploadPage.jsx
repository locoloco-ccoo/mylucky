import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ImageViewer, ImageUploader, Toast } from "antd-mobile";
import useCustomBreakpoints from "../hooks/useCustomBreakPoints";

const UploadPage = () => {
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const { isMobile } = useCustomBreakpoints();
  const mockUpload = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({ url: reader.result }); // 返回 base64 URL
      };
      reader.onerror = () => {
        reject(new Error("Upload failed"));
      };
      reader.readAsDataURL(file);
    });
  };

  const goToResultPage = () => {
    navigate('/result')
  }

  return (
    <div style={{ padding: "16px", textAlign: "center" }}>
      {/* 上傳圖片 */}
      <div
        style={{
          width: isMobile ? "200px" : "360px",
          height: isMobile ? "200px" : "360px",
          border: "1px solid silver", // 深灰色邊框
          borderRadius: "4px",
          margin: "0 auto",
        }}
      >
          <ImageUploader
            value={fileList}
            onChange={setFileList}
            upload={mockUpload}
            maxCount={1}
            showFailed={true}
            style={{
              '--cell-size': isMobile ? "200px" : "360px",
            }}
            onDelete={() => Toast.show("Photo removed")}
          />
      </div>

      {/* 查看圖片 */}
      {fileList.length > 0 && (
        <>
        <Button
          block
          color="primary"
          style={{ marginTop: "16px" }}
          onClick={() => ImageViewer.show({ image: fileList[0].url })}
        >
          查看圖片
        </Button>
        <Button
          block
          color="primary"
          style={{ marginTop: "16px" }}
          onClick={goToResultPage}
        >
          確認結果
        </Button>
      </>
      )}
    </div>
  )
}

export default UploadPage
