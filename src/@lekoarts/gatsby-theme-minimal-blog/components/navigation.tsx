/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }[]
}

const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav sx={{ 
            display: 'inline',
            position: 'absolute',
            right: 10,
            top: 0,
            marginLeft: 'auto',
            "a:not(:last-of-type)": { mr: 3 },
            fontSize: [1, `18px`],
            ".active": { color: `heading` } 
            }}
        >
          {nav.map((item) => (
            <Link
              activeClassName="active"
              key={item.slug}
              sx={(t) => ({ ...t.styles?.a })}
              to={replaceSlashes(`/${basePath}/${item.slug}`)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation
