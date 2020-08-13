import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';

const CreatePostList = data => {  
    const formattedData = data.allMarkdownRemark.edges.map(post => {        
        return (
            <li key={post.node.frontmatter.title} className={blogStyles.post}>
                <Link to={`/blog/${post.node.fields.slug}`}>
                  <h2>{post.node.frontmatter.title}</h2>
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
        allMarkdownRemark (
          sort: {
            fields: [frontmatter___date]
            order: ASC
          }
        ){
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
            <ol className={blogStyles.posts}>         
                {CreatePostList(data)}       
            </ol>
        </Layout>
    );
};

export default BlogPage;