import { useState } from 'react';
import './App.css';
import PersonalDetails from './components/personalInfo/personalDetails';
import EducationDetails from './educationInfo/educationDetails';
import Preview from './components/preview';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [schoolList, setSchoolList] = useState([
    {
      schoolName: 'hey hey',
      degree: 'hohoh',
      startDate: '',
      endDate: '',
      location: '',
    },
    {
      schoolName: 'heygy hey',
      degree: 'hohoh',
      startDate: '',
      endDate: '',
      location: '',
    },
  ]);
  const [selectedSection, selectSection] = useState(null);
  

  const toggleSection = e => {
    selectSection(
      e.target.id !== selectedSection ? e.target.id : null
    )
  }

  return (
    <>
      <div className="edit-container">
        <PersonalDetails
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <EducationDetails 
          schoolList={schoolList}
          setSchoolList={setSchoolList}
          toggleSection={toggleSection}
          selectedSection={selectedSection}
        />
      </div>
      <Preview personalInfo={personalInfo}/>
    </>
  );
}

export default App;
