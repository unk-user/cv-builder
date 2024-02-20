import { useState } from 'react';
import './App.css';
import PersonalDetails from './components/personalInfo/personalDetails';
import Preview from './components/preview';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [EducationInfo, setEducationInfo] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  return (
    <>
      <PersonalDetails
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <Preview personalInfo={personalInfo}/>
    </>
  );
}

export default App;
