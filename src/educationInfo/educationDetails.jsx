import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import CreateForm from '../components/createForm';

export default function EducationDetails({
  schoolList,
  setSchoolList,
  toggleForm,
  toggleSection,
  selectedSection,
  openForm,
  setOpenForm,
}) {
  return (
    <div className="education-container">
      <div className="expand-section" id="education" onClick={toggleSection}>
        Education
      </div>
      {selectedSection === 'education' && (
        <div className="school-section">
          {openForm.isOpen ? (
            <CreateForm
              type={openForm.type}
              item={openForm.item}
              schoolList={schoolList}
              setSchoolList={setSchoolList}
              openForm={openForm}
              setOpenForm={setOpenForm}
            />
          ) : (
            schoolList.map((school, index) => {
              return (
                <div
                  className="school-item"
                  id={index}
                  onClick={toggleForm}
                  key={uuidv4}
                >
                  {school.schoolName}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

EducationDetails.propTypes = {
  schoolList: propTypes.array,
  setSchoolList: propTypes.func,
  toggleForm: propTypes.func,
  toggleSection: propTypes.func,
  selectedSection: propTypes.string,
  openForm: propTypes.object,
  setOpenForm: propTypes.func,
};
