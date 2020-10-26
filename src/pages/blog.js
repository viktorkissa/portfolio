import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Blogs from "../components/Blogs"

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs }} }) =>
  <Layout>
    <section className="section blog-page">
      <Blogs blogs={blogs} title="blog" />
    </section>
  </Layout>

export const query = graphql`
    {
        allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 100) {
            nodes {
                date(formatString: "MMMM Do, YYYY")
                desc
                slug
                id
                title
                category
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


export default Blog
