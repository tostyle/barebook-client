import React from 'react'

const Package = ({ packageList }) => {
  return (
    <div>
      {packageList.map(pack =>
        <p key={pack._id}>
          {pack.name}
        </p>
      )}
    </div>
  )
}
export default Package
