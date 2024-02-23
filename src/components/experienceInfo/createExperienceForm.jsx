import InputGroup from '../inputGroup';
import propTypes from 'prop-types';
import Button from '../button';
import { useState } from 'react';

export default function CreateExperienceForm({
  experienceList,
  setExperienceList,
  openForm,
  setOpenForm,
}) {
  const [stage, setStage] = useState(
    openForm.itemId !== 'newExperience'
      ? experienceList[openForm.itemId]
      : {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
        }
  );

  const toggleForm = () => {
    setOpenForm({
      itemId: openForm.itemId,
      isOpen: false,
    });
  };
  const saveStage = () => {
    if (stage.companyName === '') {
      alert("Company Name shouldn't be empty");
    } else if (openForm.itemId !== 'newExperience') {
      setExperienceList(
        experienceList.map((item, index) => {
          return String(index) === openForm.itemId ? stage : item;
        })
      );
      toggleForm();
    } else if (openForm.itemId === 'newExperience') {
      setExperienceList([...experienceList, stage]);
      toggleForm();
    }
  };

  const deleteStage = () => {
    if (openForm.itemId === 'newExperience') {
      toggleForm();
    } else {
      setExperienceList(
        experienceList.filter((_, index) => {
          return String(index) !== openForm.itemId;
        })
      );
      toggleForm();
    }
  };

  const handleInputChange = (e) => {
    setStage({
      ...stage,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <InputGroup
        name="companyName"
        id="stage-name-input"
        type="text"
        labelText="Company"
        onChange={handleInputChange}
        value={stage.companyName}
        isRequired={true}
        className="inputRegular"
      />
      <InputGroup
        name="position"
        id="position-input"
        type="text"
        labelText="Position"
        onChange={handleInputChange}
        value={stage.position}
        isRequired={false}
        className="inputRegular"
      />
      <InputGroup
        name="startDate"
        id="start-date-input"
        type="text"
        labelText="Start date"
        onChange={handleInputChange}
        value={stage.startDate}
        isRequired={false}
        className="inputSmall"
      />
      <InputGroup
        name="endDate"
        id="end-Date-input"
        type="text"
        labelText="End date"
        onChange={handleInputChange}
        value={stage.endDate}
        isRequired={false}
        className="inputSmall"
      />
      <InputGroup
        name="location"
        id="location-input"
        type="text"
        labelText="Location"
        onChange={handleInputChange}
        value={stage.location}
        isRequired={false}
        className="inputRegular"
      />
      <InputGroup
        name="description"
        id="description-input"
        type="text"
        labelText="Description"
        onChange={handleInputChange}
        value={stage.description}
        isRequired={false}
        className="inputRegular"
        isTextArea={true}
      />
      <div className="buttons-container">
        <Button className="delete-btn" name="Delete" onClick={deleteStage} />
        <Button className="cancel-btn" name="Cancel" onClick={toggleForm} />
        <Button className="save-btn" name="Save" onClick={saveStage} />
      </div>
    </div>
  );
}

CreateExperienceForm.propTypes = {
  setExperienceList: propTypes.func,
  experienceList: propTypes.array,
  openForm: propTypes.object,
  setOpenForm: propTypes.func,
};
