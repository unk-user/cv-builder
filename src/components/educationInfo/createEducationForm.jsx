import InputGroup from '../inputGroup';
import propTypes from 'prop-types';
import Button from '../button';
import { useState } from 'react';

export default function CreateEducationForm({
  schoolList,
  setSchoolList,
  openForm,
  setOpenForm,
}) {
  const [school, setSchool] = useState(
    openForm.itemId !== 'newSchool'
      ? schoolList[openForm.itemId]
      : {
          schoolName: '',
          degree: '',
          startDate: '',
          endDate: '',
          location: '',
        }
  );

  const toggleForm = () => {
    setOpenForm({
      itemId: openForm.itemId,
      isOpen: false,
    });
  };
  const saveSchool = () => {
    if (school.schoolName === '') {
      alert("School Name shouldn't be empty");
    } else if (openForm.itemId !== 'newSchool') {
      setSchoolList(
        schoolList.map((item, index) => {
          return String(index) === openForm.itemId ? school : item;
        })
      );
      toggleForm();
    } else if (openForm.itemId === 'newSchool') {
      setSchoolList([...schoolList, school]);
      toggleForm();
    }
  };

  const deleteSchool = () => {
    if (openForm.itemId === 'newSchool') {
      toggleForm();
    } else {
      setSchoolList(
        schoolList.filter((_, index) => {
          return String(index) !== openForm.itemId;
        })
      );
      toggleForm();
    }
  };

  const handleInputChange = (e) => {
    setSchool({
      ...school,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <InputGroup
        name="schoolName"
        id="school-name-input"
        type="text"
        labelText="School/University"
        onChange={handleInputChange}
        value={school.schoolName}
        isRequired={true}
        className="inputRegular"
      />
      <InputGroup
        name="degree"
        id="degree-input"
        type="text"
        labelText="Degree"
        onChange={handleInputChange}
        value={school.degree}
        isRequired={false}
        className="inputRegular"
      />
      <InputGroup
        name="startDate"
        id="start-date-input"
        type="text"
        labelText="Start Date"
        onChange={handleInputChange}
        value={school.startDate}
        isRequired={false}
        className="inputSmall"
      />
      <InputGroup
        name="endDate"
        id="end-Date-input"
        type="text"
        labelText="End Date"
        onChange={handleInputChange}
        value={school.endDate}
        isRequired={false}
        className="inputSmall"
      />
      <InputGroup
        name="location"
        id="location-input"
        type="text"
        labelText="Location"
        onChange={handleInputChange}
        value={school.location}
        isRequired={false}
        className="inputRegular"
      />
      <div className="buttons-container">
        <Button className="delete-btn" name="Delete" onClick={deleteSchool} />
        <Button className="cancel-btn" name="Cancel" onClick={toggleForm} />
        <Button className="save-btn" name="Save" onClick={saveSchool} />
      </div>
    </>
  );
}

CreateEducationForm.propTypes = {
  setSchoolList: propTypes.func,
  schoolList: propTypes.array,
  openForm: propTypes.object,
  setOpenForm: propTypes.func,
};
