// NOTE: This file is used to create NodeJS functions that are run by GatsbyJS when building a website

const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    
    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md');
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }        
  }