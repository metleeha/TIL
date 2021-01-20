const Basic = './Basic';
const CS = './CS';
const Javascript = './Javascript';
const Typescript = './Typescript';
const DevOps = './DevOps';
const Database = './Database';
const GraphQL = './GraphQL';
const Tools = './Tools';
// const Vue = './Vue';

const BasicList = [
    'cross-browsing'
]

const JavascriptList = [
    'regular-expression-1',
    'regular-expression-2',
    'throttle-debounce'
]

const TypescriptList = [
    'nodejs-express-typescript',
    'wooa-tech-learning'
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

const GraphQLList = [
    'setting-up-graphqlserver'
]

const ToolsList = [
    'marp'
]

module.exports = [
    {
        title: 'Basic',
        children: BasicList.map(v => `${Basic}/${v}`)
    },
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
        title: 'GraphQL',
        children: GraphQLList.map(v => `${GraphQL}/${v}`)
    },
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
    {
        title: 'Tools',
        children: ToolsList.map(v => `${Tools}/${v}`)
    },


]