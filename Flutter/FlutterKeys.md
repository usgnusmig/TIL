# Flutter Widget

## 꼭 알아야 할 위젯 4개

> - 글자 위젯
> - 이미지 위젯
> - 아이콘 위젯
> - 박스 위젯
>
> 거의 모든 앱은 이 4가지로 구성되어있다.

## Text

`Text('hello')`

## Image

이미지 파일을 `assets` 폴더에 넣고, `pubspec.yaml`에 등록해야 한다

> `pubspec.yaml ? ` 앱 만들때 필요한 모든 자료들을 정리한 파일
> `pubspec.yaml`중간 `flutter:` 하단에 한번 들여쓰기 후 `- assets/`를 추가한다
> `assets` 폴더 내에 있는 모든 파일을 사용하겠다는 뜻

`Image.asset('assets/image.png')`

## Icon

아이콘 이름은 [플러터 홈페이지](https://api.flutter.dev/flutter/material/Icons-class.html)에서 확인 가능

`Icon(Icons.아이콘이름)`

## Box

`Container()` 또는 `SizedBox()` 둘중 하나 사용 가능

스타일 설정은 파라미터로 스타일명: 값 을 주면 되고, 위치는 부모로부터 결정된다.

```dart
MaterialApp(
      home: Center(
          child: Container( width: 50, height: 50, color: Colors.blue )
      )
    );
<!-- Center() : 자식 요소를 정 중앙에 배치한다. -->
```

> Flutter의 단위
> Flutter의 모든 단위는 LP(Logical Pixel)라고 부르는데 px로 넣지 않는 이유는 기기마다 픽셀의 절대적인 크기가 다르기 때문이다.
>
> 어떤 폰은 10cm크기의 폰에 500개의 픽셀을 넣는 경우도 있고 2000개를 넣는 경우도 있으므로 기기마다 50px이 다르게 보인다.
> 근데 LP는 그냥 현실에서 쓰는 cm, inch 이런 단위랑 똑같다고 보면 된다.
> 우리가 눈으로 보는 절대적인 수치다.
> 1cm는 38LP 이고 `width : 50`이면 1.2cm 정도 된다.

## `Material()`

구글에서 제공하는 Meterial 테마를 사용하는 구글 느낌위젯

> 커스텀 위젯을 만들어서 사용할 땐 `Material` 위젯을 사용하면 된다.

## `Cupertino~~()`

[아이폰 느낌 위젯](https://docs.flutter.dev/development/ui/widgets/cupertino)

## Scaffold

화면을 상,중,하로 나눠주는 위젯

```dart
<!-- 예시 -->
home: Center(
          child: Scaffold(
            appBar: AppBar(),
            body: Container(),
            bottomNavigationBar: BottomAppBar(),
          )
```

## Row

여러 위젯을 가로로 정렬

`Row( children: [] )`

```dart
<!-- 예시 -->
home: Center(
          child: Scaffold(
            body: Row(
              children: [
                Icon(Icons.star),
                Icon(Icons.star),
                Icon(Icons.star),
              ]
            ),
          )
```

## Column

여러 위젯을 세로로 정렬

`Column( children: [] )`

```dart
<!-- 예시 -->
home: Center(
          child: Scaffold(
            body: Column(
              children: [
                Icon(Icons.star),
                Icon(Icons.star),
                Icon(Icons.star),
              ]
            ),
          )
```

### Row, Column 위젯 정렬

`mainAxisAlignment` 위젯을 사용해 가운데 정렬이 가능하다.
`mainAxisAlignment: MainAxisAlignment.center`
`center` 외에 다른 설정이 있고 `display: flex` 와 유사하다.

```dart
    return MaterialApp(
      home: Center(
          child: Scaffold(
            body: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.star),
                Icon(Icons.star),
                Icon(Icons.star)
              ]
            )
        ),
      )
    );
```
