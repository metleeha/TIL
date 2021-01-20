---
tags: [ "graphql", "prisma2" ]
---

# Prisma2로 GraphSQL 서버 시작하기

## 선행 스텝
- yarn
- Typescript
- PostgreSQL

## Step 1: Typescript와 PostgreSQL 세팅하기

### Typescript
```bash
$ yarn add --dev ts-node-dev typescript
$ touch tsconfig.json
```

tsconfig.json 
```json
{
    "compilerOptions": {
        // Target latest version of ECMAScript.
        "target": "esnext",
        // Search under node_modules for non-relative imports.
        "moduleResolution": "node",
        // Process & infer types from .js files.
        "allowJs": true,
        // Don't emit; allow Babel to transform files.
        "noEmit": true,
        // Enable strictest settings like strictNullChecks & noImplicitAny.
        "strict": true,
        // Import non-ES modules as default imports.
        "esModuleInterop": true,
        "jsx": "react",
        "outDir": "dist",
        "rootDir": "src",
        "lib": ["esnext"],
    },
    "exclude": [
        "node_modules"
    ],
    "include": [
        "src/**/*",
        "tests/**/*"
    ]
}
```
이어서 데이터베이스(RDBMs)를 세팅한다. 여러 데이터베이스가 있지만, Prisma2에서는 PostgreSQ을 
데이터베이스로 추천하고 있다. 참고 링크는 [여기](https://www.prisma.io/dataguide/postgresql/benefits-of-postgresql)있다.

### MacOS 환경에서 PostgreSQL 설치하기
```bash
$ brew install postgresql

$ brew services start postgresql

$ createuser -P -s <userId>

$ psql postgres

postgres=# CREATE DATABASE <databaseName>;
```

## Step 2: GraphQL Server 세팅하기
이제 GrqphQL 서버를 시작한다. package.json에 라이브러리를 설치한다.
```bash
$ yarn init 
$ yarn add graphql-yoga graphql-tools merge-graphql-schemas express
```

#### server.ts
```ts
require("dotenv").config()
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from './schema';
import { createContext } from './context';

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema, context:createContext });

server.express.use(logger("dev"))

server.start({port: PORT}, () => 
    console.log(`✅ Server running on http://localhost:${PORT}`)
);
```

If you want to run Prisma Studio, use prisma studio.
If you want to generate the Prisma Client, use prisma generate (or prisma generate --watch)
If you want to update your schema, use prisma introspect.
If you want to migrate your database, use prisma migrate.

Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
$ prisma migrate dev --preview-feature

Reset your database and apply all migrations
$ prisma migrate reset --preview-feature

Apply pending migrations to the database in production/staging
$ prisma migrate deploy --preview-feature

Check the status of migrations in the production/staging database
$ prisma migrate status --preview-feature

Specify a schema
$ prisma migrate status --schema=./schema.prisma --preview-feature

먼저 Prisma Client 패키지를 설치한다.
```bash
yarn add @prisma/cli -D
```

prisma schema 파일을 작성한다.
```bash
mkdir prisma
touch prisma/schema.prisma
```

