# Disabled 설정 on/off 하기

인풋 박스를 사용하다 보면 조건부로 `disabled`처리를 하고 싶을 때가 있다.
그럴 땐 `useState`를 통해 관리하면 된다.

```js
const [invert, setInvert] = useState(flase);
const invertHandler = () => {setInvert((current) => !current)}
<div>
  <label>Input 1</label>
  <input disabled={invert} />

  <label>Input 2</label>
  <input disabled={!invert} />

  <button onClick={invertHandler}>Invert</button>
```

> [S-Log](https://s-log.netlify.app)
