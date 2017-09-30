import React from 'react'
import ProjectTypeContainer from './projectType/ProjectTypeContainer'
import PackageContainer from './package/PackageContainer'
import BookStyleContainer from './bookStyle/BookStyleContainer'

const CreateProject = () => {
  return (
    <div>
      <ProjectTypeContainer />
      <PackageContainer />
      <BookStyleContainer />
    </div>
  )
}

export default CreateProject
