---
tags: [ "graphql", "prisma2", "apollo", "nexus" ]
---

# Prisma2, Apollo Server, nexus/schema 로 GraphSQL 서버 시작하기

인스타그램 클론 프로젝트를 진행하는데, Prisma2를 본격적으로 사용해보고자 기존 강의에서 적용하는 
`graphql-yoga` 대신 `prisma2`와 `apollo server`를 적용해보았다. 

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
이어서 데이터베이스(RDBMs)를 세팅한다. 여러 데이터베이스가 있지만, Prisma와 Nexus 모두 PostgreSQ을 
데이터베이스로 추천하고 있다. 참고 링크는 [여기](https://www.prisma.io/dataguide/postgresql/benefits-of-postgresql)와 [여기](https://nexusjs.org/#/tutorial/chapter-5-persisting-data-via-prisma)있다.

### MacOS 환경에서 PostgreSQL 설치하기
```bash
$ brew install postgresql

$ brew services start postgresql

$ createuser -P -s <userId>

$ psql postgres

postgres=# CREATE DATABASE <databaseName>;
```

## Step 2: Apollo Server 세팅하기
이제 GrqphQL 서버를 시작한다. package.json에 라이브러리를 설치한다.
```bash
$ yarn init 
$ yarn add apollo-server
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

### schema.prisma 로컬 테스트 파일 작성 예시
```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
  // url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id           Int       @id @default(autoincrement())
  username     String    @unique
  email        String    @unique
  firstName    String    @default("")
  lastName     String    @default("")
  bio          String    @default("")
  comments     Comment[]
  likes        Like[]
  messagesFrom Message[] @relation("MessageFrom")
  messagesTo   Message[] @relation("MessageTo")
  followers    User[]    @relation("UserFollows")
  following    User[]    @relation("UserFollows")
  Post         Post[]
  rooms        Room[]
}

model Post {
  id       Int       @id @default(autoincrement())
  location String
  caption  String
  comments Comment[]
  files    File[]
  likes    Like[]
  User     User[]
}

model Like {
  id     Int   @id @default(autoincrement())
  userId Int?
  postId Int?
  post   Post? @relation(fields: [postId], references: [id])
  user   User? @relation(fields: [userId], references: [id])
}

model Comment {
  id     Int   @id @default(autoincrement())
  userId Int?
  postId Int?
  post   Post? @relation(fields: [postId], references: [id])
  user   User? @relation(fields: [userId], references: [id])
}

model File {
  id     Int    @id @default(autoincrement())
  url    String
  postId Int?
  post   Post?  @relation(fields: [postId], references: [id])
}

model Room {
  id           Int       @id @default(autoincrement())
  messages     Message[]
  participants User[]
}

model Message {
  id     Int     @id @default(autoincrement())
  text   String?
  fromId Int
  toId   Int
  roomId Int?
  from   User    @relation("MessageFrom", fields: [fromId], references: [id])
  room   Room?   @relation(fields: [roomId], references: [id])
  to     User    @relation("MessageTo", fields: [toId], references: [id])
}
```

다음으로 prisma shcema 파일로 prisma db 파일을 작성한다.
```bash
prisma migrate dev --preview-feature
```
migrate한 prisma schema를 데이터베이스에 저장한다.
```bash
prisma db push --preview-feature
```

prisma 클라이언트를 생성한다.
```bash
prisma generate
```

브라우저에서 확인한다.
```bash
prisma studio
```

## Reference
- https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-apollo-server
- https://medium.com/dooboolab/how-to-set-up-a-graphql-server-with-apollo-server-prisma2-and-nexus-schema-f59aa23b5d5d