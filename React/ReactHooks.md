# React Hooks

## Reference

> [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)
> [우당탕탕 기술블로그](https://velog.io/@jminkyoung)

## 목차

- [useRef](#useRef)

- [useReducer](#useReducer)

- [useContext](#useContext)

---

## useRef

프로젝트에서 특정 DOM 을 선택해야 하는 상황
특정 엘리먼트의 크기를 가져와야 한다던지, 스크롤바 위치를가져오거나 설정해야된다던지, 또는 포커스를 설정해줘야된다던지
그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때에도 특정 DOM 에다 적용하기 때문에 DOM 을 선택해야 하는 상황에서 `ref`를 사용한다.

그리고 그 외 용도로 포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리할 수 있다.

> `useRef()` 를 사용 할 때
> 파라미터를 넣어주면 이 값이 `current` 값의 기본값이 되고
> 이 값을 수정 할때에는 `.current` 값을 수정하면 되고
> 조회 할 때에는 `.current` 를 조회하면 된다

---

## useReducer

`useReducer` 는 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
상태 업데이트 로직을 컴포넌트 바깥에 작성할 수도 있고, 다른 파일에 작성 후 불러와서 사용할 수 있다.

`reducer` 사용방법

`reducer` 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수다.

```js
const reducer = (state, action) => {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState;
};
```

`reducer`에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다.

`action`은 업데이트를 위한 정보를 가지고 있다.
주로 `type`값을 지는 객체 형태로 사용되지만, 꼭 따라야 할 규칙은 따로 없다.

예시

```js
// 1을 더하는 액션
{
  type: 'ADD_ONE'
}
// 1을 빼는 액션
{
  type: 'MINUS_ONE'
}
// input 값을 바꾸는 액션
{
  type: 'CHANGE_INPUT',
  key: 'email',
  value: 'tester@react.com'
}
// 새 할 일을 등록하는 액션
{
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'useReducer',
    done: false,
  }
}
```

`action` 객체의 형태는 자유이다.
`type` 값을 대문자와 `_`로 구성하는 관습이 있긴 하지만 꼭 따라야 할 필요는 없다.

`useReducer` 사용 방법

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

여기서 `state`는 컴포넌트에서 사용할 상태이고, `dispatch`는 액션을 발생시키는 함수이다.
이 함수는 다음과 같이 사용한다
`dispatch({ type: 'ADD_TODO'})`

그리고 `useReducer`에 넣는 첫번째 파라미터는 `reducer`함수이고 두번째 파라미터는 초기 상태이다.

`useReducer`로 카운터를 구현한다면?

```js
import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "ADD_ONE") {
    return state + 1;
  }
  if (action.type === "MINUS_ONE") {
    return state - 1;
  }
  return state;
};

const Conuter = () => {
  const [number, dispatch] = useReducer(reducer, 0);

  const onAdd = () => {
    dispatch({ type: "ADD_ONE" });
  };

  const onMinus = () => {
    dispatch({ type: "MINUS_ONE" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onAdd}>+1</button>
      <button onClick={onMinus}>-1</button>
    </div>
  );
};

export default Conter;
```

---

## useContext

`useContext`는 React에 존재하는 `Context`를 편하게 사용할 수 있도록 해준다.

`Context`란?

> 데이터를 전달할 때 `Props` 없이 `Context`를 이용해 공유한다.

`context API`를 사용하기 위해서는 `Propvider`, `Cosumer`, `createContext` 이 세가지 개념을 알아야 한다.

- `Provider`: 생성한 `context`를 하위 컴포넌트에게 전달
- `Cosumer`: `context`의 변화를 감시하는 컴포넌트
- `createContext`: `context` 객체를 생성

### Context 에제

```js
// App.js

import React, { createContext } from "react";
import Children from "./Children";

//AppContext 객체를 생성한다.
export const AppContext = createContext();

const App = () => {
  const user = {
    name: "KimSungsu",
    Age: 28,
  };

  return (
    <>
      <AppContext.Provider value={user}>
        <div>
          <Children />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
```

```js
// Children.js

import React from "react";
import { AppContext } from "./App";

const Children = () => {
  return (
    <AppContext.Consumer>
      {
        (user = (
          <>
            <h3>AppContext name은 {user.name}</h3>
            <h3>AppContext age는 {user.age}</h3>
          </>
        ))
      }
    </AppContext.Consumer>
  );
};

export default Children;
```

예제에서는 하나의 컴포넌트에서만 context를 사용했지만 코드가 늘어나면 여러 컴포넌트에서 사용할 때 코드가 지저분해지는 문제가 발생될 것이다.

### useContext 를 적용하면

```js
import React, { useContext } from "react";
import { AppContext } from "./App";

const Children = () => {
  // useContext를 이용해 따로 불러온다.
  const user = useContext(AppContext);

  return (
    <>
      <h3>AppContext name은 {user.name}</h3>
      <h3>AppContext age는 {user.age}</h3>
    </>
  );
};
```

App.js 에서 Context를 생성하고 Provuder를 통해 전달하는 코드는 그대로지만
Children.js에서 `AppContext`를 사용하는 과정중 `<AppContext.Consumer>` 같은 코드를 사용하지 않고 `const user = useContext(AppContext)`로 Context를 불러와 바로 사용 가능하다.
