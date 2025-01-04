import React from 'react';
import { useNavigate } from 'react-router-dom';
import colorAnalysisIcon from '../assets/colorAnalysis.svg';
import historyRecordIcon from '../assets/history.svg';


const styles = {
    img: {
        width: '64px',
        height: '64px'
    }
}

const HeaderButtons = () => {
  const navigate = useNavigate();
  const handleColorAnalysisClick = () => {
    navigate('/tutorial')
  };

  const handleHistoryRecordClick = () => {
    console.log('Navigating to History Record...');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
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
    </div>
  );
};

export default HeaderButtons;
