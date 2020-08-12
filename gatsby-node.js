// NOTE: This file is used to create NodeJS functions that are run by GatsbyJS when building a website
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    
    if(node.internal.type === 'MarkdownRemark'){
        console.log(JSON.stringify(node, undefined, 4));
    }        
  }