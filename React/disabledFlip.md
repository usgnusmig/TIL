# Disabled 설정 on/off 하기

인풋창을 사용하다 보면 특정 조건부로 `disabled`처리를 하고 싶다.
그럴 땐 `useState`를 통해 관리하면 된다.

```js
const [flipped, setFlipped] = useState(flase);
const flipHandler = () => {setFlipped((current) => !current)}
<div>
  <label>e-mail</label>
  <input disabled={flipped === true} />

  <label>password</label>
  <input disabled={flipped === false} />

  <button onClick={onFlip}>Flip</button>
```
