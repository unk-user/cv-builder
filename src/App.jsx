import { useState } from 'react';
import './App.css';
import PersonalDetails from './components/personalInfo/personalDetails';
import EducationDetails from './components/educationInfo/educationDetails';
import ExperienceDetails from './components/experienceInfo/experienceDetails';
import Preview from './components/preview';
import Button from './components/button';
import example from './example';

function App() {
  const [personalInfo, setPersonalInfo] = useState(example.personalInfo);
  const [schoolList, setSchoolList] = useState(example.schoolList);
  const [experienceList, setExperienceList] = useState(example.experienceList)
  const [selectedSection, selectSection] = useState(null);

  const toggleSection = (e) => {
    selectSection(e.target.id !== selectedSection ? e.target.id : null);
    console.log(selectedSection)
  };
  const reset = () => {
    setPersonalInfo({});
    setExperienceList([]);
    setSchoolList([]);
  }

  return (
    <>
      <div className="edit-bar">
        <Button name='reset' onClick={reset} className='reset-btn'/>
      </div>
      <div className="info-container">
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
        <ExperienceDetails
          experienceList={experienceList}
          setExperienceList={setExperienceList}
          toggleSection={toggleSection}
          selectedSection={selectedSection}
        />
      </div>
      <Preview 
        personalInfo={personalInfo}
        schoolList={schoolList} 
        experienceList={experienceList}
      />
    </>
  );
}

export default App;
