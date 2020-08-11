import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer.js';
import Header from '../components/header.js';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I'm a fullstack developer living in the Chicago area.  I spend my time developing web applications, Unity games, and running.</p>
            <p>For for information, see my <Link to="/contact">Contact page</Link></p>
            <Footer />
        </div>
    );
};

export default AboutPage;