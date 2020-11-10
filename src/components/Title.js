import React from "react"

const Title = ({title, withoutAOS}) =>
  <div className="section-title" data-aos={withoutAOS ? "" : "fade-up"} data-aos-once="true">
    <h2>{title || 'Default Title'}</h2>
    <div className="underline" />
  </div>

export default Title
