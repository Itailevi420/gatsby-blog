import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default({ data }) => {
  console.log(data)
  // console.log(data.allMarkdownRemark.edges[0].node.frontmatter.title)
  // console.log(data.allMarkdownRemark.edges[0].node.excerpt)
   return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>המחשבות של יהודית</h1>
        <h4> { data.allMarkdownRemark.totalCount } </h4>
         {data.allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
              <span>
                {node.frontmatter.title} - {node.frontmatter.date}
              </span>
              <p>
                {node.excerpt}
              </p>
            </div>
         ))}
      </div>
    </Layout>
   )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields : [frontmatter___date], order: DESC}) {
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