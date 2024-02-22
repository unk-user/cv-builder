import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import CreateEducationForm from './createEducationForm';
import Button from '../button';
import { useState } from 'react';

export default function EducationDetails({
  schoolList,
  setSchoolList,
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
      <div className="expand-section" id="education" onClick={toggleSection}>
        Education
      </div>
      {selectedSection === 'education' && (
        <div className="education-edit-section">
          {openForm.isOpen ? (
            <CreateEducationForm
              schoolList={schoolList}
              setSchoolList={setSchoolList}
              openForm={openForm}
              setOpenForm={setOpenForm}
            />
          ) : (
            <>
              {schoolList.map((school, index) => {
                return (
                  <div
                    className="list-item"
                    id={index}
                    onClick={toggleForm}
                    key={uuidv4}
                  >
                    {school.schoolName}
                  </div>
                );
              })}
              <div className='add-btn-container'>
                <Button id='newSchool' className='newItem' onClick={toggleForm} name='Add School'/>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

EducationDetails.propTypes = {
  schoolList: propTypes.array,
  setSchoolList: propTypes.func,
  toggleSection: propTypes.func,
  selectedSection: propTypes.string,
};
