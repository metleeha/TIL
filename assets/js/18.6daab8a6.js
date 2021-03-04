(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{373:function(t,a,s){"use strict";s.r(a);var r=s(25),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js-regular-expression-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-regular-expression-1"}},[t._v("#")]),t._v(" [JS] Regular Expression (1)")]),t._v(" "),s("h2",{attrs:{id:"정규식-패턴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정규식-패턴"}},[t._v("#")]),t._v(" 정규식 패턴")]),t._v(" "),s("h3",{attrs:{id:"xyz"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xyz"}},[t._v("#")]),t._v(" "),s("code",[t._v("[xyz]")])]),t._v(" "),s("p",[t._v('문자셋(Character set) 이다. 이 패턴은 괄호 안의 문자(이스케이프 시퀀스 포함)를 모두 대응한다. 점(.)이나 별표(*)같은 특수 문자는 문자셋 내부에서는 특수 문자가 아니다. 따라서 따로 이스케이프시킬 필요가 없다.\n하이픈을 이용해 문자 범위를 지정할 수도 있다. 예를 들어 [a-d]는 패턴 [abcd]와 똑같이 동작한다. 패턴 /[a-z.]+/ 와 /[\\w.]+/ 는 "test.i.ng" 전체 문자열이 일치한다.')]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),s("code",[t._v("+")])]),t._v(" "),s("p",[t._v('앞의 표현식이 1회 이상 연속으로 반복되는 부분과 대응한다. {1,} 와 같은 의미.\n예를 들어, /a+/ 는 "candy"의 \'a\'에 대응되고 "caaaaaaandy" 의 모든 \'a\'들에 대응되지만, "cndy" 내의 어느 부분과도 대응되지 않는다.')]),t._v(" "),s("h3",{attrs:{id:"w"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#w"}},[t._v("#")]),t._v(" "),s("code",[t._v("\\w")])]),t._v(" "),s("p",[t._v("밑줄 문자를 포함한 영숫자 문자에 대응한다. [A-Za-z0-9_] 와 동일하다.\n예를 들어, /\\w/는 \"apple,\"의 'a' 에 대응되고, \"$5.28,\"의 '5'에 대응되고,\"3D.\"의 '3'에 대응된다.")]),t._v(" "),s("h3",{attrs:{id:"사용-예시"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용-예시"}},[t._v("#")]),t._v(" 사용 예시")]),t._v(" "),s("p",[t._v("다음은 카드 내용이 'J', 'Q', 'K', 'A'과 일치하거나 숫자 10을 포함하면 카운트를 -1하고, 숫자 1부터 7 사이라면 카운트를 +1 하는 함수를 작성한 예시다.")]),t._v(" "),s("h2",{attrs:{id:"정규식에서-쓰이는-메소드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정규식에서-쓰이는-메소드"}},[t._v("#")]),t._v(" 정규식에서 쓰이는 메소드")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("exec")])]),t._v(" "),s("td",[t._v("대응되는 문자열을 찾는 RegExp 메소드. 정보를 가지고 있는 배열을 반환한다. 대응되는 문자열을 찾지 못했다면 null을 반환.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("test")])]),t._v(" "),s("td",[t._v("대응되는 문자열이 있는지 검사하는 RegExp 메소드. true 나 false를 반환.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("match")])]),t._v(" "),s("td",[t._v("대응되는 문자열을 찾는 RegExp 메소드. 정보를 가지고 있는 배열을 반환. 대응되는 문자열을 찾지 못했다면 null을 반환.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("search")])]),t._v(" "),s("td",[t._v("대응되는 문자열이 있는지 검사하는 String 메소드. 대응된 부분의 인덱스를 반환. 대응되는 문자열을 찾지 못했다면 -1을 반환.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("replace")])]),t._v(" "),s("td",[t._v("대응되는 문자열을 찾아 다른 문자열로 치환하는 String 메소드.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("split")])]),t._v(" "),s("td",[t._v("정규식 혹은 문자열로 대상 문자열을 나누어 배열로 반환하는 String 메소드.")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("card")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[JQKA]")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("card "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" card "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("card "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("card"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" Bet"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" Hold"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("ul",[s("li",[t._v("MDN, (Aug 12, 2020), https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D")]),t._v(" "),s("li",[t._v("FreeCodeCamp, (Aug 12, 2020), https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards")])])])}),[],!1,null,null,null);a.default=e.exports}}]);