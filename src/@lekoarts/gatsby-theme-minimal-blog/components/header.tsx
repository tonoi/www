/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import Navigation from "./navigation"
import HeaderExternalLinks from "./header-external-links"

import { Link } from "gatsby"
import { useLocation} from "@reach/router"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import React from "react"
import Page from "./page"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()
  const location = useLocation()
  const isTopPage = location.pathname === "/"

  return (
    <header>
      <Link
        to={replaceSlashes(`/${basePath}`)}
        aria-label={`${siteTitle} - Back to home`}
        sx={{ color: `heading`, textDecoration: `none` }}
      >
        
        { isTopPage ? (
          <React.Fragment>
            <img src="tonoi_logo.svg" sx={{ width: '65px', height: '65px', marginRight: '40px' }}  />
            <div sx={{ my: 0, fontWeight: `semibold`, fontSize: [5, 6, 7], display: 'inline',
                      verticalAlign: 'center',
                   }}>{siteTitle}</div>
            <HeaderExternalLinks />
          </React.Fragment>
        ) : ( 
          <span sx={{ my: 0, fontWeight: `semibold`, fontSize: [4] }}>{Page.Head}</span>
        ) }
      </Link>
      <span sx={{ display: `box`,  }}>
        <Navigation nav={nav} />
      </span>
    </header>
  )
}

export default Header

