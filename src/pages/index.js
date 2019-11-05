import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "emotion"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useSelector } from "react-redux"
import dictterLogo from "../images/dictter-logo-rounded.png"
import lookeastLogo from "../images/lookeast-logo-rounded.png"

const IndexPage = ({ data }) => {
  const { isJapanese } = useSelector(state => state.language)
  const {
    title,
    profileImg,
    description,
    descriptionJa,
    learnMore,
    learnMoreJa,
    blogDescription,
    blogDescriptionJa,
    blogTo,
    blogToJa,
    projectDescription,
    projectDescriptionJa,
    projectTo,
    projectToJa,
    chatDescription,
    chatDescriptionJa,
    chatTo,
    chatToJa,
  } = data.contentfulHome

  const StyledLink = styled(Link)`
    font-size: calc(1rem + 1vw);
    text-decoration: underline;
  `
  const StyledTitle = styled.div`
    font-size: calc(1rem + 2vw);
    font-weight: 700;
    margin: calc(1rem + 1vw);
  `
  const StyledDescription = styled.div`
    font-size: calc(1rem + 0.8vw);
    max-width: 120rem;
    text-align: center;
    line-height: 1.8;
  `
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
            margin: 8vh 0;
          `}
        >
          <img
            src={profileImg.file.url}
            alt="profile_img"
            className={css`
              height: calc(5rem + 5vw);
              border-radius: 50%;
            `}
          />
        </div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription
          dangerouslySetInnerHTML={{
            __html: isJapanese
              ? descriptionJa.childMarkdownRemark.html.replace(/\n/g, `</br>`)
              : description.childMarkdownRemark.html.replace(/\n/g, `</br>`),
          }}
        />
        <StyledLink to="/about">
          {isJapanese ? learnMoreJa : learnMore}
        </StyledLink>
        <div
          className={css`
            width: 100%;
            margin: 16vh 0 8vh;
            display: flex;
            justify-content: space-evenly;
          `}
        >
          <img
            src={dictterLogo}
            alt="profile_img"
            className={css`
              height: calc(5rem + 5vw);
              border-radius: 50%;
            `}
          />
          <img
            src={lookeastLogo}
            alt="profile_img"
            className={css`
              height: calc(5rem + 5vw);
              border-radius: 50%;
            `}
          />
        </div>
        <StyledTitle>Εύρηκα!</StyledTitle>
        <StyledDescription
          dangerouslySetInnerHTML={{
            __html: isJapanese
              ? projectDescriptionJa.childMarkdownRemark.html.replace(
                  /\n/g,
                  `</br>`
                )
              : projectDescription.childMarkdownRemark.html.replace(
                  /\n/g,
                  `</br>`
                ),
          }}
        />
        <StyledLink to="/project">
          {isJapanese ? projectToJa : projectTo}
        </StyledLink>
        <StyledDescription
          dangerouslySetInnerHTML={{
            __html: isJapanese
              ? blogDescriptionJa.childMarkdownRemark.html.replace(
                  /\n/g,
                  `</br>`
                )
              : blogDescription.childMarkdownRemark.html.replace(
                  /\n/g,
                  `</br>`
                ),
          }}
        />
        <StyledLink to="/writing">{isJapanese ? blogToJa : blogTo}</StyledLink>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    contentfulHome {
      description {
        childMarkdownRemark {
          html
        }
      }
      descriptionJa {
        childMarkdownRemark {
          html
        }
      }
      learnMore
      learnMoreJa
      chatToJa
      chatDescriptionJa
      chatTo
      chatDescription
      blogTo
      blogToJa
      blogDescription {
        childMarkdownRemark {
          html
        }
      }
      blogDescriptionJa {
        childMarkdownRemark {
          html
        }
      }
      profileImg {
        file {
          url
        }
      }
      projectTo
      projectToJa
      projectDescription {
        childMarkdownRemark {
          html
        }
      }
      projectDescriptionJa {
        childMarkdownRemark {
          html
        }
      }
      title
    }
  }
`
