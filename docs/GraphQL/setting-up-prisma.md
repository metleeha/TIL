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

