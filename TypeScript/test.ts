//명시적으로 number타입을 설정
let typeNum: number = 123456;

//명시적으로 string타입을 설정
let typeStr: string = "string";

//명시적으로 boolean타입을 설정
let typeBool: boolean = true;

//명시적으로 any타입 지정
let explicit: any = true;

explicit = "string";
explicit = 12345;

//암시적으로 any타입 지정
let implicit;

implicit = "str";
implicit = false;

let members = ["name1", "name2", "name3"];

enum Team {
  Manager,
  Planner,
  Developer,
  Designer,
}

//////////////////////////////////////////////////
// 01. Sizes 이넘 데이터를 정의한 후
//     xsmall, small, medium, large, xlarge
//     를 멤버로 설정해봅니다.
//////////////////////////////////////////////////
enum Sizes {
  xsmall = 100,
  small,
  medium,
  large,
  xlarge,
}
console.log(Sizes);

//////////////////////////////////////////////////
// 02. Sizes 이넘 데이터에 값을 할당해봅니다.
//     할당된 값을 통해 멤버의 키워드를 출력해보세요.
//////////////////////////////////////////////////

console.log(Sizes.large);
console.log(Sizes[101]);

//////////////////////////////////////////////////
// 함수 매개변수로 적절한 데이터 타입을 설정해봅니다.
//////////////////////////////////////////////////

function first(o: number[]) {
  return o[0];
}

function nth(o: number[], n: number) {
  return o[n];
}

function last(o: any[]) {
  return o[o.length - 1];
}

const numbers: any[] = ["one", "double", 3, () => console.log("라스트 넘버")];

console.log(first(numbers));
console.log(nth(numbers, 2));
console.log(last(numbers)());

//////////////////////////////////////////////////
// 함수 반환값의 적절한 타입을 지정해보세요.
//////////////////////////////////////////////////

function setStyle(el: HTMLElement, prop: string, value: any): void {
  el.style[prop] = value;
}

function getStyle(el: HTMLElement, prop: string): HTMLElement {
  return el.style[prop];
}

setStyle(document.body, "background", "#9c1e04");

console.log(getStyle(document.body, "background-color"));

let y9: {
  version: string;
  each: () => void;
  map: () => void;
  extend: () => void;
  [propName: string]: any;
};

y9 = {
  version: "1.0.0",
  each() {},
  map() {},
  extend() {},
};

console.log(y9);

y9.filter = () => {};
y9.slice = () => {};

//////////////////////////////////////////////////
// 2개의 변수를 모두 허용하는 타입을 정의해보세요.
//////////////////////////////////////////////////

type operation = {
  title: string;
  price: string;
  desc: string;
  category: string;
  platform: string;
};

let heroGame_A: operation = {
  title: "DC 언체인드",
  price: "인앱 구매 제공",
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: operation = {
  title: "MARVEL 퓨처파이트",
  price: "",
  desc: "마블 유니버스 히어로와 함께하는 대규모 블록버스터 액션 RPG!",
  category: "롤플레잉",
  platform: "모바일",
};
