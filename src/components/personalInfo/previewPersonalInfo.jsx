import propTypes from 'prop-types';
import addressIcon from '../../assets/map-pin.svg';
import mailIcon from '../../assets/mail.svg';
import phoneIcon from '../../assets/phone.svg'

export default function PreviewPersonalInfo({ personalInfo }) {
  return (
    <header>
      <h1>{personalInfo.fullName}</h1>
      <div>
        <span className='contact-info'>
          {personalInfo.email != '' && <img src={mailIcon}/>}
          <p>{personalInfo.email}</p>
        </span>
        <span className='contact-info'>
          {personalInfo.phone != '' && <img src={phoneIcon}/>}
          <p>{personalInfo.phone}</p>
        </span>
        <span className='contact-info'>
          {personalInfo.address != '' && <img src={addressIcon}/>}
          <p>{personalInfo.address}</p>
        </span>
      </div>
    </header>
  );
}

PreviewPersonalInfo.propTypes = {
  personalInfo: propTypes.object,
};
