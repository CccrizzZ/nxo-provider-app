import React, { useState, useEffect } from 'react'
import { 
  Badge,
  Col, 
  Row,
  Checkbox,
  Select,
  Tag,
  Button
} from 'antd'
import {
  UserOutlined,
  RightOutlined,
  LeftOutlined
} from '@ant-design/icons'
import nxoStyle from '../styles/nxo-styles'
import PatientRequest from '../Types/PatientRequest'

type patientRequestProps = {
  requestArr: PatientRequest[]
}

const PatientRequests: React.FC<patientRequestProps> = ({requestArr}) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [totalPage, setTotalPage] = useState<number>(Math.ceil(requestArr.length / itemsPerPage))
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [slicedArr] = useState<Array<PatientRequest[]>>()
  
  useEffect(() => {
    
  })

  const sliceDataIntoArr = () => {
    for (let i = 0; i < totalPage; i++) {
      // slicedArr.push(requestArr.slice(i * itemsPerPage, itemsPerPage))
      console.log(slicedArr)
    }
  }

  const colStyle: React.CSSProperties = {
    alignSelf: 'center',
  }

  const tagStyle: React.CSSProperties = {
    margin: '0'
  }

  const pageButtonStyle: React.CSSProperties = {
    backgroundColor: nxoStyle.darkColor,
    color: nxoStyle.LightNxoColor,
    border: '1px solid black'
  }

  const nextPage = (): void => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = (): void => {
    if(currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  };

  const renderStatusTag = (tag: string) => {
    switch (tag) {
      case 'pending':
        return <Tag color="warning" style={tagStyle}>Pending</Tag>
      case 'complete':
        return <Tag color="success" style={tagStyle}>Complete</Tag>
      case 'rejected':
        return <Tag color="error" style={tagStyle}>Rejected</Tag>
    }
  }

  const renderPriorityTag = (tag: string) => {
    switch (tag) {
      case 'emergency':
        return <Tag color="error" style={tagStyle}>Urgent</Tag>
      case 'medium':
        return <Tag color="processing" style={tagStyle}>Normal</Tag>
      case 'low':
        return <Tag color="#fff" style={{color: '#000' , ...tagStyle}}>Low</Tag>
    }
  }

  const renderRecordType = (recordType: string) => {
    switch (recordType) {
      case 'patientProfile':
        return 'Patient Profile'
      case 'labResult': 
        return 'Lab Result'
      case 'doctorsNote' :
        return 'Doctors Note'
    }
  }

  const renderSingleRequest = (request: PatientRequest, key: number) => {
    return (
      <Row key={key} style={{
        backgroundColor: '#292929',
        margin: '10px',
        borderRadius: '2em',
        height: '40px',
      }}>
        <Col span={2} style={colStyle}>
          <Checkbox onChange={()=>{}}/>
        </Col>
        <Col span={4} style={colStyle}>
          {request.date}
        </Col>
        <Col span={4} style={colStyle}>
          <UserOutlined />
          {' ' + request.patientName}
        </Col>
        <Col span={4} style={colStyle}>
          {renderRecordType(request.recordType)}
        </Col>
        <Col span={4} style={colStyle}>
          {renderPriorityTag(request.priority)}
        </Col>
        <Col span={4} style={colStyle}>
          {renderStatusTag(request.status)}
        </Col>
      </Row>
    )
  }

  const renderPage = () => {
    const arr = requestArr.slice(currentPage * itemsPerPage, itemsPerPage)
    return arr.map((item, key) => renderSingleRequest(item, key))
  }
  
  const onChangeItemsPerPage = (value: number) => {
    setItemsPerPage(Number(value))
    setTotalPage(Math.ceil(requestArr.length / value))
    setCurrentPage(0)
  }

  return (
    <div>
      <Row style={{
        color: '#fff',
        margin: '10px',
        height: '40px',
        textAlign: 'center',
      }}>
        <Col span={4} style={colStyle}>
          Showing {currentPage * itemsPerPage + 1} / {currentPage + 1 === totalPage ? requestArr.length : (currentPage * itemsPerPage) + itemsPerPage} of {requestArr.length}
        </Col>
        <Col span={16} style={colStyle}>
          <Button style={pageButtonStyle} shape="round" icon={<LeftOutlined />} size="middle" onClick={prevPage} />
          {` ${currentPage + 1} `}
          <Button style={pageButtonStyle} shape="round" icon={<RightOutlined />} size="middle" onClick={nextPage} />
        </Col>
        <Col span={4} style={colStyle}>
          Items Per Page
          <Select
            style={{marginLeft: '10px'}}
            defaultValue={10}
            onChange={onChangeItemsPerPage}
            options={[
              { value: '5', label: '5' },
              { value: '10', label: '10' },
              { value: '20', label: '20' },
              { value: '40', label: '40' }
            ]}
          />
        </Col>
      </Row>
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
      <div>
        {renderPage()}
      </div>
      <div>
      </div>
    </div>
  )
}

export default PatientRequests;