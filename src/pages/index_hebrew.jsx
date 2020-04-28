import React from "react"
import { graphql, Link } from "gatsby"
import AutoDirectionProvider from 'react-with-direction/dist/AutoDirectionProvider';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default({ data }) => (
  <Layout>
    <SEO title="Home" />
    <AutoDirectionProvider text={data.allMarkdownRemark.edges.node.excerpt}>
    <div>
      <h1>המחשבות של יהודית</h1>
      <h4> { data.allMarkdownRemark.totalCount } </h4>
      <p> { data.allMarkdownRemark.edges.node.excerpt } </p>
    </div>
    </AutoDirectionProvider>
    
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    {/* <Link to="/page-3/">Go to page 3</Link> */}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
    edges {
      node {
        id
        frontmatter {
          title
          description
          date
        }
        excerpt
      }
    }
  }
  }
`