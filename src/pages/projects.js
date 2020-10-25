import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Projects from "../components/Projects"

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) =>
  <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
  </Layout>

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
