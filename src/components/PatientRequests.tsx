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
  const [itemsPerPage, setItemsPerPage] = useState<number>(5)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [totalPage, setTotalPage] = useState<number>(Math.ceil(requestArr.length / itemsPerPage))
  const [checkAll, setCheckAll] = useState<boolean>(false);
  
  const getRequest = (start: number, end: number): JSX.Element => {
    const arr = requestArr.slice(start, end);

    return (
      <>
        {arr.map((item, index) => renderSingleRequest(item, index))}
      </>
    )

  }

  const colStyle: React.CSSProperties = {
    alignSelf: 'center',
  }

  const tagStyle: React.CSSProperties = {
    margin: '0'
  }

  const pageButtonStyle: React.CSSProperties = {
    backgroundColor: nxoStyle.darkColor,
    color: '#fff',
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
        <Col span={3} style={colStyle}>
          {request.patientId}
        </Col>
        <Col span={3} style={colStyle}>
          {request.date}
        </Col>
        <Col span={5} style={colStyle}>
          <UserOutlined />
          {' ' + request.patientName}
        </Col>
        <Col span={4} style={colStyle}>
          {renderRecordType(request.recordType)}
        </Col>
        <Col span={3} style={colStyle}>
          {renderPriorityTag(request.priority)}
        </Col>
        <Col span={3} style={colStyle}>
          {renderStatusTag(request.status)}
        </Col>
      </Row>
    )
  }
  
  const onChangeItemsPerPage = (value: number) => {
    setItemsPerPage(Number(value))
    setTotalPage(Math.ceil(requestArr.length / value))
    setCurrentPage(0)
  }

  const getCurrentItem = (): number => {
    return currentPage * itemsPerPage
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
          Showing {getCurrentItem() + 1} / {currentPage + 1 === totalPage ? requestArr.length : (getCurrentItem()) + itemsPerPage} of {requestArr.length}
        </Col>
        <Col span={16} style={colStyle}>
          <Button style={pageButtonStyle} shape="round" icon={<LeftOutlined />} size="middle" onClick={prevPage} />
          {` ${currentPage + 1} / ${totalPage} `}
          <Button style={pageButtonStyle} shape="round" icon={<RightOutlined />} size="middle" onClick={nextPage} />
        </Col>
        <Col span={4} style={colStyle}>
          Items Per Page
          <Select
            style={{marginLeft: '10px'}}
            defaultValue={5}
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
        <Col span={3} style={colStyle}>
          ID
        </Col>
        <Col span={3} style={colStyle}>
          Date 
        </Col>
        <Col span={5} style={colStyle}>
          Patient Name 
        </Col>
        <Col span={4} style={colStyle}>
          Record Type
        </Col>
        <Col span={3} style={colStyle}>
          Priority
        </Col>
        <Col span={3} style={colStyle}>
          Status
        </Col>
      </Row>
      <div>
        {getRequest(getCurrentItem(), currentPage + 1 === totalPage ? requestArr.length : (getCurrentItem()) + itemsPerPage)}
      </div>
      <div>
      </div>
    </div>
  )
}

export default PatientRequests;