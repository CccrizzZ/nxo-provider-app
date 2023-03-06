import React, { useState } from 'react'
import '../styles/Home.css'
import { 
  Badge,
  Tabs,
} from 'antd'
import type { TabsProps } from 'antd'
import PatientRequest from '../Types/PatientRequest'
import PatientRequests from './PatientRequests'
import nxoStyle from '../styles/nxo-styles'

const homeStyle: React.CSSProperties = {
  backgroundColor: '#292929',
  color: '#FFFFFF',
  height: '100vh',
  overflowY: 'scroll',
  paddingBottom: '20px'
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
  marginTop: '20px',
}

const navBarStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#000',
  color: nxoStyle.nxoColor
}

const mockPatientRequestArray: PatientRequest[] = [
  {
    date: '03/03/2023',
    patientId: '1',
    patientName: 'Brodie Garrett',
    recordType: 'labResult',
    priority: 'low',
    status: 'rejected'
  },
  {
    date: '03/02/2023',
    patientId: '2',
    patientName: 'Riley Bradshaw',
    recordType: 'patientProfile',
    priority: 'low',
    status: 'rejected'
  },
  {
    date: '03/01/2023',
    patientId: '3',
    patientName: 'Grace Moyer',
    recordType: 'patientProfile',
    priority: 'emergency',
    status: 'complete'
  },
  {
    date: '02/28/2023',
    patientId: '4',
    patientName: 'Kimberley Evans',
    recordType: 'patientProfile',
    priority: 'emergency',
    status: 'pending'
  },
  {
    date: '02/27/2023',
    patientId: '5',
    patientName: 'Zoe Wilson',
    recordType: 'patientProfile',
    priority: 'medium',
    status: 'complete'
  },
  {
    date: '02/26/2023',
    patientId: '6',
    patientName: 'Alexis Mclaughlin',
    recordType: 'labResult',
    priority: 'low',
    status: 'pending'
  },
  {
    date: '02/25/2023',
    patientId: '7',
    patientName: 'Marilyn Stuart',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/24/2023',
    patientId: '8',
    patientName: 'Jeffrey Sutherland',
    recordType: 'labResult',
    priority: 'low',
    status: 'pending'
  },
  {
    date: '02/23/2023',
    patientId: '9',
    patientName: 'Asiya Johnson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/22/2023',
    patientId: '10',
    patientName: 'Simon Greene',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
  {
    date: '02/21/2023',
    patientId: '11',
    patientName: 'Aleena Davidson',
    recordType: 'doctorsNote',
    priority: 'medium',
    status: 'pending'
  },
]

const Home: React.FC = (): JSX.Element => {
  const [patientsRequestsArr] = useState<PatientRequest[]>(mockPatientRequestArray)

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
            marginBottom: '20px',
          }} color={valColor} count={'New ' + newValue}/>}
        </div>
      </div>
    )
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Patients Requests`,
      children: <PatientRequests requestArr={patientsRequestsArr} />,
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
    <div className='home' style={homeStyle}>
      <div style={navBarStyle}></div>
      <div style={headerStyle}>
        <h1 style={{fontSize:'32px'}}>Home</h1>
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
