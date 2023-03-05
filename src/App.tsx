import React from 'react'
import {
  Row,
  Col,
  Button,
  Layout, 
  Space
} from 'antd'
import { 
  HomeFilled, 
  FileFilled, 
  FileAddFilled, 
  PlusCircleFilled,
  CalendarFilled,
  AppstoreFilled
} from '@ant-design/icons'
import Home from './components/Home'
import nxoStyle from './styles/nxo-styles'
import logo from './assets/logo_landscape.png'
const { Sider, Content } = Layout;


// Font set to default
// Secondary Font:Archivo
// Roboto 

// Color codes:
// #69E4EA (Light Neon)
// #000000 (Black)
// #FFFFFF (White)
// #43ADB2 (Dark Neon)



const nxoColor = {
  color: nxoStyle.nxoColor
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
}

const siderStyle: React.CSSProperties = {
  textAlign: 'left',
  color: '#fff',
  backgroundColor: '#000',
  height: '100vh',
  padding: '20px',
  float: 'left'
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#000',
  textAlign: 'left',
  width: '100%',
  marginTop: '40px',
  ...nxoColor
}

const siderFooterStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  padding: '20px',
  marginBottom: '20px',
  ...nxoColor
}

const buttonStyleInverted: React.CSSProperties = {
  backgroundColor: nxoStyle.nxoColor,
  color: '#000',
  border: `0px, solid ${nxoStyle.nxoColor}`,
}

const borderedButtonStyle: React.CSSProperties = {
  border: `1px solid ${nxoStyle.nxoColor}`,
  ...buttonStyle
}

const borderlessButtonStyle: React.CSSProperties = {
  border: '1px solid #000',
  ...buttonStyle
}


const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%', height: '100%' }} size={[0, 48]}>
      <Layout>
        <Sider style={siderStyle} width="300">
          <img style={{width: '80%', margin: 'auto'}} src={logo} alt="logo" />
          <div style={{padding: '20px', textAlign: 'left'}}>
            <Button style={buttonStyleInverted} shape="round" icon={<FileFilled />} size="large">
              Send Request
            </Button>
            <Button style={borderedButtonStyle} shape="round" icon={<PlusCircleFilled />} size="large">
              Request Record
            </Button>
            <Button style={borderlessButtonStyle} shape="round" icon={<HomeFilled />} size="large">
              Home
            </Button>
            <Button style={borderlessButtonStyle} shape="round" icon={<FileAddFilled />} size="large">
              Share History
            </Button>
            <Button style={borderlessButtonStyle} shape="round" icon={<CalendarFilled />} size="large">
              Calendar
            </Button>
            <Button style={borderlessButtonStyle} shape="round" icon={<AppstoreFilled />} size="large">
              Integrations
            </Button>
          </div>
          <div style={siderFooterStyle}>
            <hr style={{borderTop: `1px solid ${nxoStyle.nxoColor}`}} />
            <a style={nxoColor} href=".">Terms and Conditions</a>
          </div>
        </Sider>
        <Layout>
          <Content style={contentStyle}>
            <Home />
          </Content>
        </Layout>
      </Layout>
    </Space>
  )
}
;
export default App
