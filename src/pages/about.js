import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout> 
            <Head title="About" />           
            <h1>About Me</h1>
            <p>I'm a fullstack developer living in the Chicago area.  I spend my time developing web applications, Unity games, and running.</p>
            <p>For for information, see my <Link to="/contact">Contact page</Link></p>            
        </Layout>
    );
};

export default AboutPage;