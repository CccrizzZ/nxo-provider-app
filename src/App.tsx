import React, { useState, useEffect } from 'react'
import {
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
import RequestRecord from './components/RequestRecord'
import nxoStyle from './styles/nxo-styles'
import './App.css'
import logo from './assets/logo_landscape.png'
import logo_splash from './assets/logo_splash.png'
const { Sider, Content } = Layout;

type FadeProp = { fade: 'fade-in' | 'fade-out' }

const nxoColor = {
  color: nxoStyle.LightNxoColor
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

const siderFooterStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  padding: '20px',
  marginBottom: '20px',
  width: '100%',
  ...nxoColor
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#000',
  textAlign: 'left',
  width: '100%',
  marginTop: '40px',
  fontSize: '18px',
  fontWeight: 'bold',
  ...nxoColor
}

const buttonStyleInverted: React.CSSProperties = {
  backgroundColor: nxoStyle.LightNxoColor,
  color: '#000',
  border: 'none',
  width: '100%',
  fontSize: '18px',
  fontWeight: 'bold',
  boxShadow: `0 3px 10px 1px ${nxoStyle.LightNxoColor}`,
}

const borderedButtonStyle: React.CSSProperties = {
  border: `1px solid ${nxoStyle.LightNxoColor}`,
  boxShadow: `0 3px 10px 1px ${nxoStyle.LightNxoColor}`,
  ...buttonStyle,
  textAlign: 'center',
}

const borderlessButtonStyle: React.CSSProperties = {
  border: 'none',
  borderRadius: '1em',
  ...buttonStyle
}

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<string>('block')
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
  const [showRequestRecordPopup, setShowRequestRecordPopup] = useState(false)

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setFadeProp({ fade: 'fade-out' })
      setInterval(() => setShowSplash('none'), 500)
    }, 1000)

    return () => {
      clearInterval(fadeTimeout)
    }
  }, [fadeProp])

  return (
    <Space direction="vertical" style={{ width: '100%', height: '100%' }} size={[0, 48]}>
      <Layout>
      <RequestRecord show={showRequestRecordPopup} closeFunc={() => setShowRequestRecordPopup(false)} />
      <div
        className={fadeProp.fade}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          backgroundColor: '#000',
          zIndex: '10000',
          overflow: 'hidden',
          margin: 'auto',
          display: showSplash
        }}
      >
        <img style={{ margin:'auto', display: 'flex', marginTop: '20vh'}} src={logo_splash} alt="SplashScreen"></img>
      </div>
        <Sider style={siderStyle} width="300">
          <img style={{width: '80%', margin: 'auto', marginBottom: '40px'}} src={logo} alt="logo" />
          <div style={{padding: '20px', textAlign: 'left'}}>
            <Button style={buttonStyleInverted} shape="round" icon={<FileFilled />} size="large">
              Send Request
            </Button>
            <Button style={borderedButtonStyle} shape="round" icon={<PlusCircleFilled />} size="large" onClick={() => setShowRequestRecordPopup(true)}>
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
            <hr style={{border: `0.1px solid ${nxoStyle.LightNxoColor}`, width: '80%', marginLeft: '0'}} />
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
export default App
