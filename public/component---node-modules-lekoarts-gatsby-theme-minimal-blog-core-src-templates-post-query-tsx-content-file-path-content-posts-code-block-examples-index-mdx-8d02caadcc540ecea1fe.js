"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[770],{4903:function(e,n,t){t.d(n,{F:function(){return p},Z:function(){return h}});var a=t(7294),r=t(8733),l=t(795),o=t(2117),s=t(847),i=t(817);var c=e=>{let{post:n}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var m=e=>{let{data:{post:n},children:t}=e;return(0,r.tZ)(o.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},n.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,n.date),n.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(s.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,r.tZ)("span",null,n.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},t),(0,r.tZ)(c,{post:n}))};const p=e=>{var n,t,a;let{data:{post:l}}=e;return(0,r.tZ)(i.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(n=l.banner)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(a=t.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function h(e){let{...n}=e;return a.createElement(m,n)}},3185:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c.F},default:function(){return u}});var a=t(7294),r=t(1151);const l={normal:{width:"100%",height:"352px"},compact:{width:"100%",height:"152px"}};var o=function(e){let{albumUri:n="6Ar5HxNWXtvraqs7FI7bYq",size:t="normal"}=e;return a.createElement("iframe",{title:"Spotify",style:{borderRadius:"12px"},src:"https://open.spotify.com/embed/album/"+n+"?theme=0",width:l[t].width,height:l[t].height,frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})};function s(e){const n=Object.assign({p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"Here will a React component go:"),"\n",a.createElement(o),"\n",a.createElement(n.p,null,"Here will a normal code block go:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"(function() {\n\nvar cache = {};\nvar form = $('form');\nvar minified = true;\n\nvar dependencies = {};\n\nvar treeURL = 'https://api.github.com/repos/PrismJS/prism/git/trees/gh-pages?recursive=1';\nvar treePromise = new Promise(function(resolve) {\n  $u.xhr({\n    url: treeURL,\n    callback: function(xhr) {\n      if (xhr.status < 400) {\n        resolve(JSON.parse(xhr.responseText).tree);\n      }\n    }\n  });\n});\n")),"\n",a.createElement(n.p,null,"A code block with a JSDoc comment, short, and long comment:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js"},"/**\n * Get value out of string (e.g. rem => px)\n * If value is px strip the px part\n * If the input is already a number only return that value\n * @param {string | number} input\n * @param {number} [rootFontSize]\n * @return {number} Number without last three characters\n * @example removeLastThree('6rem') => 6\n */\nconst getValue = (input, rootFontSize = 16) => {\n  if (typeof input === `number`) {\n    return input / rootFontSize;\n  }\n\n  const isPxValue = input.slice(-2) === `px`;\n\n  if (isPxValue) {\n    return parseFloat(input.slice(0, -2));\n  }\n\n  return parseFloat(input.slice(0, -3));\n};\n\n// This is a little helper function\nconst helper = (a, b) => a + b;\n\n// This is also a little helper function but this time with a really long one-line comment that should show some more details\nconst morehelper = (a, b) => a * b;\n\nexport { getValue, helper, morehelper };\n")),"\n",a.createElement(n.p,null,"Normal block without language:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,'import Test from "../components/test"\n\nconst Layout = ({ children }) => (\n  <Test>\n    {children}\n  </Test>\n)\n\nexport default Layout\n')),"\n",a.createElement(n.p,null,"Code block with code highlighting:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-jsx",title:"src/components/post.jsx",highlight:"5-7,10"},'import * as React from "react";\n\nconst Post = ({ data: { post } }) => (\n  <Layout>\n    <Heading variant="h2" as="h2">\n      {post.title}\n    </Heading>\n    <p\n      sx={{\n        color: `secondary`,\n        mt: 3,\n        a: { color: `secondary` },\n        fontSize: [1, 1, 2],\n      }}\n    >\n      <span>{post.date}</span>\n      {post.tags && (\n        <React.Fragment>\n          {` — `}\n          <ItemTags tags={post.tags} />\n        </React.Fragment>\n      )}\n    </p>\n    <section\n      sx={{\n        ...CodeStyles,\n        my: 5,\n        ".gatsby-resp-image-wrapper": { my: 5, boxShadow: `lg` },\n      }}\n    >\n      <MDXRenderer>{post.body}</MDXRenderer>\n    </section>\n  </Layout>\n);\n\nexport default Post;\n')),"\n",a.createElement(n.p,null,"Code block without title:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"Harry Potter and the Philosopher's Stone\n")),"\n",a.createElement(n.p,null,"Code block with lineNumbers (and lang):"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-text",withLineNumbers:!0},"Harry Potter and the Chamber of Secrets\n")),"\n",a.createElement(n.p,null,"Code block with lineNumbers (and without lang):"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-none",withLineNumbers:!0},"Harry Potter and the Chamber of Secrets\n")),"\n",a.createElement(n.p,null,"Code block with only the title:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-none",title:"src/utils/scream.js"},"const scream = (input) => window.alert(input)\n")),"\n",a.createElement(n.p,null,"Code block with only the title and with lineNumbers:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-none",title:"src/utils/scream.js",withLineNumbers:!0},"const scream = (input) => window.alert(input)\n")),"\n",a.createElement(n.p,null,"Line highlighting without code title:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-js",highlight:"2,4-5"},'const test = 3;\nconst foo = "bar";\nconst harry = "potter";\nconst hermione = "granger";\nconst ron = "weasley";\n')),"\n",a.createElement(n.p,null,"Here will ",a.createElement(n.code,null,"inline code")," go, just inside the text. Wow!"),"\n",a.createElement(n.p,null,"Code block with line numbers, highlighting, language, and title:"),"\n",a.createElement("div",{"data-testid":"code-block"},a.createElement(n.pre,null,a.createElement(n.code,{className:"language-tsx",title:"src/components/blog.tsx",highlight:"7-8,19,21",withLineNumbers:!0},'import * as React from "react";\n\nconst Blog = ({ posts }: PostsProps) => {\n  const { tagsPath, basePath } = useSiteMetadata();\n\n  return (\n    <Layout>\n      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>\n        <Heading variant="h2" as="h2">\n          Blog\n        </Heading>\n        <Styled.a\n          as={Link}\n          sx={{ variant: `links.secondary` }}\n          to={`/${basePath}/${tagsPath}`.replace(/\\/\\/+/g, `/`)}\n        >\n          View all tags\n        </Styled.a>\n      </Flex>\n      <Listing posts={posts} sx={{ mt: [4, 5] }} />\n    </Layout>\n  );\n};\n\nexport default Blog;\n'))))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(s,e)):s(e)},c=t(4903);function u(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z},847:function(e,n,t){var a=t(8733),r=t(7294),l=t(1883),o=t(3494),s=t(9706);n.Z=e=>{let{tags:n}=e;const{tagsPath:t,basePath:i}=(0,o.Z)();return(0,a.tZ)(r.Fragment,null,n.map(((e,n)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!n&&", ",(0,a.tZ)(l.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,s.Z)("/"+i+"/"+t+"/"+e.slug)},e.name)))))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-code-block-examples-index-mdx-8d02caadcc540ecea1fe.js.map