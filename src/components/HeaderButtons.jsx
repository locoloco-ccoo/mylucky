import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'antd-mobile'
import colorAnalysisIcon from '../assets/colorAnalysis.svg';
import historyRecordIcon from '../assets/history.svg';


const styles = {
    img: {
        width: '64px',
        height: '64px'
    }
}

const HeaderButtons = ({ onLogout, profile }) => {
  const navigate = useNavigate();
  const handleColorAnalysisClick = () => {
    navigate('/tutorial')
  };

  const handleHistoryRecordClick = () => {
    console.log('Navigating to History Record...');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', marginBottom: '8px' }}>
      {/* 色彩鑑定按鈕 */}
      <div
        onClick={handleColorAnalysisClick}
        className="header-btn"
      >
        <img src={colorAnalysisIcon} alt="Color Analysis Icon" style={styles.img}/>
      </div>

      {/* 歷史記錄按鈕 */}
      <div
        onClick={handleHistoryRecordClick}
        className="header-btn"
      >
        <img src={historyRecordIcon} alt="History Record Icon" style={styles.img} />
      </div>
      <div 
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '0.25rem',
          padding: '2px 8px',
          marginBottom: '8px'
        }}
      >
        <Avatar
          src={profile?.pictureUrl}
          style={{ '--size': '48px' }} // 調整頭像大小
        />
        <div style={{ marginLeft: '8px' }}>
        <span>{profile?.displayName}</span><br />
        <a onClick={onLogout}>
          登出
        </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderButtons;
