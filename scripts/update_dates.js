const fs = require('fs');
const path = require('path');

const today = '2026-11-18';

// 1. Update lib/data/blogData.js
const blogDataPath = path.join(__dirname, '..', 'lib', 'data', 'blogData.js');
let blogDataCode = fs.readFileSync(blogDataPath, 'utf8');

blogDataCode = blogDataCode.replace(/publishDate:\s*'2025-\d{2}-\d{2}'/g, `publishDate: '${today}'`);
blogDataCode = blogDataCode.replace(/lastUpdated:\s*'2025-\d{2}-\d{2}'/g, `lastUpdated: '${today}'`);

fs.writeFileSync(blogDataPath, blogDataCode, 'utf8');
console.log('Updated lib/data/blogData.js dates to', today);

// 2. Update content/blog.json
const blogJsonPath = path.join(__dirname, '..', 'content', 'blog.json');
let blogJson = JSON.parse(fs.readFileSync(blogJsonPath, 'utf8'));

blogJson.articles.forEach((art) => {
  art.publishDate = today;
});

fs.writeFileSync(blogJsonPath, JSON.stringify(blogJson, null, 2), 'utf8');
console.log('Updated content/blog.json dates to', today);
