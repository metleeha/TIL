# [JS] Regular Expression

## 정규식 패턴

### `[xyz]`
문자셋(Character set) 이다. 이 패턴은 괄호 안의 문자(이스케이프 시퀀스 포함)를 모두 대응한다. 점(.)이나 별표(*)같은 특수 문자는 문자셋 내부에서는 특수 문자가 아니다. 따라서 따로 이스케이프시킬 필요가 없다. 
하이픈을 이용해 문자 범위를 지정할 수도 있다. 예를 들어 [a-d]는 패턴 [abcd]와 똑같이 동작한다. 패턴 /[a-z.]+/ 와 /[\w.]+/ 는 "test.i.ng" 전체 문자열이 일치한다.

### `+`
앞의 표현식이 1회 이상 연속으로 반복되는 부분과 대응한다. {1,} 와 같은 의미.
예를 들어, /a+/ 는 "candy"의 'a'에 대응되고 "caaaaaaandy" 의 모든 'a'들에 대응되지만, "cndy" 내의 어느 부분과도 대응되지 않는다.

### `\w` 
밑줄 문자를 포함한 영숫자 문자에 대응한다. [A-Za-z0-9_] 와 동일하다.
예를 들어, /\w/는 "apple,"의 'a' 에 대응되고, "$5.28,"의 '5'에 대응되고,"3D."의 '3'에 대응된다.

### 사용 예시
다음은 카드 내용이 'J', 'Q', 'K', 'A'과 일치하거나 숫자 10을 포함하면 카운트를 -1하고, 숫자 1부터 7 사이라면 카운트를 +1 하는 함수를 작성한 예시다. 

## 정규식에서 쓰이는 메소드 
|Method|Description|
|---|---|
|`exec`|대응되는 문자열을 찾는 RegExp 메소드. 정보를 가지고 있는 배열을 반환한다. 대응되는 문자열을 찾지 못했다면 null을 반환.|
|`test`|대응되는 문자열이 있는지 검사하는 RegExp 메소드. true 나 false를 반환.|
|`match`|대응되는 문자열을 찾는 RegExp 메소드. 정보를 가지고 있는 배열을 반환. 대응되는 문자열을 찾지 못했다면 null을 반환.|
|`search`|대응되는 문자열이 있는지 검사하는 String 메소드. 대응된 부분의 인덱스를 반환. 대응되는 문자열을 찾지 못했다면 -1을 반환.|
|`replace`|대응되는 문자열을 찾아 다른 문자열로 치환하는 String 메소드.|
|`split`|정규식 혹은 문자열로 대상 문자열을 나누어 배열로 반환하는 String 메소드.|

```js
var count = 0;

function cc(card) {
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || String(card).match(regex)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";
}
```


## Reference 
- MDN, (Aug 12, 2020), https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D
- FreeCodeCamp, (Aug 12, 2020), https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards