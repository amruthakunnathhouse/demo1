

import React from "react"
import PropTypes from "prop-types"
//import Helmet from "react-helmet"
//import { useStaticQuery, graphql } from "gatsby"

function Footer({ description, lang, meta, title }) {
  /*const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )*/

  //const metaDescription = description || site.siteMetadata.description

  return (
    <section style={{width:`100%`}}>
    <div style={{maxWidth:'960px',margin:'0 auto',textAlign:'center'}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </section>
    
  )
}

Footer.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Footer.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Footer
