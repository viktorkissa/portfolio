import { graphql } from "gatsby"

export const projectsQuery = graphql`
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