---
tags: ["throttle", "debounce", "javascript"]
---

# Throttle과 Debounce 개념 정리 

쓰로틀링(throttling)과 디바운싱(debouncing)에 대해 알아보자. 
둘다 자바스크립트의 이벤트 실행을 성능상의 이유로 제어하는 방식이다. 

***쓰로틀링***: 마지막 함수가 호출된 후 일정 시간이 지나도록 다시 호출되지 않도록 함. 입력 주기를 방해하지 않고 한번에 모았다가 한번에 출력을 제한함.

***디바운싱***: 연이어 호출되는 함수 중에 마지막 함수(또는 제일 처음)만 호출하도록 함.

두 기능은 underscore(_)나 lodash에도 있는 기능이다. 디바운싱은 주로 ajax 검색 시에 쓰이고, 쓰로틀링은 스크롤을 올리거나 내릴 때 보통 사용한다. 

## 예시 코드
```html
<input id="input />
```
```js
function KeyUpFn(el) {
    console.log('ajax 요청', el.target.value);
}
document.getElementById.addEventListener('keyup', KeyUpFn)
```

### 디바운싱
서비스 검색을 구현할 시에 검색어를 입력하면 미리보기 같이 결과가 바로 나온다고 해보자. 만약 유료 API를 사용할 경우 검색 음절을 입력할 때마다 ajax 요청이 실행되면 너무 많은 비용 청구가 될 수 있다. 이럴 때 이벤트가 한번 실행되고 나면 특정 시간이 지날 동안 다시 이벤트가 발생하더라도 끝난 것으로 제한을 걸어둘 수 있다. 입력이 발생하면 이전 타이머는 초기화해서 다시 타이머를 실행시킨다. 

```js
var timer;
document.getEmelementById('input').addEventListener('keyup', function(el) {
    if (timer) {
        cleanTimeout(timer);
    }
    timer = setTimeout(function() {
        console.log('ajax 요청', el.target.value);
    }, 200)
});
```

### 쓰로틀링
쓰로틀링은 보통 성능 이슈 떄문에 사용한다. 횟수에 제한을 거는 방식으로 작용한다.
스크롤을 내린다고 가정했을 때 이벤트를 여러개 걸어두었다면 실행할 때마다 렉이 심하게 걸릴 수 있다. 따라서 몇 초에 한 번, 또는 몇 밀리초에 한 번씩만 실행하도록 제한을 걸어둔다. 타이머가 설정되어 있다면 아무 동작을 하지 않고, 타이머가 없다면 타이머를 설정한다. 이후로 일정 시간이 지나면 ajax가 실행된다.
```js
var timer; 
document.getElementById('input').addEventListener('keyup', function(el) {
    if (!timer) {
        timer = setTimeout(function() {
            timer = null;
            console.log('ajax 요청', el.target.value);
        }, 200);
    }
})
```



## Reference
- Zerocho, Blog, https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa
- Web Club, Tistory, https://webclub.tistory.com/607
- Andrew Park, Medium, https://medium.com/@pks2974/throttle-%EC%99%80-debounce-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-2335a9c426ff