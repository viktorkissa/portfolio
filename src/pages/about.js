import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import Title from "../components/Title"

const About = ({ data: { about : { nodes }} }) => {
  const { title, info, stack, image } = nodes[0]

  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {
              stack.map(({id,title}) => <span key={id}>{title}</span>)
            }
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
    {
        about: allStrapiAbout {
            nodes {
                stack {
                    id
                    title
                }
                title
                info
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default About
