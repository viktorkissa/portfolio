import React from "react"

const Title = ({title}) =>
  <div className="section-title">
    <h2>{title || 'Default Title'}</h2>
    <div className="underline" />
  </div>

export default Title
