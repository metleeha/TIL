const Javascript = './Javascript';
const DevOps = './DevOps';

const JavascriptList = [
    'regular-expression-1',
    'regular-expression-2'
]

const DevOpsList = [
    'jira-cicd'
]

module.exports = [
    {
        title: 'Javascript',
        children: JavascriptList.map(v => `${Javascript}/${v}`)
    },
    {
        title: 'DevOps',
        children: DevOpsList.map(v => `${DevOps}/${v}`)
    }
]