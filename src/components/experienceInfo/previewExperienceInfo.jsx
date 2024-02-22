import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function PreviewExperienceInfo({ experienceList }) {
  return (
    experienceList[0] != undefined && (
      <>
        <div className="section-header">Experience</div>
        <section className="experience-section">
          {experienceList.map((stage) => {
            return (
              <div className="section-info-container" key={uuidv4}>
                <div className="experience-info-group left-group">
                  <p className='experience-date'>
                    <b>
                      {stage.startDate ? stage.startDate : 'undefined'} -{' '}
                      {stage.endDate ? stage.endDate : 'undefined'}
                    </b>
                  </p>
                  <p className="experience-location">{stage.location}</p>
                </div>
                <div className="experience-info-group">
                  <p className="experience-position">{stage.position}</p>
                  <p className="experience-company">{stage.companyName}</p>
                  <p className="experience-description">{stage.description}</p>
                </div>
              </div>
            );
          })}
        </section>
      </>
    )
  );
}

PreviewExperienceInfo.propTypes = {
  experienceList: propTypes.array,
};
