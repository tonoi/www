/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitleAlt } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitleAlt} All rights reserved.
      </div>

      <div>
        <Link to='trademakr_guidelines.pdf'>商標ガイドライン</Link>
        {'  '}
        <Link to='privacy_policy.pdf'>プライバシーポリシー</Link>
      </div>
      <googleAnalytics />
    </footer>
  )
}

export default Footer
