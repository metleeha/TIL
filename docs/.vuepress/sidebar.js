const Javascript = './Javascript'
const JavascriptList = [
    'regular-expression-1',
    'regular-expression-2'
]

module.exports = [
    {
        title: 'Javascript',
        children: JavascriptList.map(v => `${Javascript}/${v}`)
    },
]