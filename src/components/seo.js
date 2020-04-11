

import React from "react"
import PropTypes from "prop-types"
//import Helmet from "react-helmet"
//import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
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
    <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
