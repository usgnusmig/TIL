# StyledComponents 참고사항

---

## 패키지 설치

```bash
npm i styled-components
```

## Global Style 지정하기

별도 컴포넌트를 만들 필요 없이 `App.js` 에서 만들 수 있다.

```js
import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

...

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Component1 />
      <Component2 />
    </Fragment>
  )
}
```

전역으로 font-family 설정 가능

```js
const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
    font-family: "Noto Sans KR", sans-serif !important;
  }
`;
```

---

## 동적 선택자 사용

```js
const Button = styled.button`
  background-color: black;

  &:hover {
    background-color: white;
  }
`;
```

---

## props로 값 전달받기

```js
const button = styled.button`
  background-color: ${(props) => props.color || "salmon"};
`;

const App = () => {
  return (
    <div>
      <Button color>버튼</Button>
      <Button color={"black"}>버튼</Button>
    </div>
  );
};
```

---

## animation 사용하기

animation을 사용하려면 `props`를 이용하면 된다.

```js
import React from "react";
import styled, { keyframes } from "styled-components";

const BoxFade = keyframes`
from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BoxStyle = styled.div`
  padding: 1rem;
  max-width: 50rem;
  width: 90%;
  margin: 2rem auto;
  background-color: #fafafa;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  animation: ${BoxFade} 1s ease-out forwards;
`;
```

---

## 참고 링크

[너드팩토리님 블로그](https://blog.nerdfactory.ai/2019/10/25/react-styled-components.html)

[Seungho Lee님 블로그](https://medium.com/@shlee1353)
