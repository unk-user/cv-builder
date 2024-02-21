import InputGroup from './inputGroup';
import propTypes from 'prop-types';
import Button from './button';

export default function CreateForm({
  type,
  item = null,
  dataList,
  setList,
  openForm,
  setOpenForm,
}) {
  if (type === 'education') {
    const school =
      item !== null
        ? item
        : {
            schoolName: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
          };
    
    const toggleForm = () => {
      setOpenForm({
        ...openForm,
        isOpen: false,
      })
    }
    const saveSchool = () => {
      if (school.schoolName === '') {
        alert("School Name shouldn't be empty");
      } else if (item !== null) {
        toggleForm();
      } else if (item === null) {
        setList([...dataList, school]);
        toggleForm();
      }
    };
    const cancelSchool = () => {
      if (item !== null) {
        setList([...dataList, item]);
        toggleForm();
      } else {
        toggleForm();
      }
    };
    const deleteSchool = () => {
      if (item === null) {
        toggleForm();
      } else {
        const updatedList = dataList.filter(
          (schoolItem) => schoolItem !== item
        );
        setList(updatedList);
        toggleForm();
      }
    };

    const handleInputChange = (e) => {
      if (item !== null) {
        setList([
          ...dataList,
          {
            ...item,
            [e.target.name]: e.target.value,
          },
        ]);
      }
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
          <Button className="cancel-btn" name="Cancel" onClick={cancelSchool} />
          <Button className="save-btn" name="Save" onClick={saveSchool} />
        </div>
      </>
    );
  }
}

CreateForm.propTypes = {
  type: propTypes.string,
  item: propTypes.object,
  setList: propTypes.func,
  dataList: propTypes.array,
  openForm: propTypes.object,
  setOpenForm: propTypes.func
};
