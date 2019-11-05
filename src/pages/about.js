import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"

const Tag = ({ item }) => {
  return (
    <div
      css={css`
        font-size: calc(0.6rem + 0.6vw);
        font-weight: 600;
        background-color: #eee;
        padding: calc(0.3rem + 0.3vw);
        border-radius: calc(0.3rem + 0.3vw);
        margin-right: calc(0.2rem + 0.2vw);
        line-height: 1;
      `}
    >
      {item}
    </div>
  )
}

const AboutPage = ({ data }) => {
  const { title, body } = data.contentfulAbout
  const careers = data.allContentfulCareer.edges
  const educations = data.allContentfulEducation.edges

  return (
    <Layout>
      <SEO title="About me" />
      <Title text="About" />
      <div>
        <div
          css={css`
            margin-top: calc(3rem + 3vw);
            font-size: calc(1.5rem + 1.5vw);
            font-weight: 700;
            margin-bottom: calc(0rem - 1.5rem - 1.5vw);
          `}
        >
          Education
        </div>
        {educations.map(({ node: education }) => (
          <div>
            <div
              css={css`
                font-size: calc(1.2rem + 1.2vw);
                font-weight: 600;
                margin-top: calc(1.5rem + 1.5vw);
              `}
            >
              {education.title}
            </div>
            <div
              css={css`
                margin-top: calc(0.5rem + 0.5vw);
                font-size: calc(0.9rem + 0.9vw);
                font-weight: 600;
                line-height: 1;
              `}
            >
              {education.subtitle}
            </div>
            <div
              css={css`
                font-size: calc(0.8rem + 0.8vw);
                font-weight: 300;
                margin-top: calc(0.1rem + 0.1vw);
              `}
            >
              {education.term}
            </div>
            <div
              css={css`
                font-size: calc(0.8rem + 0.8vw);
                margin-top: calc(0.6rem + 0.6vw);
                text-align: justify;
              `}
            >
              {education.description.description}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div
          css={css`
            font-size: calc(1.5rem + 1.5vw);
            font-weight: 700;
            margin-top: calc(3rem + 3vw);
            margin-bottom: calc(0rem - 1.5rem - 1.5vw);
          `}
        >
          Careers
        </div>
        {careers.map(({ node: career }) => (
          <div>
            <div
              css={css`
                font-size: calc(1.2rem + 1.2vw);
                font-weight: 600;
                margin-top: calc(1.5rem + 1.5vw);
              `}
            >
              {career.company}
            </div>
            <div
              css={css`
                margin-top: calc(0.5rem + 0.5vw);
                font-size: calc(0.9rem + 0.9vw);
                font-weight: 600;
                line-height: 1;
              `}
            >
              {career.jobTitle}
            </div>
            <div
              css={css`
                font-size: calc(0.8rem + 0.8vw);
                font-weight: 300;
                margin-top: calc(0.1rem + 0.1vw);
              `}
            >
              {career.term}
            </div>
            <div
              css={css`
                display: flex;
                margin-top: calc(0.2rem + 0.2vw);
              `}
            >
              {career.tag.map(tag => (
                <Tag item={tag} />
              ))}
            </div>
            <div
              css={css`
                font-size: calc(0.8rem + 0.8vw);
                margin-top: calc(0.6rem + 0.6vw);
                text-align: justify;
              `}
            >
              {career.description.description}
            </div>
          </div>
        ))}
      </div>
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
    allContentfulCareer(sort: { fields: order, order: DESC }) {
      edges {
        node {
          description {
            description
          }
          company
          tag
          jobTitle
          term
        }
      }
    }
    allContentfulEducation(sort: { fields: order, order: DESC }) {
      edges {
        node {
          description {
            description
          }
          title
          subtitle
          term
          order
        }
      }
    }
  }
`
