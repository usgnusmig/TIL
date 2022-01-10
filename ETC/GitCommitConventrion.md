# Git Commit Convention

git을 사용하다보면 커밋 메시지를 잘 쓰고싶다.
아직 프로젝트를 진행하거나 협업을 진행하진 않지만 언젠가 필요할 때가 있을테니
커밋 메시지 규칙을 알아보고 따라가보자.

## Reference

> [좋은 git commit 메시지를 위한 영어 사전 by Reid](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)
>
> [How to Write a Git Commit Message](https://cbea.ms/git-commit/)
>
> [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#)

---

## 커밋 메시지 규칙

#### 동사보다는 명사를 사용한다

동사를 명사화 시키는것보다 그 의미를 잘 표현하는 명사를 찾아 사용한다.

#### 관사는 사용하지 않는다

꼭 필요한 경우가 아니면 `a`,`an`,`the`는 사용하지 않는다.

#### 부정문 `Don't`를 사용한다.

A를 사용하지 마 라고 명령할 때는 Not use 가 아닌 Don't use를 사용한다.

```bash
Don't use spdy on node >= v10.0.0
Don't write to the persisted query cache until execution will begin.
Do not return list if there are too many crashes
```

#### 오타수정은 `Fix typo`라고만 하면 된다.

Correct misspelled text 같이 길게 작성하지 않아도 된다.

---

## 단어와 문법 목록

#### Fix

가장 자주 사용되는 커밋 로그중 하나. 보통 올바르지 않은 동작을 고친 경우 사용한다.

#### Fix A

> A를 수정한다.

```bash
Fix stat cache
```

#### Fix A in B

> B 의 A를 수정한다. 가장 자주 사용되는 패턴

```bash
Fix typo in index.js
```

#### ADD

> 코드나 테스트, 예제, 문서 등의 추가가 있을 때 사용한다.

#### Add A

> A를 추가한다.
>
> 추가하는 행위는 대부분 목표나 목적이 명시되기 때문에 이 패턴은 자주사용되지 않는다.

```bash
Add button
```

#### Add A to B

> B에 A를 추가했다.

```bash
Add DisplayName th ActivityIndicator
```

#### REMOVE

> 코드의 삭제가 있을 때 사용한다.
>
> `Crean`이나 `Eliminate`를 사용하기도 한다.
>
> 보통 A 앞에 `unnecessary`, `useless`, `unneeded`, `unused`, `duplicated`가 붙는 경우가 많다.

#### Remove A

> A를 삭제한다.

```bash
Remove fallback cache
Remove unused variable
```

#### USE

> 특별히 무언가를 사용해 구현하는 경우

#### REFACTOR

> 전면 수정이 있을 때 사용한다.

#### SIMPLIFY

> 복잡한 코드를 단순화 할 때 사용한다.
>
> `Refactor`의 성격이 강해 약한 수정의 경우 이용하면 좋다.

#### UPDATE

> 개정이나 버전 업데이트가 있을 때 사용한다.
>
> Fix와 다른점은 잘못된것을 바로잡는 것이 아니라는 점이다.
> 원래도 정상적으로 동작하고 있었지만 수정, 추가, 보완을 한다는 개념이다.
>
> 코드보다는 주로 문서나 리소스, 라이브러리등에 사용한다.

#### IMPROVE

> 향상이 있을 때 사용한다.
>
> 호환성, 테스트 커버리지, 성능, 검증 기능, 접근성 등 다양한 것들이 목적이 될 수 있다.

#### MAKE

> 기존 동작의 변경을 명시한다.
>
> A의 기능을 B 하게 만드는 개념으로 새롭게 뭔가를 만들었을 때는 Make 대신 Add 를 사용한다.

#### IMPLEMENT

> 코드가 추가된 정도보다 더 주목할 만한 구현체를 완성시켯을 때 사용한다.
>
> `Add`에 비해 더 큰 단위의 코드 추가에 사용되며, 모듈이나 클래스 등의 단위에 사용되기 때문에 특별히 목적을 부여해주지 않아도 되는 경우가 많다.

#### REVISE

> Update와 비슷하나 문서의 개정이 있을 때 주로 사용한다.

#### CORRECT

> 주로 문법의 오류나 타입의 변경 이름 변경등에 사용한다.

```bash
Correct grammatical error in BUILDING.md
Correct parameters, return types in crypto.md
```

#### ENSURE

> 무엇이 확실하게 보장받는다는 것을 명시한다.
> `if` 구문처럼 조건을 확실하게 주었을 때도 사용될 수 있다.

#### Ensure A

> A가 확실히 보장되도록 수정했다.

#### PREVENT

> 특정한 처리를 못하게 막는다.

#### AVOID

> `Prevent`는 못하게 막지만 `Avoid`는 회피한다.
>
> `if` 구문으로 특정한 동작을 제외시키는 경우도 사용할 수 있다.

#### MOVE

> 코드의 이동이 있을 때 사용한다.

#### RENAME

> 이름 변경이 있을 때 사용한다.

```bash
Rename node-report to report
```

#### Rename A to B

> A의 이름을 B로 바꾼다.

#### ALLOW

> Make와 비슷하지만 허용을 표현할 때 사용한다.

#### Allow A to B

> A가 B를 할 수 있도록 허용한다.

#### VERIFY

> 검증 코드를 넣을 때 주로 사용한다.

#### SET

> 변수 값을 변경하는 등의 작은 수정에 주로 사용한다.

#### PASS

> 파라미터를 넘기는 처리에 주로 사용한다.
