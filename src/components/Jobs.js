import React, {useState} from "react"
import cn from 'classnames'
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Title from "./Title"

const query = graphql`
    {
        allStrapiJobs(sort: {order: DESC, fields: strapiId}) {
            nodes {
                strapiId
                company
                date
                position
                id
                desc {
                    id
                    name
                }
            }
        }
    }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: {
      nodes: jobs
    }
  } = data
  const [value, setValue] = useState(0)
  const {company, position, desc, date} = jobs[value]

  const handleJobClick = val => {
    setValue(val)
  }

  return <section className="jobs section">
    <Title title="expierence" />
    <div className="jobs-center" data-aos="fade-up" data-aos-once="true">
      <div className="btn-container">
        {
          jobs.map((job, index) => (
            <button key={job.strapiId} onClick={() => handleJobClick(index)}
                    className={cn('job-btn', {'active-btn': index === value})}>
              {job.company}
            </button>
          ))
        }
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map(({id, name}) => (
            <div key={id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{name}</p>
            </div>
          ))
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn" data-aos="fade-up" data-aos-once="true">more info</Link>
  </section>
}

export default Jobs
