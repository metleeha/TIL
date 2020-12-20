---
tags: ["throttle", "debounce", "javascript"]
---

# Throttle과 Debounce 개념 정리 

쓰로틀링(throttling)과 디바운싱(debouncing)에 대해 알아보자. 
둘다 자바스크립트의 이벤트 실행을 성능상의 이유로 제어하는 방식이다. 

***쓰로틀링***: 마지막 함수가 호출된 후 일정 시간이 지나도록 다시 호출되지 않도록 함. 입력 주기를 방해하지 않고 한번에 모았다가 한번에 출력을 제한함.
***디바운싱***: 연이어 호출되는 함수 중에 마지막 함수(또는 제일 처음)만 호출하도록 함.

두 기능은 underscore(_)나 lodash에도 있는 기능이다. 디바운싱은 주로 ajax 검색 시에 쓰이고, 쓰로틀링은 스크롤을 올리거나 내릴 때 보통 사용한다. 

간단한 예제
```html
// html
<input id="search" type="search" name="search" value="" />
```
input에 keyup event listener를 등록한다.


## Reference
- Zerocho, Blog, https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa
- Web Club, Tistory, https://webclub.tistory.com/607
- Andrew Park, Medium, https://medium.com/@pks2974/throttle-%EC%99%80-debounce-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-2335a9c426ff