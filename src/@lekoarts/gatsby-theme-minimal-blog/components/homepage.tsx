/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Seo from "./seo"
import Hero from "../texts/hero.mdx"
import Bottom from "../texts/bottom.mdx"

export type MBHomepageProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: MBHomepageProps) => {
  const { basePath, blogPath, tagsPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <section sx={{ mb: [4, 5, 6], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
        <Hero />
      </section>
      <Title text="最近の更新">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>すべてのノート</Link>
        { ' - ' }
        <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)}>タグ一覧</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
