import React from 'react'

const DynamicContent = ({htmlContent}) => {
  return (
    <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
  )
}

export default DynamicContent