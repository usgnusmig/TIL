# [TypeScript 가이드북](https://yamoo9.gitbook.io/typescript/) 을 공부하고 정리한 포스팅입니다.

# 타입

<details>
<summary>목차</summary>

- [타입이란](#타입이란)

- [명시적 타입 설정](#명시적-타입-설정)

- [타입을 설정하는 이유](#타입을-설정하는-이유)

<details>

---

## 타입이란

```ts
let milk_chocolate = "밀크 초콜릿"; //String type
milk_chocolate = 2018; // Numner Type

/*
  오류 출력:
    [ts] '2018' 형식은 'string' 형식에 할당할 수 없습니다.
    let milk_chocolate: string
*/
```

TypeScript 오류를 살펴보면 초기 할당된 값의 타입이 String인데 반해 재할당 된 값의 타입이 Number 값인 것에 대해 오류를 안내한다.
TypeScript는 JavaScript와 달리 엄격하게 타입을 관리하는 언어이기 때문에 이와같은 오류를 출력한다.

```ts
let coffee; //any Type

coffee = "콜드브루";
coffee = 20212022;
```

반면 변수 선언만 있고 동시에 값을 할당하는 구문이 없는 경우 TypeScript는 타이 다른 값을 할당해도 오류를 출력하지 않는다.

선언된 `coffee` 변수를 `any`타입으로 처리하기 때문이디.

## 명시적 타입 설정

TypeScript는 변수를 선언할 때 타입을 명시적(Explicit)으로 할당할 수 있다.
TypeScript는 JavaScript를 포함하는 수퍼셋(Superset)이므로 JavaScript가 지원하는 데이터 타입을 모두 사용 가능하다.
뿐만 아니라 클래스, 인터페이스 등을 타입으로 설정할 수도 있다

- null
- undefined
- number
- string
- boolean
- array
- function
- object
- Symbol

`any` 타입을 사용한다면 굳이 TypeScript를 쓸 이유가 없다.
JavaScript는 기본이 `any` 타입을 사용하기 때문이다.
그러므로 TypeScript를 사용한다면 다음과 같이 타입을 명시적으로 설정하는 것을 권장한다.
타입을 지정하면 잘못된 타입이 할당 되었을 때 오류를 사용자에게 알려주므로 매우 유용하다.

```ts
let coffee: string;

coffee = "콜드브루";

coffee = 20202021;
/*
  [ts] '9120304123' 형식은 'string' 형식에 할당할 수 없습니다.
  let coffee_type: string
*/
```

## 타입을 설정하는 이유

각 차로에 제한을 두지 않으면 자유룝게 차로를 이용하므로 편하다.
하지만 자유로운 만큼 사고 발생의 확률 또한 커진다.
각 차로에 접근 가능한 차량에 제한을 둠에 따라 다소 제약이 따르긴 하지만 사고를 미연에 방지할 수 있다.

마찬가지로 타입 지정이 없다면 코드를 편하게 짤 수 있지만 작성한 코드에 문제가 발생할 확률이 높고, 타입을 지정하면 번거롭긴 하나 잘못된 것을 사전에 확인할 수 있다.
