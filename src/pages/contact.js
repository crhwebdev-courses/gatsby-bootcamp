import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />            
            <h1>Contact</h1>
            <p>See my stuff at <a href="https://github.com/crhwebdev" target="_blank">Github</a></p>            
        </Layout>
    );
};

export default ContactPage;