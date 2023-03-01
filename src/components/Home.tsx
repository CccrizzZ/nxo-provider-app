import React, { useState } from 'react'
import '../styles/Home.css'
import {
  Card,
  Badge
} from 'react-bootstrap'

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
  display: 'flex'
}

const Home = (): JSX.Element => {
  const dashboardCards = (title: string, value: number, valColor: string, newValue?: number): JSX.Element => {
    return (
      <Card style={{ 
        width: '18rem', 
        color: '#fff',
        backgroundColor: '#292929',
        borderRadius: '1em',
        margin: 'auto'
      }}>
        <h5>{title}</h5>
        <div style={{ width: '60%', height: '80%' }}>
          <h1 style={{ color: valColor, fontWeight: 'bold' }}>{value}</h1>
          {newValue === undefined ? null : <Badge style={{backgroundColor: valColor}}>{newValue}</Badge> }
        </div>
      </Card>
    )
  }

  return (
    <div style={homeStyle}>
      <div style={headerStyle}>
        <h1>Dashboard</h1>
        
      </div>
      <div style={cardGroupStyle}>
        {dashboardCards('Patient Requests', 70, '#F54B71', 3)}
        {dashboardCards('Records Received', 35, '#F8A24F', 2)}
        {dashboardCards('Your Requests', 15, '#3286F0')}
        {dashboardCards('Records Delivered', 50, '#33A84F')}
      </div>
    </div>
  )
}

export default Home
