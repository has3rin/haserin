import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Writing = ({ data }) => {
  const { title, body, image, tags } = data.contentfulWriting
  return (
    <Layout>
      <SEO title={title} />
      <div className="writing">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div
          className="body-text"
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        ></div>
        <Link to="/writing">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}
export default Writing
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulWriting(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`
