import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer.js';
import Header from '../components/header.js';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm Carl, a full-stack developer living in beautiful Illinois</h2>      
      <p>Need a developer who can actually make single page apps? <Link to="/contact">Contact Me</Link></p>
      <Footer />
    </div>
  );
};

export default IndexPage;