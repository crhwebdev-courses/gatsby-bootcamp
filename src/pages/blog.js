import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';

const CreatePostList = data => {  
    const formattedData = data.allMarkdownRemark.edges.map(post => {        
        return (
            <li key={post.node.frontmatter.title}>
                <Link to={`/blog/${post.node.fields.slug}`}>
                  <h1>{post.node.frontmatter.title}</h1>
                  <p>{post.node.frontmatter.date}</p>
                </Link>
                
            </li>            
        );
    });
    return formattedData;    
};

const BlogPage = (props) => {    
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }       
            }
          }
        }
      }
    `);
    
    console.log(props);

    return (
        <Layout>            
            <h1>Blog</h1>            
            <ul>         
                {CreatePostList(data)}       
            </ul>
        </Layout>
    );
};

export default BlogPage;