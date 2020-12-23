---
tags: [ "graphql", "prisma" ]
---

# Prisma2로 GraphSQL 서버 시작하기

Prisma2로 GraphQL 서버 시작하가

먼저 Prisma Client 패키지를 설치한다.
```bash
yarn add @prisma/cli -D
```

prisma schema 파일을 작성한다.
```bash
mkdir prisma
touch prisma/schema.prisma
```

#### schema.prisma 파일 작성 예시
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
  id          Int       @id @default(autoincrement())
  username    String    @unique
  email       String    @unique
  firstName   String    @default("")
  lastName    String    
  bio         String?
  followers   User[]    @relation("FollowRelation", references: [id])
  following   User[]    @relation("FollowRelation", references: [id])
  posts       Post[]
  likes       Like[]
  comments    Comment[]
}

model Post {
  id          Int       @id @default(autoincrement())
  location    String
  caption     String
  user        User[]
  files       File[]
  likes       Like[]
  comments    Comment[]
}

model Like {
  id      Int       @id @default(autoincrement())
  user    User?
  post    Post?
}

model Comment {
  id      Int       @id @default(autoincrement())
  user    User?
  post    Post?
}

model File {
  id      Int       @id @default(autoincrement())
  url     String
  post    Post?
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


