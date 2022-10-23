## 🪬 NPM package `motionkim`

- `npm install motionkim`

<br/>

### 💊 1.0.n - Test version

- scrollActive(tagName)
  - 현재 스크롤 위치를 체크하여 tagName 위치와 비교, 화면 중간 지점을 기준으로, active 클래스를 갖도록 처리.

- scrollMove(tagName, gap)
  - 메뉴 이동 함수.
  - 매개변수로 tagName과 gap 값을 받고, 해당 함수 선언 시 tagName이 위치한 스크롤 위치로 gap 값의 속도 만큼 이동.
  - 존재하지 않는 tagName 일 경우 false 값을 반환.
  - 사용 예시) {name}.scrollMove('.test-class', 40);
  - header 태그가 존재한다면, header 태그의 높이까지 계산되어 스크롤 처리.

- navScroll
  - 페이지 스크롤 시 GNB 노출 여부 함수.
  - 스크롤 위치가 최상단일때 body 태그에 nav-fixed 라는 함수를 추가.

- minHeightFull(tagName)
  - 매개변수로 tagName 값을 받습니다. 해당 tag 의 min-height 값을 화면 높이로 지정.
  - 모바일 기기일 경우 height 100vh 적용이슈에 대한 대응 함수.

- consoleTest(text)
  - console.log 테스트용 함수.
	
