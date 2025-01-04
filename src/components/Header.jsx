import React from "react";
import { Button, Space } from 'antd-mobile'
import { useLocation, useNavigate } from 'react-router-dom';
import mainLogo from '../assets/logo.svg';
import lineIcon from '../assets/line_icon.svg';
import HeaderButtons from './HeaderButtons';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isLogin = true
    const navigate = useNavigate()

    const handleLoginClick = () => {
        // 在此處跳轉到 Flask 的 Line 登入頁面
        window.location.href = 'http://127.0.0.1:5000/line_login';
    };

    const goToHomePage = () => {
        navigate('/')
    }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px' }}>
      <div onClick={goToHomePage}>
        <img src={mainLogo} className="logo" style={{ paddingLeft: 0 }} />
      </div>
      {isHomePage && (
      <div>
        {isLogin ? <HeaderButtons /> : (
        <Button color='success' onClick={handleLoginClick}>
          <Space align='center'>
          <img src={lineIcon} alt="Line Icon" />
          <span>Log In</span>
          </Space>
        </Button>)}
      </div>
    )}
    </div>
  );
};

export default Header;