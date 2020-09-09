// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `)

//   // Create paginated pages for posts

//   const postPerPage = 3

//   // Calculate how many paginated pages Gatsby needs to create

//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)
//   /* We ignore the first argument in the for each by the _ char, but we do
// need the index i
// */
//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPage({
//       /* if there is only one post, it will be the home page,
// otherwise if indes is larger then 0, add 1 to the index */

//       path: i === 0 ? `/` : `/${i + 1}`,
//       // Where will the generated blog pages be created?
//       component: require.resolve("./src/templates/allPosts.js"),
//       // What context should we pass to component?
//       context: {
//         /* the limit of how many blog pages we are going to show and
// pass into the query for allPosts.js */
//         limit: postPerPage,
//         /* If the index value is 0, it wont skip anything and return the
// first three items in our case.
// In the next itterion of the loop, the page 2, the index value is 1,
// because its the second item of the array, 1*3, so skip the first
// three values, and return 4, 5, and 6.
// In our case as we only have 4 blog articles, it will only return
// the fourth one on teh second page.
// */

//         skip: i * postPerPage,
//         numPages,
//         currentPage: i + 1,
//       },
//     })
//   })

//   // Create single blog posts
//   // For each edge in the query, create a new page
//   data.allMdx.edges.forEach(edge => {
//     /* take in the values from the query for slug and id and store
// them in slug and id const to be used in the createPage method
// for the singlePost.js */

//     const slug = edge.node.frontmatter.slug
//     const id = edge.node.id
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/templates/singlePost.js`),
//       context: { id },
//     })
//   })
// }
