### 설치방법

(참고) Monterey 버전 os 쓰는 맥북은

firebase serve --port=9000

이렇게 터미널에 입력해서 미리보기 띄우셔야하고

크롬 브라우저에선 localhost:9000으로 들어가서 보시면 됩니다

이번 시간부터 당근마켓 제작 프로젝트를 시작해볼 것인데 프로젝트 셋팅부터 합시다.

Firebase를 설치하는 가장 쉬운 방법은 그냥 HTML 파일에 firebase.js 파일만 넣으면 끝입니다.

쌩 HTML만 사용하는 경우 빠른 설치법은

<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-storage.js"></script>

<script>
var firebaseConfig = {
  apiKey: "AIzaSyD4Jbqd9RgZd_AHeLNX-n",
  authDomain: "test-78694.firebaseapp.com",
  projectId: "test-78694",
  등 파이어베이스 콘솔에 있던 SDK 설정내용 ~~
};
firebase.initializeApp(firebaseConfig);
</script>

맨 위의 파일이 원래 Firebase 설치파일이고 나머지 3개는 각각 authentication, firestore DB, 사진 storage를 사용하고싶을 때 넣으시면 됩니다.

그리고 마지막 <script>태그는 firebase 홈피에서 프로젝트 만들면 자동으로 만들어주는 코든데 거기있던거 복붙하시면 됩니다.

근데 복붙하실 때

import { initializeApp } from "firebase/app"; 이건 필요없고 (9버전에서만 필요)

const app = initializeApp(firebaseConfig); 이거 대신

firebase.initializeApp(firebaseConfig); 저처럼 이렇게 쓰시길 바랍니다.

설치 끝

[collapse]
내가 리액트나 뷰를 사용하는 경우 설치법은

프로젝트경로에서 터미널을 오픈하신 후

npm install firebase@8.6.5
입력하면 끝입니다.

그리고 index.js 파일에

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
apiKey: "AIzaSyD4Jbqd9RgZd_AHeLNX-n",
authDomain: "test-78694.firebaseapp.com",
projectId: "test-78694",
등 파이어베이스 콘솔에 있던 SDK 설정내용 ~~
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

아무데나 입력합니다. 파이어베이스 콘솔에 있던 SDK 설정 내용이 뭐냐면 하단이나 위의 영상을 참고합니다.
[프로젝트 설정 -> 개발 아이콘 클릭 생성 -> SDK 설정 및 구성 -> 구성 부분]

vue는 index.js가 아니라 main.js 겠군요

그리고 원하는 js 파일에서

import {db} from './index.js'
import "firebase/firestore";
이렇게 import 해오면

db.collection() 어쩌구 이렇게 Firebase 데이터베이스 다루는 코드 잘 됩니다.

두번째 import는 안해도 잘될 수 있음

[collapse]

하지만 Firebase를 이용해서 호스팅까지 한번에 처리하고 싶은 경우

firebase-tools를 이용해 프로젝트를 만드는게 좋습니다.

그럴 분들은 조용히 따라하시길 바랍니다.

저랑 함께 당근마켓 만들 분들도 따라하셈

일단 Firebase console에서 새로운 프로젝트 생성하기

Firebase 설치

1. 구글에 Firebase console 이라고 검색하면 뜨는 사이트가 하나 있습니다.

거기서 새로운 프로젝트를 만드십시오.

- 이름은 아무렇게나 하시고

- 애널리틱스는 선택하든말든 알아서 합시다

2. 왼쪽 메뉴에서 Authentication, Firestore, Storage를 들어가신 다음

- 시작하기 버튼만 잘 눌러주시면 됩니다.

- Firestore 시작하기 누르면 데이터베이스 위치선택하라는데 asia-northeast3 선택하면 됩니다. 이게 아마 서울임

일단 끝

nodejs install

1. Node.js를 구글에 검색해서 설치합니다.

- 예전에 설치했다고 해도 최신버전으로 다시 설치해주셔야합니다. 14 버전 이상이 필요합니다.

2. VScode 에디터를 구글에 검색해서 설치합니다.

- 에디터는 본인이 쓰던거 써도 되겠지만 터미널 다루는 법을 모르면 당장 설치합니다.

3. 바탕화면 등에 작업폴더를 만들어줍니다.

- 찾기쉬운 곳 아무데나 만드십쇼

4. VScode 에디터의 상단메뉴에서 File - Open Folder 눌러서 방금 만든 작업폴더를 엽니다.

- 항상 뭘 하든 폴더열고 시작하셔야합니다.

5. 에디터 상단메뉴 Terminal - New Terminal을 눌러서 터미널을 오픈하고 다음 명령어를 입력하고 엔터칩니다.

npm install -g firebase-tools@9.23.1

그럼 뭔가 설치가 됩니다.

- 안되면 95% 확률로 Nodejs 설치를 제대로 안한 것임 최신버전 다시 설치해보셈

- 맥북에서 권한없다고 뭐라그러면 sudo npm install -g firebase-tools@9.23.1 이렇게 입력해봅시다.

- 윈도우에서 허가되지 않은 스크립트입니다~라고 뭐라그러면 시작메뉴에서 powershell 검색 후 관리자 권한으로 여신 다음

Set-ExecutionPolicy Unrestricted 라고 대소문자 하나라도 틀리지않고 입력하십시오. 그럼 잘됨

6. 터미널 끄지말고 다음 명령어를 입력하고 엔터칩니다.

firebase login
그럼 구글 로그인하라고 뜰텐데 로그인 잘 하십시오

firebase init
새로운 html + firebase 프로젝트 만드는 명령어인데 그럼 뭐 여러가지 선택하라고 합니다.

여러분의 센스를 믿겠습니다.

▲ Firebase 어떤 상품 쓸건지는 위와같이 선택하시면 되고

(참고) Hosting 두개가 있으면 그 중에 (optionally) Github 쓰겠다라는거 선택합시다.

▲ Firebase 어떤 프로젝트 쓸건지는 님들이 firebase console에서 미리 만든거 선택하시면 되고

나머지 선택사항은 엔터만 잘 누르면 됩니다. y/n 선택하는건 n 입력해보는게 어떨까요.

그러면 짜쟌 Firebase가 셋팅완료된 파일들이 뿅 생성됩니다.

이제 index.html 파일 열어서 당근마켓 메인페이지 코딩시작하면 됩니다.

근데 복잡해보여서 저는 그냥 깔끔하게 이것만 남기고 시작할겁니다.

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-storage.js"></script>

</body>
</html>
▲ 저랑 똑같이 8.6.5 버전으로 맞춰봅시다.

9.X 이상 버전도 있는데 이건 async await import export 등 여러가지 어려운 문법을 사용하기 때문에 우린 8.X버전을 씁시다.

9.X 이상 버전은 모듈식 개발이 가능해져서 Firebase 라이브러리의 용량을 줄일 수 있는게 장점입니다.

심심하면 9버전으로 나중에 업그레이드 해보십시오

7. 근데 마무리로 index.html 파일에 붙여넣을게 하나 더 있습니다

▲ 위 사진처럼 프로젝트 설정 - 프로젝트에 Web 앱추가하는거 누르시면

SDK 어쩌구라는 코드가 나옵니다. 그것도 여러분의 index.html 파일에 붙여넣어주셔야합니다.

실은 Firebase쓰는 모든 html 파일에 넣으셔야함

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-storage.js"></script>

  <script>
      var firebaseConfig = {
        apiKey: "AIzaSyDxeBMcsLOESHig6CrpweDlU7lTjHC",
        authDomain: "applemarket-83cc9.firebaseapp.com",
        projectId: "applemarket-83cc9",
        콘솔에 있던 긴 코드~~~
      };
      firebase.initializeApp(firebaseConfig);
  </script>

</body>
</html>
▲ 아무튼 HTML 파일이 이렇게 생기면 Firebase 설치 끝입니다.

저거 긴 코드는 귀찮다고 제거 그대로 복붙하고 따라치면 안됩니다.

SDK엔 나만의 유니크한 아이디같은게 기록되어있기 때문입니다.

(주의)

▼ 복붙할 때 이런 코드가 있다면

const app = initializeApp(firebaseConfig);

▼ 이걸로 바꿔주십시오

firebase.initializeApp(firebaseConfig)

아무튼 설치하셨으면 하단에 Firebase 문법을 자유롭게 사용가능합니다.

8. 코드짠걸 미리보기 띄우고 싶으면

터미널을 열고 firebase serve를 입력하면 됩니다.

그럼 주소가 나오는데 웹브라우저로 들어가시면 됩니다. 끝

다음 시간엔 당근마켓스러운 메인페이지 디자인이나 해보도록 합시다.

(흔한 에러 1) 크롬 콘솔창에 firebase is not defined 라는 에러가 뜨면

- Firebase 설치용 <script>들 안에 defer 이런 키워드가 있으면 지워보십시오

- <script>로 firebase-app.js 파일들 가져온거 밑에 SDK를 복붙하셔야함 


- 코드짤 때도 <script>로 firebase-app.js 파일들 가져온거 밑에 짜셔야함

(흔한 에러 2) 크롬 콘솔창에 firebase.analytics is not 어쩌구 에러가 뜨면

- html 파일 안에 있는 firebase.analytics() 이걸 지워봅시다

(흔한 에러 3) firebase init 입력했는데 뭐가 안된다면

- firebase login으로 로그인부터 하십시오

- firebase console 홈페이지에서 프로젝트부터 만드십시오 그리고 Firestore, Storage 이런거 탭에서 시작하기 누르셈

(흔한 에러 4) 맥북 터미널에서 permission이 없어요, 권한이 없어요 이런 에러가 뜬다면

sudo를 앞에 붙여봅니다.

특히 npm install 어쩌구 하실 때 sudo npm install 어쩌구~ 라고 입력해보시길 바랍니다.

중간에 님들 맥북 비번 입력이 필요할 수 있습니다.

(흔한 에러 5) 윈도우 터미널에서 보안 때문에 스크립트 실행 불가 어쩌구 에러가 뜬다면

시작메뉴에서 검색 - Powershell - 관리자권한으로 열기 하신 다음 그대로 따라칩니다.

Set-ExecutionPolicy Unrestricted
엔터누르면 뭐 선택하라는데 예 선택하면 됩니다.

이제 에디터 다시 켜서 해보셈
