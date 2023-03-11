import React, {useState} from 'react'
import PatientRequest from '../Types/PatientRequest';
import {
  Modal,
  Button,
  Input,
  Select,
} from 'antd'
import { 
  FaFileMedical,
  FaFile,
  FaClipboardList,
  FaQuestion,
  FaParagraph
} from "react-icons/fa";
import nxoStyle from '../styles/nxo-styles';

const inputStyle = {
  paddingBottom: '2px',
  margin: 'auto',
  width: '20%',
}

const InputBoxStyle = {
  margin: 'auto',
  border: '1px solid black',
  borderRadius: '1em',
  padding: '10px'
}

const InputLabelStyle = {
  margin: '2px',
  marginTop: '20px'
}

type RequestRecordProp = {
  show: boolean,
  closeFunc: () => void
}

const RequestRecord: React.FC<RequestRecordProp> = ({show, closeFunc}) => {
  const [priority, setPriority] = useState<string>('')
  const [showClosePopup, setShowClosePopup] = useState<boolean>(false)

  const sendRequest = () => {
    alert('request sent!')
    closeFunc()
  }

  const onSelectPriorityLevel = (value: string) => {
    setPriority(value)
  }

  const resetForm = () => {
    alert('reset')
    setPriority('')
  }  

  const showConfirmClosePopup = () => {
    setShowClosePopup(true) 
  }

  const hideConfirmClosePopup = () => {
    setShowClosePopup(false) 
  }

  const destroyForm = () => {
    hideConfirmClosePopup()
    closeFunc()
  }

  const onDescriptionChange = () => {
    
  }

  return (
    <Modal
      title="Request Record"
      centered
      open={show}
      onCancel={showConfirmClosePopup}
      // afterClose={resetForm}
      width={1000}
      destroyOnClose={true}
      maskClosable={false}
      bodyStyle={{
        backgroundColor: '#fff',
        color: '#000',
        userSelect: 'none'
      }}
      footer={[
        <Button key="back" onClick={showConfirmClosePopup}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" style={{backgroundColor: '#000', color: nxoStyle.LightNxoColor}} onClick={sendRequest}>
          Send Request
        </Button>,
      ]}
    >
      <Modal
      title="Discard This Form?"
      centered
      open={showClosePopup}
      onCancel={hideConfirmClosePopup}
      width={300}
      maskClosable={false}
      closable={false}
      bodyStyle={{
        backgroundColor: '#fff',
        color: '#000'
      }}
      footer={[
        <Button key="cancel" onClick={hideConfirmClosePopup}>
          Cancel
        </Button>,
        <Button key="confirm" type="primary" style={{backgroundColor: '#000', color: nxoStyle.LightNxoColor}} onClick={hideConfirmClosePopup}>
          Confirm
        </Button>,
      ]}
    />
      <div>
        <h2>Recipient Information</h2>
      </div>
      <div>
        <h2>Request Details</h2>
        <div style={InputBoxStyle}>
          <h4 style={InputLabelStyle}><FaClipboardList /> Priority:</h4>
          <Select
            defaultValue="low"
            style={{ 
              width: '20%',
              margin: '0'
            }}
            onChange={onSelectPriorityLevel}
            options={[
              { value: 'emergency', label: 'Emergency' },
              { value: 'medium', label: 'Medium' },
              { value: 'low', label: 'Low' },
            ]}
          />
          
          <h4 style={InputLabelStyle}><FaFileMedical /> Record Name:</h4>
          <Input style={inputStyle} placeholder="Enter Record Name"  />
          <h4 style={InputLabelStyle}><FaFile /> Record Type:</h4>
          <Input style={inputStyle} placeholder="Enter Record Type" />
          <h4 style={InputLabelStyle}><FaQuestion /> Reason for Request:</h4>
          <Input style={inputStyle} placeholder="Enter Reason for Request" />
          <h4 style={InputLabelStyle}><FaParagraph />Description:</h4>
          <Input.TextArea
            showCount
            maxLength={600}
            style={{ 
              height: 120, 
              width: '50%',
              resize: 'none',
              marginBottom: '20px'
            }}
            onChange={onDescriptionChange}
            placeholder="Enter Description..."
          />
        </div>
      </div>
    </Modal>
  )
}

export default RequestRecord