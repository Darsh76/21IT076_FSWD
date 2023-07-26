const url = require('url');

function resolveAbsoluteURL(baseURL, relativePath) {
    const absoluteURL = new URL(relativePath, baseURL);
    return absoluteURL.href;
}

// Example usage:
const baseURL = 'https://x.com/trend/';
const relativePath = '../india/area.html';

const absoluteURL = resolveAbsoluteURL(baseURL, relativePath);
console.log('Absolute URL:', absoluteURL);
