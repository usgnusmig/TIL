# [TypeScript 가이드북](https://yamoo9.gitbook.io/typescript/) 을 공부하고 정리한 포스팅입니다.

# TypeScript를 사용하는 이유

# TypeScript란?

TypeScript는 JavaScript를 포함하는 Superset으로 브라우저, 운영체제에 상관없이 이용 가능한 오픈소스이고, JavaScript로 컴파일 되는 트랜스파일러(컴파일러) 이다.

---

## 목차

- [JavaScript vs TypeScript](#javascript-vs-typescript)

- [JavaScript Superset](#javascript-superset)

- [트랜스 파일러](#트랜스-파일러)

- [참고 기능](#참고-기능)

---

## JavaScript vs TypeScript

TypeScript는 코드 작성 과정에서 코드를 실시간으로 디버깅할 수 있다

#### JavaScript

작성된 함수 코드를 보면 TypeScript 코드보다 간결해보이지만, 함수에 전달할 각 인자의 타입을 모를경우 문제가 발생할 수 있다.

```js
function ellipsisText(text, limit, symbol = "...") {
  return `${String(text).slice(0, limit - 1)}${symbol}`;
}
```

함수 실행 예시 코드를 보면 문제가 발생했어도 오류를 표시하지 않는다.

```js
ellipsisText(100304040202, 30, 101);
// 결과 값: "100304040202101"
```

#### JavaScript + 유효성 검사

함수에서 오류를 안내하지 않으면 문제가 발생될 수 있으므로 다음과 같이 각 매개변수로 전달받은 값의 유형을 검사해 문제를 해결할 수 있으나
검사 과정을 직접 작성하는 것은 매우 번거롭고 불편하다.

```js
function ellipsisText(text, limit, sybol = "...") {
  if (typeof text !== "string")
    throw new Error("1번째 전달인자 유형은 문자여야 함");
  if (typeof limit !== "number")
    throw new Error("2번째 전달인자 유형은 숫자여야 함");
  if (typeof symbol !== "string")
    throw new Error("3번째 전달인자 유형은 문자여야 함");
  return `${text.slice(0, limit - 1)}${symbol}`;
}

ellipsisText(100304040202, 30, 101);
// Uncaught Error: 1번째 전달인자 유형은 문자여야 함
```

#### TypeScript

TypeScript로 작성된 코드는 앞서 작성한 JavaScript 함수보다 다소 복잡해보이지만, 작성 후 함수를 실행하면 컴파일 과정에서 실시간으로 타입을 검사하므로 디버깅이 쉽고 안정적이다.

```ts
function ellipsisText(
  text: string,
  limit: number,
  symbol: string = "..."
): string {
  return `${text.slice(0, limit - 1)}${symbol}`;
}

ellipsisText(10203010201, 30);

//Argument of type 'number' is not assignable to parameter of type 'string'.
```

## JavaScript Superset

TypeScript는 JavaScript, ECMAScript를 포함하는 수퍼셋으로 JavaScript 또는 ECMAScript에서 지원하지 않는 기능을 지원한다.

- TypeScript를 대표하는 기능들
  - 엄격한 타입 관리(Strongly Typed)
    - 컴파일 시점에 타입 검사
    - 에디터 확장시 실시간 타입 검사
  - 제너릭(Henerics)
    - 클래스나 함수가 사용될 때 타입 설정
  - 인터페이스 (Interface)
    - 타입 검사를 요구

## 트랜스 파일러

TypeScript 파일은 웹 브라우저에서 바로 해석될 수 없어서 브라우저에서 해석 가능한 언어인 JavaScript로 변경되어야 인식할 수 있다.
즉 TypeScript를 JavaScript로 변환해야 웹 브라우저가 처리할 수 있다.

그래서 TypeScript가 JavaScript로 출력되기에 컴파일러가 아닌, 트렌스파일러로 불린다. 이러한 언어는 메타언어(Meta Language)라고 부른다.

> app.ts -> tscapp.ts -> app.js

## 참고 기능

- 플레이그라운드
  - 온라인 상에서 TypeScript를 테스트 해보려면 플레이 그라운드를 통해 TypeScript 코드가 JavaScript 코드로 변환되는 결과를 실시간으로 확인할 수 있다.
    > [플레이그라운드](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)
