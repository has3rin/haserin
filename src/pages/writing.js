import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
const Writings = ({ data }) => {
  const writings = data.allContentfulWriting.edges
  return (
    <Layout>
      <SEO title="Writing posts" />
      <Title text="Writings" />
      <h1>{"Here's a list of all writings!"}</h1>
      <div className="blogposts">
        {writings.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/writing/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
export default Writings
export const query = graphql`
  query WritingsPageQuery {
    allContentfulWriting(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          image {
            file {
              url
            }
          }
          tags
        }
      }
    }
  }
`
