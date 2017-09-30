import React from 'react'

const ProjectType = props => {
  return (
    <div>
      <span>เริ่มทำ</span>
      <select>
        <option value="">โปรเจค</option>
        {props.projectTypeList.map(projectType =>
          <option value={projectType._id} key={projectType._id}>
            {projectType.name}
          </option>
        )}
      </select>
      <span>เล่มนี้ ให้เป็น</span>
      <select>
        <option value="">ความทรงจำที่ดี</option>
        {props.objectiveTypeList.map(objectiveType =>
          <option value={objectiveType._id} key={objectiveType._id}>
            {objectiveType.name}
          </option>
        )}
      </select>
    </div>
  )
}

export default ProjectType
