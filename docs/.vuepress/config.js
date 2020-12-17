// config.js
module.exports = {
    title: `Today Hadong Learned`,
    description: `Hadong's personal Wiki`,
    base: "/TIL/",
    dest: "build",
    themeConfig: {
        logo: 'https://avatars1.githubusercontent.com/u/45955032?s=460&v=4',
        nav: [{
            text: 'GitHub',
            link: 'https://github.com/metleeha/'
          }, {
            text: 'Blog',
            link: 'https://metleeha.tistory.com/'
          },
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        smoothScroll: true
    },
    markdown: {
        // text
    },
    plugins: [
        
    ]
}