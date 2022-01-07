# useReducer

## Reference

> [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)
> [우당탕탕 기술블로그](https://velog.io/@jminkyoung)

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
