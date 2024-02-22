import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import CreateExperienceForm from './createExperienceForm';
import Button from '../button';
import { useState } from 'react';

export default function ExperienceDetails({
  experienceList,
  setExperienceList,
  toggleSection,
  selectedSection,
}) {
  const [openForm, setOpenForm] = useState({
    isOpen: false,
    item: null,
  });

  const toggleForm = (e) => {
    setOpenForm({
      isOpen: !openForm.isOpen,
      itemId: e.target.id,
    });
  };

  return (
    <div className="education-container">
      <div className="expand-section" id="experience" onClick={toggleSection}>
        Experience
      </div>
      {selectedSection === 'experience' && (
        <div className="experience-section">
          {openForm.isOpen ? (
            <CreateExperienceForm
              experienceList={experienceList}
              setExperienceList={setExperienceList}
              openForm={openForm}
              setOpenForm={setOpenForm}
            />
          ) : (
            <>
              {experienceList.map((stage, index) => {
                return (
                  <div
                    className="list-item"
                    id={index}
                    onClick={toggleForm}
                    key={uuidv4}
                  >
                    {stage.companyName}
                  </div>
                );
              })}
              <div>
                <Button id='newExperience' className='newItem' onClick={toggleForm} name='Add Experience'/>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

ExperienceDetails.propTypes = {
  experienceList: propTypes.array,
  setExperienceList: propTypes.func,
  toggleSection: propTypes.func,
  selectedSection: propTypes.string,
};