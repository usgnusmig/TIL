# [TypeScript 가이드북](https://yamoo9.gitbook.io/typescript/) 을 공부하고 정리한 포스팅입니다.

# 타입의 종류

# 목차

- [primitive 타입](primitive-타입)

- [any 타입](any-타입)

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

## any 타입
