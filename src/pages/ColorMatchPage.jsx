import React, { useState, useEffect } from 'react'
import { colorConfigs } from '../configs/colorConfigs'
import useCustomBreakpoints from '../hooks/useCustomBreakPoints';

const styles = {
    colorBlock: {
        width: '242px',
        height: '136px',
        display: 'flex', 
        justifyContent: 'center', 
        gap: '8px', 
        flexWrap: 'wrap', 
        marginBottom: '16px', 
        backgroundColor: 'white',
        padding: '16px'
    },
}

const ColorMatchPage = () => {
  const [config, setConfig] = useState(null)
  const { isMobile } = useCustomBreakpoints()

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colorConfigs.length)
    setConfig(colorConfigs[randomIndex])
  }, [])

  if (!config) {
    return <div>正在加載結果...</div>;
  }

  return (
    <div style={{ margin: isMobile ? '12px': '0', padding: isMobile ? '8px' : '16px', backgroundColor: '#FFECEC', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center', margin: '16px' }}>
        <p style={{ fontSize: '16px', marginBottom: '8px' }}>你的結果是：</p>
      </div>
      <div style={styles.colorBlock}>
        {config.colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: color,
              borderRadius: '50%',
            }}
          />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '24px', margin: '8px 0' }}>{config.title}</h2>
        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>{config.description}</p>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <button
          onClick={() => console.log('來看搭配！')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ccc',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          來看搭配
        </button>
      </div>
    </div>
  );
};

export default ColorMatchPage;

