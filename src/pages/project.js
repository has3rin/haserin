import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
const Projects = ({ data }) => {
  const projects = data.allContentfulProject.edges
  return (
    <Layout>
      <SEO title="Projects" />
      <Title text="Projects" />
      <h1>{"Here's a list of all projects!"}</h1>
      <div className="blogposts">
        {projects.map(({ node: project }) => (
          <div key={project.id}>
            <Link to={`/project/${project.slug}`}>{project.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
      </div>
    </Layout>
  )
}
export default Projects
export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProject(limit: 1000) {
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
