import { Button, Card, Toast } from 'antd-mobile'
import { RightOutline } from 'antd-mobile-icons'
import useCustomBreakpoints from "../hooks/useCustomBreakPoints";

const CART_ITEMS = [
  {
    key: 'p1',
    title: 'Product 1',
    content: 'Product 1 Content'
  },
  {
    key: 'p2',
    title: 'Product 2',
    content: 'Product 2 Content'
  },
  {
    key: 'p3',
    title: 'Product 3',
    content: 'Product 3 Content'
  },
  {
    key: 'p4',
    title: 'Product 4',
    content: 'Product 4 Content'
  },
]


const HomePage = () => {
  const { isMobile } = useCustomBreakpoints();
  return (
    <div style={{ margin: '8px' }}>
      <div>
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
          key={item.key}
          style={{ width: isMobile ? '100%' : '172px', borderRadius: '16px' }}
          title={<div style={{ fontWeight: 'normal' }}>{item.title}</div>}
          extra={<RightOutline />}
          onBodyClick={() =>{}}
          onHeaderClick={() => {}}
        >
          <div className="card-content">{item.content}</div>
          {/* <div className="card-footer" onClick={e => e.stopPropagation()}>
            <Button
              color='primary'
              fill='outline'
              onClick={() => {
                Toast.show('加入購物車成功')
              }}
            >
              Add
            </Button>
          </div> */}
          </Card>
          ))}
      </div>
    </div>
  )
}

export default HomePage
