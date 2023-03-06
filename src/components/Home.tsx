import React, { useState } from 'react'
import '../styles/Home.css'
import { 
  Badge,
  Card,
  Tabs,
  Col, 
  Row,
  Checkbox
} from 'antd';
import type { TabsProps } from 'antd';
import PatientRequest from '../Types/PatientRequest';
import nxoStyle from '../styles/nxo-styles';

const homeStyle: React.CSSProperties = {
  backgroundColor: '#292929',
  color: '#FFFFFF',
  height: '100vh'
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  margin: 'auto',
  width: '80%'
}

const cardGroupStyle: React.CSSProperties = {
  backgroundColor: '#000',
  borderRadius: '2em',
  margin: 'auto',
  width: '70%',
  padding: '10px'
}

const recordBoxStyle: React.CSSProperties = {
  backgroundColor: '#111111',
  borderRadius: '2em',
  margin: 'auto',
  width: '80%',
  padding: '20px',
  marginTop: '50px'
}

const navBarStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#000',
  color: nxoStyle.nxoColor
}

const mockPatientRequestArray: PatientRequest[] = [
  {
    date: 'mm/dd/yyyy',
    patientId: '1',
    patientName: 'John Doe',
    recordType: 'Medical',
    priority: 'urgent',
    status: 'pending'
  },
  {
    date: 'mm/dd/yyyy',
    patientId: '1',
    patientName: 'John Doe',
    recordType: 'Medical',
    priority: 'urgent',
    status: 'pending'
  },
  {
    date: 'mm/dd/yyyy',
    patientId: '1',
    patientName: 'John Doe',
    recordType: 'Medical',
    priority: 'urgent',
    status: 'pending'
  },
  {
    date: 'mm/dd/yyyy',
    patientId: '1',
    patientName: 'John Doe',
    recordType: 'Medical',
    priority: 'urgent',
    status: 'pending'
  },
  {
    date: 'mm/dd/yyyy',
    patientId: '1',
    patientName: 'John Doe',
    recordType: 'Medical',
    priority: 'urgent',
    status: 'pending'
  },
  {
    date: 'mm/dd/yyyy',
    patientId: '1',
    patientName: 'John Doe',
    recordType: 'Medical',
    priority: 'urgent',
    status: 'pending'
  },
  {
    date: 'mm/dd/yyyy',
    patientId: '1',
    patientName: 'John Doe',
    recordType: 'Medical',
    priority: 'urgent',
    status: 'pending'
  },
]

const Home = (): JSX.Element => {
  const [patientsRequestsArr, setPatientRequestsArr] = useState<PatientRequest[]>(mockPatientRequestArray)

  const onChangeTab = (): void => {

  }

  const dashboardCards = (title: string, value: number, valColor: string, newValue?: number): JSX.Element => {
    return (
      <div style={{ 
        width: '18rem', 
        color: '#fff',
        backgroundColor: '#292929',
        borderRadius: '1em',
        border: 'none',
        padding: '0',
        margin: '5px'
      }}>
        <h1>{title}</h1>
        <div style={{ width: '60%', height: '80%', margin: 'auto'}}>
          <h1 style={{ 
            color: valColor, 
            fontWeight: 'bold', 
            fontSize: '50px', 
            margin: 'auto',
            display: 'inline-block'
          }}>{value}</h1>
          {newValue === undefined ? null : <Badge style={{
            boxShadow: 'none', 
            position: 'sticky',
            marginLeft: '20px',
            marginBottom: '20px',
          }} color={valColor} count={'New ' + newValue}/>}
        </div>
      </div>
    )
  }

  const renderPatientRequest = () => {
    const colStyle: React.CSSProperties = {
      alignSelf: 'center',
    }
    const renderSingleRequest = () => {
      return (
        <Row style={{
          backgroundColor: '#292929',
          margin: '10px',
          borderRadius: '2em',
          height: '40px',
        }}>
          <Col span={2} style={colStyle}>
            <Checkbox onChange={()=>{}}/>
          </Col>
          <Col span={4} style={colStyle}>
              Date 
          </Col>
          <Col span={4} style={colStyle}>
            Patient Name 
          </Col>
          <Col span={4} style={colStyle}>
            Record Type
          </Col>
          <Col span={4} style={colStyle}>
            Priority
          </Col>
          <Col span={4} style={colStyle}>
            Status
          </Col>
        </Row>
      )
    }

    return (
      <div>
        <div>
          <Row style={{
            backgroundColor: '#000',
            color: '#fff',
            margin: '10px',
            height: '40px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
            <Col span={2} style={colStyle}>
              <Checkbox onChange={()=>{}}/>
            </Col>
            <Col span={4} style={colStyle}>
              Date 
            </Col>
            <Col span={4} style={colStyle}>
              Patient Name 
            </Col>
            <Col span={4} style={colStyle}>
              Record Type
            </Col>
            <Col span={4} style={colStyle}>
              Priority
            </Col>
            <Col span={4} style={colStyle}>
              Status
            </Col>
          </Row>
        </div>
        <div>
          {renderSingleRequest()}
          {renderSingleRequest()}
          {renderSingleRequest()}
          {renderSingleRequest()}
          {renderSingleRequest()}
          
        </div>
      </div>
    )
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Patients Requests`,
      children: renderPatientRequest(),
    },
    {
      key: '2',
      label: `Records Received`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Your Requests`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div style={homeStyle}>
      <div style={navBarStyle}></div>
      <div style={headerStyle}>
        <h1 style={{fontSize:'32px'}}>Dashboard</h1>
      </div>
      <div style={cardGroupStyle}>
        <div style={{margin: 'auto', width: '80%', display: 'flex'}}>
          {dashboardCards('Patient Requests', 70, '#F54B71', 3)}
          {dashboardCards('Records Received', 35, '#F8A24F', 2)}
          {dashboardCards('Your Requests', 15, '#3286F0')}
          {dashboardCards('Records Delivered', 50, '#33A84F')}
        </div>
      </div>
      <div style={recordBoxStyle}>
        <Tabs
          style={{color: nxoStyle.LightNxoColor}}
          defaultActiveKey="1" 
          items={items} 
          onChange={onChangeTab} 
        />
      </div>
    </div>
  )
}

export default Home
