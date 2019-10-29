import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "emotion"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    title,
    titleJa,
    profileImg,
    description,
    descriptionJa,
    learnMore,
  } = data.contentfulHome
  return (
    <Layout>
      <SEO title="Home" />
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          className={css`
            margin: 10vh 0;
          `}
        >
          <img
            src={profileImg.file.url}
            alt="profile_img"
            className={css`
              height: calc(3rem + 6vw);
              border-radius: 50%;
            `}
          />
        </div>
        <div
          className={css`
            font-size: calc(1rem + 2vw);
            font-weight: 700;
            margin: calc(1rem + 1vw);
          `}
        >
          {title}
        </div>
        <div
          className={css`
            font-size: calc(1rem + 1vw);
            max-width: 120rem;
            text-align: center;
          `}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html.replace(
                /\n/g,
                `</br>`
              ),
            }}
            className={css`
              line-height: 1.8;
            `}
          />
        </div>
        <div className={css``}>
          <Link
            to="/about"
            className={css`
              font-size: calc(1rem + 1vw);
              text-decoration: underline;
            `}
          >
            {learnMore}
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    contentfulHome {
      title
      titleJa
      description {
        description
        childMarkdownRemark {
          html
        }
      }
      descriptionJa {
        childMarkdownRemark {
          html
        }
      }
      profileImg {
        file {
          url
        }
      }
      learnMore
      learnMoreJa
    }
  }
`
