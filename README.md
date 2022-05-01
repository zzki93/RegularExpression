# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색
- 문자 대체
- 문자 추출

## 테스트 사이트 

www.regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp('표현','옵션')
new RegExp('[a-z]','gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```

```js
const str = `
010-1234-5678
therlaqudrms12@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The Lorem ipsum dolor sit amet, consectetur adipiscing elit.
abbcccdddd
the difference
`

// const regexp = new RegExp('the','gi')
const regexp =/the/gi  
//the를 배열형태로 반환하고 g(다중선택) i(대문자도 포함) 
console.log(str.match(regexp))
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일지(global)
i | 영어 대소문자를 구분 않고 일치(ignore)
m | 여러 줄 일치(multiple line)

## 패턴

패턴 | 설명
--|--
^ab | 줄 시작에 있는 ab와 일치
ab$ | 줄 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a\|b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
a{n} | a가 n번 반복되는 것과 일치
a{n,} | a가 n번 이상 반복되는 것과 일치
a{n,m} | a가 n번 이상 m번 이하 반복되는 것과 일치

[abc] | a 또는 b 또는 c
[a-z] | a부터 z까지의 문자구간에 일치(소문자)
[A-Z] | A부터 Z까지 문자구간에 일치(대문자)
[0-9] | 0부터 9사이의 문자구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자구간에 일치

\w | 63개 문자(영문 52 + 숫자 10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계
\d | 숫자에 일치
\s | 공백에 일치

(?=) | 앞쪽 일치
(?<=) | 뒤쪽 일치