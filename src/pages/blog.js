import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';

const CreatePostList = data => {  
    const formattedData = data.allMarkdownRemark.edges.map(post => {        
        return (
            <li key={post.node.frontmatter.title}>
                <h1>{post.node.frontmatter.title}</h1>
                <p>{post.node.frontmatter.date}</p>
            </li>            
        );
    });
    return formattedData;    
};

const BlogPage = () => {    
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }       
            }
          }
        }
      }
    `);
    
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