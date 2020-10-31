import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import SocialLinks from "../constants/socialLinks"

const query = graphql`
    {
        file(relativePath: {eq: "hero-img.jpg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Hero = () => {
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query)

  return <section className="hero">
    <div className="section-center hero-center">
        <div className="hero-info">
            <div>
                <div className="underline"></div>
                <h1>I'm Viktor</h1>
                <h4>Front-end developer</h4>
                <Link to="/contact" className="btn">contact me</Link>
                <SocialLinks />
            </div>
        </div>
        <Image fluid={fluid} className="hero-img" />
    </div>
  </section>
}

export default Hero
