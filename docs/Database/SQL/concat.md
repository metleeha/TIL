# [SQL] 문자열 합치기 (CONCAT 함수)

각기 다른 필드에서 데이터를 결합해서 사용하는 경우 사용한다.

## 문법 

CONCAT()은 여러개 문자열을 쉽표와 함께 입력해 합쳐주는 함수이다. 

```
CONCAT(문자열1, 문자열2, 문자열3, ...)
```



## 예제

#### user 

| id   | name  |
| ---- | ----- |
| 1    | Kate  |
| 2    | Sam   |
| 3    | Naomi |

#### character

| id   | title        | job    |
| ---- | ------------ | ------ |
| 1    | SQL이 궁금한 | 전사   |
| 2    | Hello World  | 궁수   |
| 3    | 코딩 몽키    | 마법사 |



id를 기준으로 두 테이블을 합치고, title, job과 name을 합친 문자열 컬럼을 작성한다. 
id 기준으로 내림차순 정렬한다. 

| id   |                        |
| ---- | ---------------------- |
| 3    | 코딩 몽키 마법사 Naomi |
| 2    | Hello Worl 궁수 Sam    |
| 1    | SQL이 궁금한 전사 Kate |



```sql
select u.id concat(ifnull(c.title, ""), c.job, "", u.name)
	from user as u
	join character as c
	on u.id = c.id desc;
```

