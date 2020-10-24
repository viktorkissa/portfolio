import React from "react"
import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  return <section className="section bg-grey">
    <Title title='Services' />
    <div className='section-center services-center'>
      {
        services.map(service => <Service key={service.id} {...service} />)
      }
    </div>
  </section>
}

const Service = ({id, icon, title, text}) =>
  <article className="service">
    {icon}
    <h4>{title}</h4>
    <div className="underline" />
    <p>{text}</p>
  </article>

export default Services
