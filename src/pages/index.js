import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Carl, a full-stack developer living in beautiful Illinois</h2>      
      <p>Need a developer who can actually make single page apps? <Link to="/contact">Contact Me</Link></p>  
    </Layout>
  );
};

export default IndexPage;