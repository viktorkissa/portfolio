import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) =>
  <>
      <SEO title="Projects" />
      <Layout>
          <section className="projects-page">
              <Projects projects={projects} title="all projects" />
          </section>
      </Layout>
  </>

export const query = graphql`
    {
        allStrapiProjects {
            nodes {
                description
                github
                id
                title
                url
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                stack {
                    id
                    title
                }
            }
        }
    }
`

export default ProjectsPage
