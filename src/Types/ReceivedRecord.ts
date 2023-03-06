type ReceivedRecords = {
    date: string,
    patientName: string,
    patientId: string,
    recordType: string,
    priority: string,
    status: 'pending' | 'complete' | 'rejected',
  }
  
  export default ReceivedRecords