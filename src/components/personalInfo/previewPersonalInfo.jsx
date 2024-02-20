/* eslint-disable react/prop-types */
export default function PreviewPersonalInfo({
  personalInfo
}) {


  return (
    <header>
      <h1>{personalInfo.fullName}</h1>
      <div>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.address}</p>
      </div>
    </header>
  )
}