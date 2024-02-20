import PreviewPersonalInfo from "./personalInfo/previewPersonalInfo"

export default function Preview({personalInfo}) {


  return (
    <div className="preview-page">
      <PreviewPersonalInfo personalInfo={personalInfo}/>
    </div>
  )
}