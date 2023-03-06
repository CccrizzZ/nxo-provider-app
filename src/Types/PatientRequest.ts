type PatientRequest = {
  date: string,
  patientName: string,
  patientId: string,
  recordType: 'patientProfile' | 'labResult' | 'doctorsNote',
  priority: 'emergency' | 'medium' | 'low',
  status: 'pending' | 'complete' | 'rejected',
}

export default PatientRequest