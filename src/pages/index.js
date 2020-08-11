import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Carl, a full-stack developer living in beatufiul Illinois</h2>      
      <p>Need a developer who can actually make single page apps? <Link to="/contact">Contact Me</Link></p>
    </div>
  );
};

export default IndexPage;