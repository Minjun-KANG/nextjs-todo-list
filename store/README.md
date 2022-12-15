#ducks pattern

1. 항상 reducer()란 이름의 함수를 export default 해야 합니다.
2. 항상 모듈의 action 생성자를 함수형태로 export 해야 합니다.
3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야 합니다.
   \*\* 이름이 중복되지 않는 선에서 reducer/ACTION_TYPE 형태를 가질 수 있습니다.
4. 아래 상황에 action 타입을 UPPER_SNAKE_CASE로 export 할 수 있습니다.
   ** 외부 reducer가 해당 action이 발생하길 기다리는 경우
   ** 재사용할 수 있는 라이브러리로 퍼블리싱 하는 경우
