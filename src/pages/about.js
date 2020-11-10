import React  from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"

const About = ({ location: { pathname }, data: { about : { nodes }} }) => {
  const { title, info, stack, image } = nodes[0]

  return <Layout pathname={pathname}>
    <SEO title="About" description="About me" />
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img" />
        <article className="about-text">
          <Title title={title} withoutAOS />
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
