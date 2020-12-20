const Javascript = './Javascript';
const Typescript = './Typescript';
const DevOps = './DevOps';
const CS = './CS';
const Database = './Database';
// const Vue = './Vue';

const JavascriptList = [
    'regular-expression-1',
    'regular-expression-2',
    'throttle-debounce'
]

const TypescriptList = [
    'nodejs-express-typescript'
]

const DevOpsList = [
    'jira-cicd'
]

const CSList = [
    'basic-questions'
]

const DatabaseSQLList = [
    'concat',
]
const DatabaseNOSQLList = [
    'nosql'
]

module.exports = [
    {
        title: 'Javascript',
        children: JavascriptList.map(v => `${Javascript}/${v}`)
    },
    {
        title: 'Typescript',
        children: TypescriptList.map(v => `${Typescript}/${v}`)
    },
    // {
    //     title: 'Vue',
    //     children: VueList.map(v => `${Vue}/${v}`)
    // },
    {
        title: 'CS',
        children: CSList.map(v => `${CS}/${v}`)
    },
    {
        title: 'Database',
        children: [
            {
                title: 'SQL',
                children: DatabaseSQLList.map(v => `${Database}/SQL/${v}`)
            },
            {
                title: 'NOSQL',
                children: DatabaseNOSQLList.map(v => `${Database}/NOSQL/${v}`)
            }
        ]
    },
    {
        title: 'DevOps',
        children: DevOpsList.map(v => `${DevOps}/${v}`)
    },


]