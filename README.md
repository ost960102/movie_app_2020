# 오승택 201840123
## movie_app_2020
React JS Fundamentlas Course 2020
## 11월 06일
>1. 언더바 두개(__)로 작명하는 방법은 잘못된 방법이다.
>2. css는 kebab(ex.-good)을 사용(개발자의 가이드라인)

## 10월 30일
>1. 오류 문제는 App.js의 39번째 줄에 poster={movie.medium_cover_image} medium을 midium으로 잘못쳐 오탈자 때문에 오류가 난 것 같습니다. 

## 10월 16일
>1. constructor() 함수 → constructor 실행 후 render 실행
>2. componentDidMount() 함수 → render 실행후 componentDidMount 실행
>3. componentDidUpdate() 함수 → 화면이 새로 그려지게 되면 실행
>4. componentDidUnmount() 함수
>5. App 컴포넌트 비우기(영화 앱 만들기 워밍업)
>6. 데이터 로딩 상태 표시해주기

>* isLoading state 특징
>1. 앱이 실행(mount)되는 초기에는 무조건 로딩 상태이기 때문에 값은 true이다.
>2. 삼항연산자로 로딩 상태를 알려주는 문장을 만들 수 있다.
>3. 강제로 false로 바꿔서 로딩 현상을 구현할 수 있다.
>4. 영화 API 사용해보기

>* API 특징
>1. 특정 주소를 입력하면 그 주소에 맞는 결과를 보내준다.
>2. 조건도 붙일 수 있도록 제공한다.
>3. API를 사용하려면 axios를 설치 후 import하여야 한다. 이때, componentDidUnmount() 함수에서 axios.get() 함수의 인자에 URL을 전달하여 API를 호출한다.

>* async, await
>1. 자바스크립트에서 시간이 필요하다는 것을 알리기 위해서 사용되는 키워드이다.
>2. 시간이 필요하다는 것을 알리려면 async를 () 앞에 붙이고, 실제 시간이 필요한 대상인 axios.get() 함수에는 await를 붙인다.

## 10월07일
>1. rating에서 isRequired는 있어도되고 없어도 된다(평점을 안주는 사람도 있기때문에).
>2. 전달되는 경우 자료형은 반드시 number이어야 한다.
>3. 클래스 이름 대문자 메소드,객체는 소문자
>4. 리액트는 클래스형 컴포넌트의 render()함수를 자동으로 실행시켜준다.
>5. state정의는 state= { }; 라고 작성하고 정의한다.
>6. 반드시 클래스형 컴포넌트 안에서 소문자를 이용하여 state라고 작성한다.
>7. state를 직접 변경하는 경우에는 render()함수를 다시 실행하지 않는다(간접 변경하는 법을 알아야됨).
>8. state 간접변경->this.setState({ }); (state가 새로운 값으로 바뀌고 render()함수를 동작시켜 화면을 업데이트 시킨다.)

## 09월 25일
>1. import를 이용한 이미지 삽입.(import '이름' from '이미지 경로';)
>2. 컴포넌트 여러개 만들기.
>3. map() 함수로 컴포넌트 많이 만들기.
>4. render 함수 화살표 함수로 만들기.
## 09월 18일
>1. 컴포넌트가 무엇인지 알아보고, JSX를 학습.
>2. JSX는 단지 HTML과 자바스크립트를 조합한 문법이다.
>3. 컴포넌트 이름의 첫자는 반드시 대문자로 해야한다.
>4. 컴포넌트에 데이터를 전달 할 때는 props를 사용한다.
>5. 점 연선자를 대신해서 ES6의 구조 분해 할당을 사용할 수 있다.
>6. 리액트는 다수의 컴포넌트로 이루어지나, 최종적으로는 하나의 컴포넌트만 사용한다.
* 언제까지? 9월 23일까지.

## 09월 11일
>1. Dothome에 indexfile 수정하기.
>2. readme.md 수정 후 Github에 push하기.
* 언제까지? 9월 16일까지.