/** @jsx jsx */
import { jsx, Heading, Flex } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Layout from "./layout"
import Listing from "./listing"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Seo from "./seo"

export type MBBlogProps = {
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

const Blog = ({ posts }: MBBlogProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading>
          <span sx={{ display: 'inline', position: 'absolute', left: 20, top: 0, marginRight: 'auto', my: 3
          }}>ノート</span>
        </Heading>
      </Flex>
      <br /><hr />
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
      <Link
          sx={(t) => ({ ...t.styles?.a, variant: `links.secondary`, marginY: 2 })}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          記事のタグ一覧
        </Link>
    </Layout>
  )
}

export default Blog

export const Head: HeadFC = () => <Seo title="Blog" />
