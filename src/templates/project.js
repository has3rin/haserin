import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Project = ({ data }) => {
  const { title, body, image, tags } = data.contentfulProject
  return (
    <Layout>
      <SEO title={title} />
      <div className="project">
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
        <Link to="/project">View more projects</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}
export default Project
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
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
