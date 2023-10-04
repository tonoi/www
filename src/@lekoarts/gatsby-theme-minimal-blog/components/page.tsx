/** @jsx jsx */
import type { HeadFC, PageProps } from "gatsby"
import { jsx, Heading } from "theme-ui"
import Layout from "./layout"
import Seo from "./seo"

export type MBPageProps = {
  page: {
    title: string
    slug: string
    excerpt: string
  }
}

const Page: React.FC<React.PropsWithChildren<PageProps<MBPageProps>>> = ({ data: { page }, children }) => (
  <Layout>
    <Heading>
      <span sx={{ 
            display: 'inline',
            position: 'absolute',
            left: 20,
            top: 0,
            marginRight: 'auto',
            my: 3
      }}
      >
        {page.title}
      </span>
    </Heading>
    <br /><hr />
    <section sx={{ my: 5, variant: `layout.content` }}>{children}</section>
  </Layout>
)

export default Page

export const Head: HeadFC<MBPageProps> = ({ data: { page } }) => <Seo title={page.title} description={page.excerpt} />
