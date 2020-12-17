# Typescript & Express 프로젝트 시작하기  
> BFF 개발을 위한 Node.js Express 서버 Typescript로 작성하기

## npm package.json 설정
```bash
npm init
```

## dependencies 설치하기
기본적인 디펜던시 설치하기
```bash
yarn add express typescript body-parser cors typescript-rest
```
개발 모드에서 필요한 디펜던시 설치하기 
```bash
yarn add -D nodemon ts-node @types/cors
```

## tsconfig.json
```json
{
    "complierOptions": {
        "lib": [
            "es2018",
            "es5",
            "dom"
        ],
        "baseUrl": ".",
        "paths": {
            "@/types/*": ["./src/types/*"],
            "*": ["./src/types/*"]
        },
        "typeRoots": [
            "./src/types"
        ],
        "resolveJsonModule": true,
        "esModuleInterop": true,
        "target": "es5",
        "strict": true,
        "module": "commonjs",
        "moduleResolution": "node",
        "outDir": "./build",
        "experimentalDecorators": true,
        "declaration": true,
        "sourceMap": false
    },
    "exclude": [
        "./node_modules/**/*",
        "./build/**/*"
    ],
    "include": [
        "./src/**/*"
    ]
}
```

## src/index.ts
```ts
import express, {Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {Server} from "typescript-rest";

export const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());


Server.buildServices(app);

// Just checking if given PORT variable is an integer or not
let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
  port = 4000;
}

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server Started at PORT: ${port}`);
});
```
