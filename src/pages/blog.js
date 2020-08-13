import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const CreatePostList = data => {  
    const formattedData = data.allContentfulBlogPost.edges.map(post => {        
        return (
            <li key={post.node.title} className={blogStyles.post}>
                <Link to={`/blog/${post.node.slug}`}>
                  <h2>{post.node.title}</h2>
                  <p>{post.node.publishedDate}</p>
                </Link>                
            </li>            
        );
    });
    return formattedData;    
};

const BlogPage = (props) => {    
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields:publishedDate,
          order:DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(
              formatString:"MMMM Do, YYYY"
            )
          }
        }
      }
    }
    `);
    
    console.log(props);

    return (
        <Layout>
            <Head title="Blog" />            
            <h1>Blog</h1>            
            <ol className={blogStyles.posts}>         
                {CreatePostList(data)}       
            </ol>
        </Layout>
    );
};

export default BlogPage;