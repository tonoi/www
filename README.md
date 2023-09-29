# Gatsby minimal blogの改変
Gatsbyの多くのStarter Packageはpage/Index.jsなどを用いているが、minimal-blogではほぼすべてをComponentとする事で他のThemeやPlug-inとの親和性を確保している。minimal-blogの内容を修正したい場合は、Shadowingを用いる。

## Shadowing
node_modules/@lekoarts/gatsby-theme-minimal-blog配下のファイルを ./src/@lekoarts/gatsby-theme-minimal-blogにCopyして編集する事でStarterのファイルを上書きする事が出来る。  
Top Pageなどは components/homepage.tsx や component/layout.tsx を改変する。


