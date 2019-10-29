import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"

const AboutPage = ({ data }) => {
  const { title, body } = data.contentfulAbout
  return (
    <Layout>
      <SEO title="About me" />
      <Title text="About" />
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
      />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    contentfulAbout {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
