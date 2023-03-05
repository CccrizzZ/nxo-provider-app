import React, { useState } from 'react'
import '../styles/Home.css'
import { 
  Badge, 
  Space, 
  Switch, 
  Card
} from 'antd';

const homeStyle = {
  backgroundColor: '#292929',
  color: '#FFFFFF',
  height: '100vh'
}

const headerStyle = {
  display: 'flex',
  margin: 'auto',
  width: '80%'
}

const cardGroupStyle = {
  backgroundColor: '#000',
  borderRadius: '2em',
  margin: 'auto',
  width: '80%',
  padding: '20px'
}

const Home = (): JSX.Element => {
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

  return (
    <div style={homeStyle}>
      <div style={headerStyle}>
        <h1>Dashboard</h1>
        
      </div>
      <div style={cardGroupStyle}>
        <div style={{margin: 'auto', width: '80%', display: 'flex'}}>
          {dashboardCards('Patient Requests', 70, '#F54B71', 3)}
          {dashboardCards('Records Received', 35, '#F8A24F', 2)}
          {dashboardCards('Your Requests', 15, '#3286F0')}
          {dashboardCards('Records Delivered', 50, '#33A84F')}
        </div>
      </div>
    </div>
  )
}

export default Home
