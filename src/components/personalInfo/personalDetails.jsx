/* eslint-disable react/prop-types */
import InputGroup from '../inputGroup';

export default function PersonalDetails(props) {
  const handleInputChange = (e) => {
    props.setPersonalInfo({
      ...props.personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Personal Details</h2>
      <div
        className="personal-details-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <InputGroup
          name="fullName"
          id="fullNameInput"
          type="text"
          onChange={handleInputChange}
          value={props.personalInfo.fullName}
          isRequired={true}
          labelText="Full Name:"
        />
        <InputGroup
          name="email"
          id="emailInput"
          type="email"
          onChange={handleInputChange}
          value={props.personalInfo.email}
          isRequired={false}
          labelText="Email:"
        />
        <InputGroup
          name="phone"
          id="phoneInput"
          type="tel"
          onChange={handleInputChange}
          value={props.personalInfo.phone}
          isRequired={false}
          labelText="Phone Number:"
        />
        <InputGroup
          name="address"
          id="addressInput"
          type="text"
          onChange={handleInputChange}
          value={props.personalInfo.address}
          isRequired={false}
          labelText="Address:"
        />
      </div>
    </>
  );
}
