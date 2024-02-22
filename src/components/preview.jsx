import PreviewPersonalInfo from "./personalInfo/previewPersonalInfo";
import PreviewEducationInfo from "./educationInfo/previewEducationInfo";
import PreviewExperienceInfo from "./experienceInfo/previewExperienceInfo";
import './preview.css';

export default function Preview({personalInfo, schoolList, experienceList}) {


  return (
    <div className="preview-page">
      <PreviewPersonalInfo personalInfo={personalInfo}/>
      <PreviewEducationInfo schoolList={schoolList}/>
      <PreviewExperienceInfo experienceList={experienceList}/>
    </div>
  )
}