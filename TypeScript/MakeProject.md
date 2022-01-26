# TypeScript 기반 React 프로젝트 생성하기

## CRA로 생성하기

JavaScript 기반 프로젝트를 생성할때와 비슷하다

```bash
$ npx create-react-app [프로젝트 명] --template typescript
or
$ npx create-react-app [프로젝트 명] --typescript
```

## 기존 프로젝트에 TypeScript 추가하기

```
$ npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

여기서 `@types/`이 각각 package 이름 앞에 붙음으로서 `nodeJS`, `react`, `jest` 각각이 `TypeScript`의 문법을 적용받게 된다.

순수한 FE 프로젝트이면 `@types/node`는 설치하지 않아도 괜찮다.
test 코드를 만들지 않을 계획이면 `@types/jest`도 필요 없다.

이후 확장자가 .js인 파일들을 .tsx로 바꿔주면 기존 javascript 기반 react 프로젝트를 typescript 기반으로 바꿔줄

## redux 설치하기

컴포넌트간 이벤트 및 매개변수 처리를 쉽게 하기 위해선 `redux`가 필요하다.
TypeScript 버전의 `redux`를 설치하는 방법은 다음과 같다.

```
$ npm install redux react-redux @types/react-redux
```

`redux` 같은 경우에는 자체적으로 `TypeScript`가 지원되지 않기 때문에 `TypeScript` 버전 또한 따로 받아준다
