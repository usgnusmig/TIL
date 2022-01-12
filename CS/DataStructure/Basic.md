# Data Structure (자료구조)

## 기본 자료 구조

> 자료구조(Data Structure)란 ?
>
> **자료에 효율적으로 접근하고 수정할 수 있도록 데이터를 구성하고 저장하는 방법**
>
> 자료구조는 저장되는 데이터 형태에 따라 선형 자료구조와 비선형 자료구조로 구분된다.
>
> - 선형 자료구조
>   - 데이터가 일렬로 나열되어 있다
>   - 자료구조 : array, linked list, stack, queue등..
> - 비선형 자료구조
>   - 데이터가 특정한 형태를 띄고 있다.
>   - 자료 구조 : tree, graph 등..

<details>
<summary>목차</summary>

- [Array (배열)](#array-배열)
- [Linked List (연결 리스트)](#linked-list-연결-리스트)
- [Stack (스택)](#stack-스택)
- [Queue (큐)](#queue-큐)
- [Tree (트리)](#tree-트리)
- [Binary Tree (이진 트리)](#binary-tree-이진-트리)
- [Graph (그래프)](#graph-그래프)
- [복잡도](#복잡도)

</details>

---

### Array(배열)

동일한 자료형의 데이터를 일렬로 나열한 자료구조이다.

- 선형 자료구조
- 데이터 접근이 용이하다.
  - 인덱스로 접근, Random-Accesee가능
- 데이터 삽입/ 삭제가 어렵다.
- 구조가 간단해 프로그램 작성이 쉽다.

`Java`

```java
// 선언 (Declaring Arrays)
int[] arrayOfInt;
String[] arrayOfString;

// 생성 (Creating Arrays)
arrayOfInt = new Int[100];
arrayOfString = new String[10];

// 초기화 (Initializing)
for (int = 0; i < arrayOfInt.length; i ++) {
  arrayOfInt[i] = i;
}
arrayOfString = new String[] {"hello", "world"};
String[] name = {"Stacy", "Tracey", "Dorothy"};
```

### Array 시간 복잡도, 공간 복잡도

- 데이터 조회: O(1)
- 데이터 삽입/ 삭제 하기: O(n)

---

### Linked List(연결 리스트)

각 노드가 데이터와 포인터를 가지고 일렬로 연결되어있는 방식이다.

- 선형 자료구조
- 데이터의 접근이 느리다.(링크를 타고 가서 찾아야 한다)
- 데이터의 삽입/ 삭제 연산이 용이하다.
- 포인터를 위한 추가 공간이 필요하다.

#### Linked List 시간 복잡도

- 데이터 조회 : O(n)
- 맨 앞 /뒤 데이터 삽입/삭제하기 : O(1) (SinglyLinkedList의 경우 맨 뒤의 데이터 삭제 연산은 O(n))
- 중간의 원하는 위치에 데이터 삽입/ 삭제하기 : O(n)(원하는 원소까지 데이터를 조회하는 과정이 있으므로 O(n) + O(1))

> **Array와 Linked List의 차이**
>
> - 데이터 접근 속도
>
>   - `Array` : 인덱스를 통한 Random Access를 지원하므로 시간 복잡도 O(1)로 빠르게 찾을 수 있다.
>   - `Linked List` : 순차 접근 방식을 사용하므로 시간 복잡도 O(n)이 걸린다.
>
> - 데이터 삽입 / 삭제 속도
>
>   - `Array` : 데이터를 중간이나 맨 앞에 삽입 / 삭제 하는 경우 `shift`가 필요하므로 데이터가 많을수록 비효율적이다.
>   - `Linked List` : 데이터 삽입 / 삭제마다 메모리 할당 / 해제가 일어나므로 시간 복잡도는 빠를지라도 시스템 콜(System Call)에 있어서 `Array`보다 시간이 더 걸린다.
>
> - 메모리 할당
>   - `Array` : 정적 메모리 할당 (Compile time)
>   - `Linked List` : 동적 메모리 할당 (Runtime)
>   - `Array`는 데이터 삽입시 모든 공간이 다 차면 새로운 메모리 공간이 필요하지만 `Linked List`는 동적으로 할당받을 수 있다
>
> **데이터 삽입 / 삭제가 빈번하다면 `Linked List`를 사용하는것이 좋고, 데이터 접근 속도가 중요하면 `Array`를 사용하는것이 좋다**

### Stack(스택)

- 선형 자료구조
- 삽입, 삭제 연산이 한 방향에서 이루어진다
- `LIFO`(Last In First Out) : 나중에 들어간 원소가 먼저 나오는 구조이다.

**용어**

- `top` : 스택에 데이터가 삽입될 위치

**주요 연산**

- `push` : 스택의 `top`에 원소 삽입
- `pop` : 스택의 `top`에 있는 원소 삭제 및 반환
- `peek` : 스택의 `top`에 있는 원소 반환

**시간복잡도 공간복잡도**

- 데이터 삽입 / 삭제 : O(1)
- `top`데이터 조회: O(1)
- 특정 데이터 조회 : O(n)

**활용**

- 시스템 스택(System Stack) / 실행시간 스택(Runtime Stack) : 프로그램의 함수 호출과 복귀에 따른 실행 순서 관리
- 인터럽트 루틴 처리
- 웹 브라우저 방문 기록 관리(뒤로가기)
- 실행 취소(undo)
- 수식의 후위 표기법(Postfix Notation)
- 수식의 괄호식 검사
- 계산기 검사
- 깊이 우선 탐색(DFS, Depth-First Serch)

> **프로그램의 함수 호출과 복귀에 따른 순서 관리는 다음과 같은 과정을 가진다**
>
> 1. 함수 호출이 발생하면 스택 프레임(Stack Frame)이 지역변수, 매개변수, 수행 후 복귀할 주소 등의 정보를 저장해 시스템 스택에 삽입한다.
>
> 2. 함수의 실행이 끝나면 시스템 스택의 `top`에 있는 `stack frame` 원소를 `pop`하고, `frame`에 저장되어 있던 복귀 주소를 확인하고 복귀한다.
>
> 3. 함수 호축 - 복귀에 따라 이 과정을 반복하고, 전체 프로그램 수행이 종료되면 시스템 스택은 공백 스택이 된다.
>
> 함수 호출은 가장 마지막에 호출된 함수가 가장 먼저 실행을 완료하고 복귀하는 후입 선출 구조이기 때문에 스택을 이용해 관리한다.

---

## 복잡도

**시간복잡도(Time Complexity)와 공간복잡도(Space Complexity)**

[Reference](https://yoongrammer.tistory.com/79)

알고리즘을 평가할 때 시간복잡도와 공간 복잡도를 사용한다.

- 시간복잡도 : 알고리즘의 수행 시간을 평가

- 공간 복잡도 : 알고리즘 수행에 필요한 메모리 양을 평가

주로 점근적 표기법 중 빅오 표기법을 이용해 나타나는데
이유는 최악의 경우에도 해당 알고리즘이 어떤 성능을 낼지 가늠해볼 수 있기 때문이다.

**시간복잡도(Time Complexity)**

수행 시간은 실행 환경에 따라 다르게 측정되기 때문에 기본 연산의 실행 횟수로 평가한다.

**기본 연산**

- 데이터 입출력 - copy, move ...
- 산술 연산 - add, multiply ...
- 제어 연산 - if, while ...

시간 복잡도는 3가지 경우로 나타낸다

1. 최선의 경우(Best Case)

   - 빅 오메가 표기법 사용
   - 최선의 시나리오로 최소 이만한 시간이 걸린다.

2. 최악의 경우(Wrost Case)

   - 빅 오 표기법 사용
   - 최악의 시나리오로 아무리 오래걸려도 이 시간보다 덜 걸린다.

3. 평균적인 경우(Average Case)
   - 빅 세타 표기법 사용
   - 평균 시간을 나타낸다.

Average Case를 가장 많이 사용할 것 같지만 알고리즘이 복잡해질수록 평균을 구하기 어려워져 Worst Cast로 알고리즘 성능을 파악한다.

시간 복잡도 계산과 표기는 reference를 참고하자
