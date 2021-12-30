# [TypeScript 가이드북](https://yamoo9.gitbook.io/typescript/)과[TypeScript 핸드북](https://typescript-kr.github.io/) 을 공부하고 정리한 포스팅입니다.

# 타입의 종류

# 목차

- [primitive 타입](#primitive-타입)

- [any 타입](#any-타입)

- [array 타입](#array-타입)

- [tuple 타입](#tuple-타입)

- [enum 타입](#enum-타입)

- [function 타입](#function-타입)

- [union 타입](#union-타입)

- [void 타입](#void-타입)

- [함수식](#함수식)

- [object 타입](#object-타입)

- [null undefined 타입](#null-undefined-타입)

- [never 타입](#never-타입)

- [사용자 정의 타입](#사용자-정의-타입)

- [타입 어설션](#타입-어설션)

---

## primitive 타입

원시 데이터 타입 `number`, `string`, `boolean`을 명시적으로 설정한 변수 선언은 다음과 같이 작성한다.

```ts
//명시적으로 number타입을 설정
let typeNum: number = 123456;

//명시적으로 string타입을 설정
let typeStr: string = "string";

//명시적으로 boolean타입을 설정
let typeBool: boolean = true;
```

설정된 데이터 타입이 아닌 다른 타입을 할당하려 할 경우 TypeScript 컴파일 과정에서 오류 메시지를 출력해 사용자에게 알린다.

---

## any 타입

TypeScript는 명시적으로 데이터 유형을 설정해 사용하는 정적형 지정 언어로 타입을 지정해 사용하는 것이 권장된다.

하지만 개발 시 어떤 타입을 할당해야 할지 알지 못하는 경우(외부 라이브러리나 동적 콘텐츠를 사용할 경우)가 있을 수 있다.
이 경우 어떤 타입도 할당 가능하도록 `any`를 설정할 수 있다.
JavaScript는 기본적으로 변수에 `any`가 할당된 것과 같다.

```ts
//명시적으로 any타입 지정
let id: any = 123467;

//any 유형이므로 어떤 유형도 할당 가능
id = "string";
```

변수 선언과 초기화 과정에서 값을 할당하지 않으면 암시적으로 `any` 타입이 지정된다.

```ts
let product;

product = 123456;
product = "string";
```

---

## array 타입

명시적 타입 지정없이 코드를 작성하면 TypeScript는 컴파일 과정에서 오류를 출력하한다.

```ts
let members = ["name1", "name2", "name3"];

// [오류]
// [ts] 'number[]' 형식은 'string[]' 형식에 할당할 수 없습니다.
//      'number' 형식은 'string' 형식에 할당할 수 없습니다.
// let members: string[]

members = [9, 13, 26];
```

오류가 발생한 이유는 `members` 변수에 설정된 데이터 타입이 `string[]`이기 때문이다.
`string` 타입만으로 아이템이 채워진 초기 배열과 달리 number 타입을 할당하는 구문은 number 타입으로 데이터를 채워 문제가 된다고 경고한다.

```ts
let members: string[] = ["이름1", "이름2", "이름3"];
```

만약 복합적으로 어떤 한 데이터 타입도 아이템으로 설정할 수 있는 배열이 필요하다면 다음과 같이 명시적으로 타입을 선언할 수 있다.

```ts
let members: nay[] = [{ name: "name" }, "name2", [1, 2, 3]];
```

`any[]` 는 배열 타입을 명시적으로 선언한것이므로 배열이 아닌 다른 데이터는 할당될 수 없다.
다른 타입을 할당하면 오류가 출력된다.

```ts
// [오류]
// [ts] '209' 형식은 'any[]' 형식에 할당할 수 없습니다.
// let members: any[]
members = 209;
```

TypeScript에서 배열 타입 할당 조건을 명시적으로 선언하는 방법

```ts
// 숫자만 허용
let num: number[] = [100, 230, 356];

// 문자열만 허용
let str: string[] = ["str", "문자"];

// boolean만 허용
let bool: boolean[] = [true, false, true];

// 모든 데이터타입 허용
let any: any[] = [20, "str", false];

// 특정 데이터 타입만 아이템으로 허용
let selects: (number | string)[] = [200, "string"];
```

---

## tuple 타입

`tuple`은 JavaScript에서 지원하지 않는 데이터 타입이지만, TypeScript에서는 배열 타입을 보다 특별한 형태로 사용할 수 있는 `tuple` 타입을 지원한다.
명시적으로 지정된 형식에 따라 아이템 순서를 설정해야 되고, 추가되는 아이템 또한 `tuple`에 명시된 타입만 사용 가능하다.

```ts
let book__name_price: [string, number] = ["카밍 시그널", 13320];

// [오류]
// [ts] '[number, string]' 형식은 '[string, number]' 형식에 할당할 수 없습니다.
//      'number' 형식은 'string' 형식에 할당할 수 없습니다.
// let book__name_price: [string, number]
book__name_price = [13320, "카밍 시그널"];

// [오류]
// [ts] 'false' 형식의 인수는 'string | number' 형식의 매개 변수에 할당될 수 없습니다.
book__name_price.push(false);
```

객체, 불리언 데이터 타입 순으로 아이템을 설정하는 터플

```ts
let olimpic_newgame: [{ name: string; type: string }, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
```

---

## enum 타입

TypeScript 는 `enum` 열거형 데이터 타입을 지원한다.
멤버라 불리는 명명된 값의 집합을 이루는 자료형으로
기억하기 어려운 숫자대신 친숙한 이름으로 접근/ 사용하기 위해 활용할 수 있다.

열거된 각 멤버는 별도의 값이 설정되지 않은 경우 기본적으로 `0`부터 시작한다.

```ts
enum Team {
  Manager, // 0
  Planner, // 1
  Developer, // 2
  Designer, // 3
}

let sungsu: number = Team.Designer; // (enum member) Team.Designer = 3
```

`enum`에 설정된 아이템에 값을 할당할 수도 있다.
값이 할당되지 않은 아이템은 이전 아이템 값에 +1 된 값으로 설정된다

```ts
enum Team {
  Manager = 101,
  Planner = 208,
  Developer = 304,
  Designer, //304 + 1
}

let sungsu: number = Team.Designer; // (enum member) Team.Designer = 304
```

`enum` 타입의 편리한 기능으로 숫자 값을 통해 `enum` 값의 멤버 이름을 도출할 수 있다는 점이다.

```ts
let role: string = Team[304]; // 'Developer'
```

`enum`은 다음과 같은 JavaScript 코드로 컴파일 된다.
`enum` 데이터 코드는 멤버는 숫자 또는 데이터 값을 속성으로 하는 객체를 생성하는 코드로 변환된다.

```js
var Team;
(function (Team) {
  Team[(Team["Manager"] = 101)] = "Manager";
  Team[(Team["Planner"] = 208)] = "Planner";
  Team[(Team["Developer"] = 302)] = "Developer";
  Team[(Team["Designer"] = 303)] = "Designer";
})(Team || (Team = {}));

var yamoo9 = Team.Manager;
var sarha = Team.Designer;
```

---

## function 타입

다음 코드는 JavaScript에서는 아무 문제가 없지만 `tsconfig.json`에 설정된
`noImplicitAny` 설정값이 `true`일 경우, 명시적으로 타입설정을 하지 않아 오류가 출력된다.

```js
// [오류]
// [ts] 'id' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.
// (parameter) id: any
// [ts] 'name' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.
// (parameter) name: any
function setInfo(id, name) {
  return { id, name };
}

let product_one = setInfo(120912, "스노우보드");
```

오류 메시지에서 말한 any 타입이 아닌, number, string 타입으로만 인자를 전달 받으려면 매개변수에 다음과 같이 설정해야 한다.

```ts
function setInfo(id: number, name: string) {
  return { id, name };
}

let product_one = setInfo(120912, "스노우보드");
```

---

## union 타입

`id` 매개변수에 설정 가능한 타입을 `number`, `string` 모두 가능하게 하려면 파이프(`|`)를 사용하여 설정한다.
이를 유니온(union) 타입이라고 부른다.

```ts
function setInfo(id: number | string, name: string) {
  return { id, name };
}
```

---

## void 타입

`void`는 결과 값을 반환하지 않는 함수에 설정한다.
반면 결과 값을 반환하는 함수의 경우 명시적으로 반환 값의 타입을 기술할 수 있다.

```ts
// 리턴 값 타입이 명시적으로 설정되지 않는 함수
function assignClass(name: string): void {
  document.documentElement.classList.add(name);
}

// 리턴 값 타입이 숫자인 함수
function factorial(n: number): number {
  if (n < 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 리턴 값 타입이 문자인 경우
function repeat(text: string, count: number = 1): string {
  let result: string = "";
  while (count--) {
    result += text;
  }
  return result;
}
```

`void`는 `undefined`와 같다.
명시적으로 반환 값을 설정하지 않는 함수는 `undefined`를 반환하기 때문에 TypeScript에서는 `void`를 명시한다.

---

## 함수식

변수에 함수 값을 할당하는 식(Expression)은 컴파일 과정에서 오류를 발생시키지는 않는다.

```ts
let assignClass = function (name) {
  document.documentElement.classList.add(name);
};
```

하지만 보다 명시적으로 함수에 설정 가능한 타입을 정의하고자 한다면 다음과 같이 작성할 수 있다.

```ts
// 변수에 함수 매개변수, 리턴 타입에 대한 명시적 설정
let assignClass: (n: string) => void;

// 변수에 함수 값 할당
assignClass = function (name) {
  document.documentElement.classList.add(name);
};
```

변수에 명시적 타입 설정과 함수 값 할당 구문을 별도로 나누지 않고 한번에 정의할 수도 있다.

```ts
let factorial: (n: number) => number = function (n) {
  if (n < 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
```

ES6 화살표 함수 식을 사용하면 다음과 같이 기술할 수도 있다.

```ts
let factorial: (n: number) => number = (n) => {
  if (n < 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
```

문이 아닌 식으로 화삺표 함수를 활용하면 다음과 같이 작성해도 결과는 동일하다.
하지만 읽기는 불편하다

```ts
let factorial: (n: number) => number = (n) =>
  n < 0 ? 0 : n === 1 ? 1 : n * factorial(n - 1);
```

---

## object 타입

TypeScript에서는 변수에 초기 설정된 값을 암시적으로 할당 가능한 데이터 타입으로 설정 하기에 초기 설정된 값과 다른 형대로 할당될 경우 다음과 같은 오류를 출력한다.

```ts
let Dom = {
  version: "0.0.1",
  el() {},
  css() {},
};

// [오류]
// [ts]
// '{ append(): void; }' 형식은 '{ version: string; el(): void; css(): void; }' 형식에 할당할 수 없습니다.
//   객체 리터럴은 알려진 속성만 지정할 수 있으며 '{ version: string; el(): void; css(): void; }' 형식에 'append'이(가) 없습니다.
// (method) append(): void
Dom = {
  append() {},
};
```

객체 각 속성별 타입을 명시하려면 다음과 같이 코드를 작성할 수 있다.

```ts
let Dom: { version: string; el: () => void; css: () => void };

Dom = {
  version: "0.0.1",
  el() {},
  css() {},
};

//또는

let Dom: { version: string; el: () => void; css: () => void } = {
  version: "0.0.1",
  el() {},
  css() {},
};
```

하지만 타입으로 설정되지 않은 객체의 속성을 새롭게 추가할 경우 다음과 같은 오류가 출력된다.

```ts
// [오류]
// [ts] '{ version: string; el: () => void; css: () => void; }' 형식에 'each' 속성이 없습니다.
// any
Dom.each = function () {};
```

새롭게 추가할 `each` 속성을 타입에 추가하면 문제가 해결되겠지만, 매번 새로운 속성을 추가할 때마다 타입을 지정하는것은 매우 번거롭다.
새 속성을 추가해도 오류 메세지를 출력하지 않게 하려면 `[propName: String]: any`를 사용할 수 있다.

```ts
let Dom: {
  version: string;
  el: () => void;
  css: () => void;
  [propName: string]: any;
};

Dom = {
  version: "0.0.1",
  el() {},
  css() {},
};

Dom.each = function () {};
Dom.map = function () {};
Dom.filter = function () {};
```

---

## null undefined 타입

JavaScript에서 `null`, `undefined`는 데이터 타입이자 하나의 값이다.
TypeScript에서도 하나의 타입으로 처리되며 다음과 같이 사용 가능하다.

```ts
let nullable: null = null;
let undefiledable: undefined = undefined;
```

하지만 `null`로 명시적 타입이 설정된 변수에 `null`이 아닌 값이 할당되면 다음과 같은 오류를 출력한다.

```ts
// [오류]
// [ts] 'undefined' 형식은 'null' 형식에 할당할 수 없습니다.
// let nullable: null
nullable = undefined;
```

이처럼 엄격하게 오류를 출력하는 이유는 `tsconfig.json`에 `"strictNullChecks"` 값이 `true`로 설정되 있고
다른 모든 데이터 타입 또한 `null`, `undefined`를 할당받을 수 없다.

이 문제를 해결하려면 `any` 또는 `union` 타입을 사용해야 하고,
`any`타입을 사용하면 특정 타입을 사용하는것이 아니기 때문에 `union` 타입을 사용하는것이 적절하다.

```ts
let name: string | null = null;

name = "sungsu";
```

만약 코드를 작성할 때 `null`, `undefined`를 항상 서브타입으로 할당 가능하게 하려면
`tsconfig.json` 설정에서 `"strictNullChecks"` 값을 `false`로 설정하면 된다.

```json
// tsconfig.json
"strictNullChecks": false,
```

---

## never 타입

`never` 타입은 일반적으로 함수의 리턴 타입으로 사용된다.
함수의 리턴 타입으로 `never`가 사용될 경우 항상 오류를 출력하거나 리턴값을 절대 내보내지 않음을 의미한다.
이는 무한 루프(loop)에 빠지는 것과 같다.

```ts
// 항상 오류 발생
function invalid(message: string): never {
  throw new Error(message);
}

// never 타입을 결과 추론(Inferred)
function fail() {
  return invalid("실패");
}

// 무한 루프
function infiniteAnimate(): never {
  while (true) {
    infiniteAnimate();
  }
}
```

`never`타입을 지정한 변수에 `never`가 아닌 타입은 할당할 수 없다.

```ts
let never_type: never;

// 오류 발생: 숫자 값을 never 타입 변수에 할당할 수 없습니다.
never_type = 99;

// 함수의 반환 값이 never 타입 이기 때문에 오류가 발생하지 않습니다.
```

---

## 사용자 정의 타입

복잡한 타입을 매번 설정하는것은 상당히 번거로운 작업이다.
아래 예시를 보면 매우 복잡하다.

```ts
let Dom: {
  version: string;
  el: (selector: string) => void;
  css: (prop: string) => void;
} = {
  version: "0.0.1",
  el() {},
  css() {},
};

let y9: {
  version: string;
  el: (selector: string) => void;
  css: (prop: string) => void;
} = {
  version: "0.0.2",
  el() {},
  css() {},
};
```

이런 경우 복잡한 타입을 사용자 정의 해 재사용하기 용이하도록 TypeScript는 지원한다.
타입 별칭(Type Alias)을 정의하면 `type`키워드를 사용한다.

```ts
// 사용자 정의 타입 operation 정의
// 타입 별칭(Type Alias)
type operation = {
  data: number[];
  output: (num: number) => number[];
};

// 사용자 정의 타입 operation 적용 예시
let sum: operation = {
  data: [10, 30, 50],
  output(num) {
    return this.data.map((n) => n + num);
  },
};

let multiply: operation = {
  data: [110, 230, 870, 213],
  output(num) {
    return this.data.map((n) => n * num);
  },
};
```

---

## 타입 어설션

TypeScript 프로그래밍을 하다보면 개발자가 TypeScript보다 값에 대해 더 잘 알고 있을 때가 있다.
이런 경우는 어떤 엔티티의 실제 타입이 현재 타입보다 구체적일 때 발생한다.
**타입 어설션(단언, Assertion)**은 컴파일러에게 -"날 믿어, 난 내가 뭘 하고 있는지 알아"- 라고 말하는 방법이다.

타입 단언은 다른 언어의 타입 변환(형 변환)과 유사하지만, 다른 특별한 검사를 하거나 데이터를 재구성하지는 않는다.

이는 런타임에 영향을 미치지 않고, 온전히 컴파일러만 이를 사용한다.

타입 스크립트는 개발자가 필요한 어떤 검사를 수행했다고 인지한다.

#### 타입 어설션을 사용하는 2가지 방법

###### 앵글 브라켓(angle-bracket, `<>`)문법

```ts
let assertion: any = "타입 어설션은 '타입을 단언' 한다.";

// assertion 변수의 타입을 string으로 단언 처리
let assertion_count: number = (<string>assertion).length;
```

###### `as`문법

```ts
let assertion: any = "타입 어설션은 '타입을 단언' 한다.";

// assertion 변수의 타입을 string으로 단언 처리
let assertion_count: number = (assertion as string).length;
```

> 두 방법 모두 결과는 동일하나, JSX와 함께 사용하는 경우는 `as`문법만 허용된다.
