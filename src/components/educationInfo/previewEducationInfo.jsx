import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function PreviewEducationInfo({ schoolList }) {
  console.log(schoolList);
  return (
    schoolList[0] != undefined && (
      <>
        <div className="section-header">Education</div>
        <section className="education-section">
          {schoolList.map((school) => {
            return (
              <div className="section-info-container" key={uuidv4}>
                <div className="education-info-group left-group">
                  <p className="education-date">
                    <b>
                      {school.startDate ? school.startDate : 'undefined'} -{' '}
                      {school.endDate ? school.endDate : 'undefined'}
                    </b>
                  </p>
                  <p className="education-location">{school.location}</p>
                </div>
                <div className="education-info-group">
                  <p className="education-degree">{school.degree}</p>
                  <p className="education-schoolName">{school.schoolName}</p>
                </div>
              </div>
            );
          })}
        </section>
      </>
    )
  );
}

PreviewEducationInfo.propTypes = {
  schoolList: propTypes.array,
};
