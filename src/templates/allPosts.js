import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from "../components"
import { H1, P } from "../elements"
/* pageContext is use to access the context created in
the gatsby-node, and data is what we retriece from our graphQl query */
const allPosts = ({ pageContext, data }) => {
  /* Destructure what we get from pageContext, and that is current page and 
and nr of pages */
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  /* In our example, numPages will be 2, as the page limit was set
to 3 and we had 4 blog articles created, so 2 will be the value set
to isLast */
  const isLast = currentPage === numPages
  /* If we are on the second page, so the value of currentPage, 
that is 2, so 2 -1 is equal to 1, then the link shoul go to the 
index or home page, else if we are on page 3 or more, it will take us to
page 2 or the previous page link*/
  const prevPage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`
  /* Next page link will be whatever value of current page + 1 */
  const nextPage = `/${currentPage + 1}`
  // All data we get back from the query
  const posts = data.allMdx.edges
  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign='center' margin='0 0 1rem 0'>
          Elit rhoncus tellus proin parturient.
        </H1>
        <P color='dark2' textAlign='center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          volutpat risus quis lorem pulvinar et pulvinar sit dictum. Eget orci,
          orci in congue cursus nulla tincidunt facilisi.
        </P>
        {posts.map((post) => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}
export default allPosts
export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`