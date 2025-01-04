import { Button, Card, Toast, Space } from 'antd-mobile'
import { AntOutline, RightOutline } from 'antd-mobile-icons'
import mainLogo from './assets/logo.svg'
import lineIcon from './assets/line_icon.svg'

import './App.css'

const CART_ITEMS = [
  {
    title: 'Product 1',
    content: 'Product 1 Content'
  },
  {
    title: 'Product 2',
    content: 'Product 2 Content'
  },
  {
    title: 'Product 3',
    content: 'Product 3 Content'
  },
  {
    title: 'Product 4',
    content: 'Product 4 Content'
  },
]


function App() {
  const handleLoginClick = () => {
    // 在此處跳轉到 Flask 的 Line 登入頁面
    window.location.href = 'http://127.0.0.1:5000/line_login';
  };
  return (
    <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={mainLogo} className="logo" style={{ paddingLeft: 0}} />          
          <div>
            <Button color='success' onClick={handleLoginClick}>
              <Space align='center'>       
              <img src={lineIcon} alt="Line Icon" />
              <span>Log In</span>
              </Space>
            </Button>
          </div>
        </div>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '1rem',
          padding: '16px',
          marginBottom: '16px'
        }}>
          <p>關於色彩鑑定:</p>
          <div style={{ textAlign: 'center' }}>
          <p>每個人都是獨一無二的，所以每個人都有自己</p>
          <p>獨有的顏色來代表自己，</p>
          <p>"天生緣色的誕生就是用來尋覓你的天生之色，</p>
          <p>讓我們開啟這趟旅程吧!</p>         
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {CART_ITEMS.map((item) => (
      <Card
          style={{ width: '150px', borderRadius: '16px' }}
          title={<div style={{ fontWeight: 'normal' }}>{item.title}</div>}
          extra={<RightOutline />}
          onBodyClick={() =>{}}
          onHeaderClick={() => {}}
        >
          <div className="card-content">{item.content}</div>
          <div className="card-footer" onClick={e => e.stopPropagation()}>
            <Button
              color='primary'
              fill='outline'
              onClick={() => {
                Toast.show('加入購物車成功')
              }}
            >
              Add
            </Button>
          </div>
          </Card>
          ))}
      </div>
      
    </>
  )
}

export default App

