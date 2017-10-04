import React from 'react'
import ProjectTypeContainer from './projectType/ProjectTypeContainer'
import PackageContainer from './package/PackageContainer'
import BookStyleContainer from './bookStyle/BookStyleContainer'
import OrderContainer from '../order/OrderContainer'

const CreateProject = () => {
  return (
    <div>
      <ProjectTypeContainer />
      <PackageContainer />
      <BookStyleContainer />
      <OrderContainer />
    </div>
  )
}

export default CreateProject
