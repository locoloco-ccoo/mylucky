import React, { useState, useEffect } from "react";
import { Button, Space } from 'antd-mobile'
import { useLocation, useNavigate } from 'react-router-dom';
import liff from '@line/liff';
import mainLogo from '../assets/logo.svg';
import lineIcon from '../assets/line_icon.svg';
import HeaderButtons from './HeaderButtons';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isLogin, setIsLogin] = useState(false);
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
      const initLiff = async () => {
          try {
              await liff.init({ liffId: '123456789' }); // 替換為你的 LIFF ID
              if (liff.isLoggedIn()) {
                  setIsLogin(true);
                  const userProfile = await liff.getProfile();
                  setProfile(userProfile);
              }
          } catch (err) {
              console.error("LIFF 初始化失敗:", err);
          }
      };
      initLiff();
  }, []);

  const handleLoginClick = () => {
    if (!liff.isLoggedIn()) {
        liff.login();
    }
  };

  const handleLogoutClick = () => {
    if (liff.isLoggedIn()) {
        liff.logout();
        setIsLogin(false);
        setProfile(null);
    }
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
        {isLogin
          ? (<div>
            <HeaderButtons onLogout={handleLogoutClick} profile={profile} />
        </div>
        ) :
        (<Button color='success' onClick={handleLoginClick}>
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