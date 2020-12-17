# [JS] Regular Expression

## .test()
문자열에서 특정 구문이 일치하는지 알아보기 위한 정규식 `/sample/`. 

```js
//ex1)
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
```
대소문자를 구분한다. 
```js
//ex2)
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);
```
여러개 문구를 한번에 찾기 위해서는 `OR` 이나 `|` 를 사용한다. 
```js
// petString 문장에서 dog, cat, bird, fish 중 하나라도 있으면 true
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
```
대소문자 구분없이 모두 찾기위해서는 `i` flag를 추가해준다.
```js
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let result = fccRegex.test(myString);
```

## .match()
.match() 함수로 coding 추출하기
```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); 
```
여러개 문자열 매치 확인하기(대소문자 구분 X)
```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex);
```
비슷한 유형 문자열 찾는 와일드 카드 `.` 
```js
// run, fun, bun, pun 등 운율 맞는 단어 모두 찾기 
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr); // return true
```
여러가지 문자 한번에 여러개 매채하는 구문 찾기
```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
```
알파벳 전체 다 필터링 해보기 `-`
```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex); 
```
특정 알파벳과 숫자 필터링 
```js
// h와 s사이 알파벳과 2부터 6사이 숫자 
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 
```
모음과 숫자가 안들어간 문자열 찾기 `^`
```js
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; 
let result = quoteSample.match(myRegex); 
```
여러번 같은 문자 반복하는지 확인하기 `+`
```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
// returns ['ss', 'ss']
```
레이지한 문자열 찾기 `?` 
기본적으로 greedy하기 문자열 매칭을 찾는데, 가장 짧은 문자열 반환하고 싶을 때 사용한다.
```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // return <h1>
let result = text.match(myRegex);
```
문장의 첫 단어 일치하는지 `/^sample/`
```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result = calRegex.test(rickyAndCal);
```
문장의 마지막 단어 일치하는지 `/sample$`
```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);
```
모든 문자와 숫자 및 `_` 카운트하기 `/\w/` = `/[A-Za-z0-9_]+/`
```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;
```
특수문자 확인하기 `/\W/`
```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```
숫자 확인하기 `/\d/` = `/[0-9]/` 
숫자 아닌 문자 확인하기 `/\D/` = `/^[0-9]/`

## Ex) Username 정규식으로 패턴 제한하기
```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
^ - start of input
[a-z] - first character is a letter
[0-9]{2,0} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input




## Reference
- FastCodeCamp, https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions