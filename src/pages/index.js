import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { title } = data.contentfulHome
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{title}</h1>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    contentfulHome {
      title
    }
  }
`
