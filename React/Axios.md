# Axios로 API 연동하기

Axios는 Promise API를 활용하는 HTTP 비동기 통신 라이브러리다.

---

## Axios 다운로드

`npm i axios` 명령을 입력해 설치한 뒤 프로젝트에 `import` 해준다.

```js
import axios from "axios";
```

## Methods

> - [**Get**](#Get)
> - [**POST**](#POST)
> - [**PUT**](#PUT)
> - [**DELETE**](#DELETE)

#### Get

> 입력한 URL에 데이터를 요청한다.

```js
axios.get(url, [, config]);
```

#### POST

> 새로운 리소스를 생성(Craete)한다.

```js
axios.post(
  "url 주소",
  {
    data객체,
  },
  [, config]
);
```

#### DELETE

> 데이터를 제거한다.

```js
axios.delete(url, [, config]);
```

#### PUT

> 데이터를 갱신 수정한다.

```js
axios.put(url, [, data[, config]])
```
