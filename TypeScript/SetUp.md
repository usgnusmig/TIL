# [TypeScript 가이드북](https://yamoo9.gitbook.io/typescript/) 을 공부하고 정리한 포스팅입니다.

# TypeScript 설치 작업환경 구성/CLI

<details>
<summary>목차</summary>

- [TypeScript 환경 구성](#typescript-환경-구성)
- [컴파일 설정](#컴파일-설정)
- [IDE 에디터](#ide-에디터)
- [Google TypeScript Style](#google-typescript-style)
- [TSDX](#tsdx)

## </details>

## TypeScript 환경 구성

> TypeScript를 설치하려면 Node.js가 설치되어있어야 하고 NPM을 통해 모듈을 설치 및 관리할 수 있다.

> 모듈 설치는 글로벌(global), 로컬(local) 설치로 나뉘고 권장되는 방법은 로컬 설치다만, 다수의 프로젝트에서 TypeScript 사용이 요구된다면 편의상 글로벌 설치할 수 있다.

> Node.js 런타임 환경에서 TypeScript 사용할 경우 [ts-node](https://typestrong.org/ts-node/) 패키지 설치

```bash
# 글로벌 설치
# npm install --global typescript
$ npm i -g typescript

# 로컬 설치
# npm install --save-dev typescript
$ npm i -D typescript

```

## TypeScript CLI

`.ts` 파일에 작성된 코드를 컴파일하려면 `tsc` 명령을 사용한다.

```bash
# 명령어가 실행된 디렉토리 내 모든 *.ts 파일 컴파일
$ tsc

# 개별 파일 컴파일
$ tsc 파일.ts
```

#### ECMAScript Target

컴파일 코드 ECMAScript 버전 목표(`--target`, `-t`) 설정 (기본 값: `ES3`)

```bash
# tsc --target 'ES5'
$ tsc -t 'ES5'
```

#### ModuleType

컴파일시 모듈 유형(`--module`, `-m`) 설정 가능

```bash
# tsc --module 'es2015'
$ tsc -m 'es2015'
```

#### Output Directory

컴파일 될 아웃푹 디렉토리(`--outDir`)를 설정할 수 있다.

```bash
$ tsc --outDir './dist'
```

#### Output Filename

컴파일 될 아웃풋 파일 이름(`--outFile`)을 설정할 수 있다.

```bash
# 파일 이름 설정
$ tsc --outFile 'bundle.js'

# 디렉토리 + 파일 이름 설정
$ tsc --outFile './dist/bundle.js'
```

#### Watch

워치(관찰, 수정/저장 할 때마다 자동 컴파일, `--watch`, `-w`)를 설정할 수 있다.

```bash
# tsc --watch
$ tsc -w
```

#### Help

도움말(`--help`, `-h`)을 통해 상세한 사용법을 확인할 수 있다.

```bash
# tsc 도움말 출력
$ tsc -h

버전 4.1.2
문법: tsc [옵션] [파일...]

예시: tsc hello.ts
     tsc --outFile file.js file.ts
     tsc @args.txt
     tsc --build tsconfig.json

옵션:
 -h, --help                                  도움말 출력
 -w, --watch                                 인풋 파일 관찰
 --pretty                                    컬러/컨텍스트 사용 오류 메시지 스타일 설정(실험 기능)
 --all                                       모든 컴파일 옵션 출력
 -v, --version                               컴파일러 버전 출력
 --init                                      'tsconfig.json' 설정 파일 생성
 -p 파일 or 디렉토리, --project 파일 or 디렉토리    설정 파일의 경로 혹은 'tsconfig.json'이 있는 디렉토리에 프로젝트 컴파일
 -b, --build                                 오래된 경우, 하나 이상의 프로젝트 또는 해당 종속성 빌드
 -t 버전, --target 버전                        ES 버전 설정 ('ES3'(기본값),'ES5','ES2015','ES2016','ES2017','ES2018','ESNEXT')
 -m 모듈유형, --module 모듈유형                   모듈유형 명시 ('none','commonjs','amd','system','umd','es2015','ESNext')
 --lib                                       컴파일에 포함될 라이브러리 명시
                                             'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'es2018' 'es2019' 'es2020' 'esnext' 'dom' 'dom.iterable' 'webworker' 'webworker.importscripts' 'webworker.iterable' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'es2017.typedarrays' 'es2018.asyncgenerator' 'es2018.asynciterable' 'es2018.intl' 'es2018.promise' 'es2018.regexp' 'es2019.array' 'es2019.object' 'es2019.string' 'es2019.symbol' 'es2020.bigint' 'es2020.promise' 'es2020.sharedmemory' 'es2020.string' 'es2020.symbol.wellknown' 'es2020.intl' 'esnext.array' 'esnext.symbol' 'esnext.asynciterable' 'esnext.intl' 'esnext.bigint' 'esnext.string' 'esnext.promise' 'esnext.weakref'
 --allowJs                                   JavaScript 파일 컴파일 허용
 --jsx 종류                                   JSX 코드생성 명시: 'preserve', 'react-native', 'react'
 -d, --declaration                           '.dts' 파일 생성
 --sourceMap                                 '.map' 파일 생성
 --declarationMap                            해당하는 각 '.d.ts'파일에 대한 소스 맵을 생성
 --outFile 파일                               설정된 `*.ts` 파일들을 묶어 1개의 `js` 파일 생성
 --outDir 디렉토리                             아웃풋 디렉토리 구조 재설정
 --removeComments                            주석 제거
 --noEmit                                    아웃풋 출력하지 않음
 --strict                                    모든 엄격한 타입 검사 옵션을 활성화
 --noImplicitAny                             암시적인 'any' 타입일 경우, 식/선언에서 오류 발생
 --strictNullChecks                          엄격한 'null' 검사
 --strictFunctionTypes                       함수 타입 엄격 검사
 --strictPropertyInitialization              클래스 속성 초기화 엄격 검사
 --noImplicitThis                            'this' 참조가 암시적인 'any' 타입일 경우, 오류 발생
 --alwaysStrict                              strict 모드에서 구문 분석 후, 각 소스 파일에 "use strict" 출력
 --noUnusedLocals                            사용되지 않는 지역 변수가 있을 경우, 오류 발생
 --noUnusedParameters                        사용되지 않는 매개 변수가 있을 경우, 오류 발생
 --noImplicitReturns                         함수가 명시적으로 'return' 값을 반환하지 않을 경우, 오류 발생
 --noFallthroughCasesInSwitch                switch문에서 실패한 'case'에 대한 오류 발생
 --types                                     컴파일에 포함될 Type declaration 파일 포함
 --esModuleInterop                           네임스페이스 객체의 모든 불러오기에 대한 CommonJS, ES Modules 호환성 제공. ('암시적으로 allowSyntheticDefaultImports 설정')
 @<file>                                     명령어(Command Line)가 설정된 파일을 입력
```

---

## 컴파일 설정

#### `tsconfig.json`

매번 TypeScript 컴파일 명령어를 입력할 때마다 옵션을 추가하거나 제거하는것은 매우 귀찮고 불편하다.
명령어를 매번 입력하지 않고, 보다 쉽게 사용하려면 컴파일 설정 파일을 만들어서 사용하면 좋다.

`tsconfig.json` 파일이 있는 위치가 TypeScript 프로젝트의 루트 디렉토리로 설정된다. 이 파일은 프로젝트를 컴파일하는데 필요한 루트파일, 컴파일러 옵션을 설정할 수 있다.
TypeScript 프로젝트는 다음 방법 중 하나로 컴파일된다.

###### `tsconfig.json`을 사용할 경우

- 인풋 파일이 없는 `tsc` 명령일 경우, `tsconfig.json`에 설정된 모든 디렉토리를 체인해 컴파일 한다.
- 인풋 파일이 없는 `tsc` 명령일 경우, `-p` 옵션을 사용해 특정 디렉토리 내에 있는 `tsconfig.json` 또는 유효한 JSON 파일을 설정할 수 있다.

###### `tsconfig.json`을 사용하지 않을 경우

인풋 파일이 있는 `tsc <파일.ts>` 명령일 경우, `tsconfig.json` 파일은 무시딘다.

- `tsconfig.json` 파일에 설정된 컴파일 옵션보다 명령어가 우선된다.
  > 자세한 내용은 [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) 문서를 참고하자

#### `tsconfig.json` 생성

```bash
tsc --init
```

명령어를 통해 생성된 `tsconfig.json` 설정 코드는 다음과 같다.

> 컴파일러 옵션만 추가되어있고, 컴파일러 기본값을 사용할 경우, 각 항목을 주석처리한다.
> 옵션의 각 설정은 번역된 주석을 참고하고 컴파일 설정 가능한 모든 옵션은 [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)를 참고하자

```json
{
  "compilerOptions": {

    /* 기본 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    // "incremental": true,                   /* 증분 컴파일 활성화 */
    "target": "es5",                          /* ECMAScript 목표 버전 설정: 'ES3'(기본), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "esnext",                       /* 생성될 모듈 코드 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": ["dom", "dom.iterable", "esnext"], /* 컴파일 과정에 사용될 라이브러리 파일 설정 */
    "allowJs": true,                          /* JavaScript 파일 컴파일 허용 */
    // "checkJs": true,                       /* .js 파일 오류 리포트 설정 */
    "jsx": "react",                           /* 생성될 JSX 코드 설정: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* '.d.ts' 파일 생성 설정 */
    // "declarationMap": true,                /* 해당하는 각 '.d.ts'파일에 대한 소스 맵 생성 */
    // "sourceMap": true,                     /* 소스맵 '.map' 파일 생성 설정 */
    // "outFile": "./",                       /* 복수 파일을 묶어 하나의 파일로 출력 설정 */
    // "outDir": "./dist",                    /* 출력될 디렉토리 설정 */
    // "rootDir": "./",                       /* 입력 파일들의 루트 디렉토리 설정. --outDir 옵션을 사용해 출력 디렉토리 설정이 가능 */
    // "composite": true,                     /* 프로젝트 컴파일 활성화 */
    // "tsBuildInfoFile": "./",               /* 증분 컴파일 정보를 저장할 파일 지정 */
    // "removeComments": true,                /* 출력 시, 주석 제거 설정 */
    "noEmit": true,                           /* 출력 방출(emit) 유무 설정 */
    // "importHelpers": true,                 /* 'tslib'로부터 헬퍼를 호출할 지 설정 */
    // "downlevelIteration": true,            /* 'ES5' 혹은 'ES3' 타겟 설정 시 Iterables 'for-of', 'spread', 'destructuring' 완벽 지원 설정 */
    "isolatedModules": true,                  /* 각 파일을 별도 모듈로 변환 ('ts.transpileModule'과 유사) */

    /* 엄격한 유형 검사 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "strict": true,                           /* 모든 엄격한 유형 검사 옵션 활성화 */
    // "noImplicitAny": true,                 /* 명시적이지 않은 'any' 유형으로 표현식 및 선언 사용 시 오류 발생 */
    // "strictNullChecks": true,              /* 엄격한 null 검사 사용 */
    // "strictFunctionTypes": true,           /* 엄격한 함수 유형 검사 사용 */
    // "strictBindCallApply": true,           /* 엄격한 'bind', 'call', 'apply' 함수 메서드 사용 */
    // "strictPropertyInitialization": true,  /* 클래스에서 속성 초기화 엄격 검사 사용 */
    // "noImplicitThis": true,                /* 명시적이지 않은 'any'유형으로 'this' 표현식 사용 시 오류 발생 */
    // "alwaysStrict": true,                  /* 엄격모드에서 구문 분석 후, 각 소스 파일에 "use strict" 코드를 출력 */

    /* 추가 검사 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    // "noUnusedLocals": true,                /* 사용되지 않은 로컬이 있을 경우, 오류로 보고 */
    // "noUnusedParameters": true,            /* 사용되지 않은 매개변수가 있을 경우, 오류로 보고 */
    // "noImplicitReturns": true,             /* 함수가 값을 반환하지 않을 경우, 오류로 보고 */
    "noFallthroughCasesInSwitch": true,       /* switch 문 오류 유형에 대한 오류 보고 */
    // "noUncheckedIndexedAccess": true,      /* 인덱스 시그니처 결과에 'undefined' 포함 */

    /* 모듈 분석 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "moduleResolution": "node",               /* 모듈 분석 방법 설정: 'node' (Node.js) 또는 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* 절대 경로 모듈이 아닌, 모듈이 기본적으로 위치한 디렉토리 설정 (예: './modules-name') */
    // "paths": {},                           /* 'baseUrl'을 기준으로 상대 위치로 가져오기를 다시 매핑하는 항목 설정 */
    // "rootDirs": [],                        /* 런타임 시 프로젝트 구조를 나타내는 로트 디렉토리 목록 */
    // "typeRoots": [],                       /* 유형 정의를 포함할 디렉토리 목록 */
    // "types": [],                           /* 컴파일 시 포함될 유형 선언 파일 입력 */
    "allowSyntheticDefaultImports": true,     /* 기본 출력(default export)이 없는 모듈로부터 기본 호출을 허용 (이 코드는 단지 유형 검사만 수행) */
    "esModuleInterop": true                   /* 모든 가져오기에 대한 네임스페이스 객체 생성을 통해 CommonJS와 ES 모듈 간의 상호 운용성을 제공. 'allowSyntheticDefaultImports' 암시 */
    // "preserveSymlinks": true,              /* symlinks 실제 경로로 결정하지 않음 */
    // "allowUmdGlobalAccess": true,          /* 모듈에서 UMD 글로벌에 접근 허용 */

    /* 소스맵 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    // "sourceRoot": "./",                    /* 디버거(debugger)가 소스 위치 대신 TypeScript 파일을 찾을 위치 설정 */
    // "mapRoot": "./",                       /* 디버거가 생성된 위치 대신 맵 파일을 찾을 위치 설정 */
    // "inlineSourceMap": true,               /* 하나의 인라인 소스맵을 내보내도록 설정 */
    // "inlineSources": true,                 /* 하나의 파일 안에 소스와 소스 코드를 함께 내보내도록 설정. '--inlineSourceMap' 또는 '--sourceMap' 설정이 필요 */

    /* 실험적인 기능 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    // "experimentalDecorators": true,        /* ES7 데코레이터(decorators) 실험 기능 지원 설정 */
    // "emitDecoratorMetadata": true,         /* 데코레이터를 위한 유형 메타데이터 방출 실험 기능 지원 설정 */

    /* 고급 옵션
     * ------------------------------------------------------------------------------------------------------------------------------------------------ */
    "skipLibCheck": true,                     /* 선언 파일 유형 검사 스킵 */
    "forceConsistentCasingInFileNames": true  /* 동일한 파일에 대한 일관되지 않은 케이스 참조를 허용하지 않음 */

  }
}
```

#### include / exclude 설정

컴파일에 포함할 디렉토리/ 파일 경로를 설정하거나 제외시킬 수 있다.
포함/ 제외될 각 항목은 [glob](<https://ko.wikipedia.org/wiki/%EA%B8%80%EB%A1%9C%EB%B8%8C_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)>) 패턴을 사용하여 표기할 수 있다.

- `*` 0 이상의 모든 문자와 일치 (디렉토리 분리 기호 제외)
- `?` 1개 문자와 일치 (디렉토리 분리 기호 제외)
- `**/` 모든 하위 디렉토리까지 포함

```json
{
  // 컴파일 포함
  "include": [
    "src/**/*.tsx?"
  ],
  // 컴파일 제외
  "exclude": [
    "node_modules",
    "build",
    "**/*.(spec|test).ts"
  ],
  // 컴파일 옵션
  "compilerOptions": { ... }
}
```

---

## IDE/ 에디터

#### IDE/ 에디터

웹 앱 개발을 위한 IDE(통합 개발 환경)로 VSCode 또는 동일한 사용자 경험을 제공하는 온라인 에디터를 설치해 사용한다

#### Visual Studio Code 확장

[TypeScript Extension Pack](https://marketplace.visualstudio.com/items?itemName=loiane.ts-extension-pack)
Typescript 확장 기능 중, 많이 사용 되는 일부 패키지를 묶은 확장팩 이다.

- TypeScript Hero
  설정된 규칙에 따라 import 구문을 정렬하고 사용 되지 않은 것은 제거한다.
  Window/ Linux: Ctrl + Alt + O
  MacOS: Ctrl + Opt + O

- json2ts
  복사된 JSON 코드를 TypeScript 인터페이스로 변환한다.
  Ctrl + Alt + V

- Move TS
  프로젝트의 일부 파일을 리팩토링하고 재구성하는데 도움되는 훌륭한 확장프로그램.
  경로가 변경된 `import` 및 컴포넌트를 가져오는 파일을 자동으로 수정한다.
  프로젝트 탐색기 창에서 파일이나 폴더를 마우스 우클릭 후 'Move TypeScript'를 선택해 사용한다.

- Path Intellisense
  VSCode의 자동 가져오기 기능은 뛰어나지만 일부 파일은 수동으로 가져와야 하는 경우가 있고, 이를 보완해준다.

- TypeScript Importer
  작업 영역 파일에서 TypeScript 정의를 자동으로 검색하고 알려진 모든 기호를 완료 항목으로 제공하여 코드를 완성한다.

- Prettier - JavaScript formatter
  JavaScript/ TypeScript/ CSS 코드 포맷을 보기좋게 만들어준다.

---

## Google TypeScript Style

> [GTS](https://github.com/google/gts)는 Google의 TypeScript 스타일 가이드이다.
> 포맷터, 린터, 자동 코드 수정의 구성이고 이를 이용해 TypeScript 프로젝트를 손쉽게 시작할 수 있다.

#### GTS로 프로젝트 시작하기

GTS로 프로젝트를 시작하는 방법은 간단하다.

```bash
npx gts init
```

위 명령은 TypeScript 프로젝트 설정에 필요한 `tsconfig.json`, `.eslintrc.json`, `.prettierrc.js` 파일을 생성하고 `package.json` 파일을 만든 후 (설치 과정 옵션 질문에 `Y` 답변시) 의존 패키지를 설치한다.

```bash
.
├── src/
│   └── index.ts        # 엔트리 파일
├── .eslintignore       # ESLint 제외 항목
├── .eslintrc.json      # ESLint 구성
├── .prettierrc.js      # Prettier 구성
├── tsconfig.json       # TypeScript 구성
├── package.json
└── package-lock.json
```

#### GTS 명령 목록

> `package.json` 파일 `script` 참고

|       이름        |                          설명                          |
| :---------------: | :----------------------------------------------------: | ----------------------------- |
| `npm run compile` |                 TypeScript 컴파일러를                  | 사용해 소스코드를 컴파일한다. |
|  `npm run lint`   |      TypeScript 린팅을 통해 타입 문제를 확인한다.      |
|   `npm run fix`   | 가능한 경우, TypeScript 린팅 문제를 자동으로 수정한다. |
|  `npm run clean`  |             출력된 결과물을 모두 제거한다.             |

#### 개별 파일 명령

디렉토리 단위가 아닌 개별 파일 단위로 명령을 실행할 수 있다.

```bash
npx gts lint index.ts
npx gts lint one.ts two.ts three.ts
npx gts lint *.ts
```

---

## TSDX

> [TSDX](https://tsdx.io/)는 최신 TypeScript 개발, 테스트 및 배포를 하는데 도움이 되는 제로 구성(Zero-config) CLI 도구이다.
> 설치가 쉬워 구성에 시간을 낭비하지 않고 개발에 더욱 집중할 수 있다.

#### 설치

TSDX를 사용하면 몇 초만에 새로운 TypeScript 프로젝트를 부트스트랩(Bootstrap) 할 수 있다.
터미널에 다음 명령을 입력하면 설치가 된다.

```bash
npx tsdx create <프로젝트_이름>
```

이어서 다음의 3가지 프로젝트 템플릿 중 하나를 선택하라는 메시지가 표시된다.

- `basic` : 모든 종류의 모듈에 사용 가능한 기본적인 TypeScript 프로젝트 템플릿
- `react` : React 개발에 필요한 의존 패키지, `@types`가 설치되는 프로젝트 템플릿
- `react-with-storybook` : `react` 템플릿과 동일하지만, [Storybook](https://storybook.js.org/)이 설치된 프로젝트 템플릿

템플릿을 선택해 설치하면 프로젝트 템플릿이 포함된 폴더를 만들고 모든 종속성 패키지를 설치한다.
설치가 완료되면 TypeScript, Rollup, ESlint 및 기타 도구가 설정되어 바로 사용할 수 있다.
