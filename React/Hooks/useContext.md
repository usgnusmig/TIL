# useContext

## Reference

> [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)
>
> [우당탕탕 기술블로그](https://velog.io/@jminkyoung)

---

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
Children.js에서 `AppContext`를 사용하는 과정중 `<AppContext.Consumer>` 같은 코드를 사용하지 않고
`const user = useContext(AppContext)`로 Context를 불러와 바로 사용 가능하다.
