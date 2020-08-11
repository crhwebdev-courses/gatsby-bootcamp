import React from 'react';
import Footer from '../components/footer.js';
import Header from '../components/header.js';

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <p>See my stuff at <a href="https://github.com/crhwebdev" target="_blank">Github</a></p>
            <Footer />
        </div>
    );
};

export default ContactPage;