# Sobokki World
<b> 포트폴리오 사이트 <br>

<img src ='https://github.com/user-attachments/assets/15fd4a8d-b0fb-4245-8eeb-0d2e972e4fff'/>

---
## 🔗 배포링크
https://sobokkiworld.vercel.app/


## 📑 프로젝트 설명
<b> 전소은이라는 사람을 알 수 있는 포트폴리오 사이트를 구현했습니다. <br>
<b> 조금이나마 저를 설명할 수 있는 사이트가 될 수 있도록 계속 발전시키겠습니다. <br>


## 🛠️ Dev Tools
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/reacthookform-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white"> <br> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> 
## 🖥️ 프로젝트 실행 방법
```bash
git clone https://github.com/codeit=part2-8team-project/Keepy-Uppy.git](https://github.com/codeit-part4-8team-project/main.git

cd main 

npm i

npm run dev
```

## 📁 디렉토리 구조
```
sobokkiworld
- **`app` 디렉토리**: 애플리케이션의 페이지와 페이지 전용 레이아웃 파일이 위치합니다.
  - **`(pages)`**: 사이트 내 각 페이지를 정의하며, 페이지 전용 레이아웃 파일이 포함됩니다.
    - **`page.tsx`**: 홈 페이지 컴포넌트
    - **`project`**: 프로젝트 페이지 관련 컴포넌트 및 파일
    - **`visitor`**: 방명록 페이지 관련 컴포넌트 및 파일
    - **`writing`**: 방명록 작성 페이지 관련 컴포넌트 및 파일
    - **`layout.tsx`**: 페이지들에 공통된 레이아웃을 정의합니다.

- **`components` 디렉토리**: 애플리케이션 전반에서 사용되는 재사용 가능한 UI 컴포넌트 모음

- **`data` 디렉토리**: 외부 데이터 소스에서 데이터를 가져오는 함수들이 위치합니다.
  - **`fetchLetters.ts`**: Firestore에서 방명록 데이터를 비동기적으로 가져오는 함수

- **`styles` 디렉토리**: 스타일 관련 파일
  - **`global.scss`**: 전역 스타일 설정
  - **`layout.module.scss`**: 페이지 레이아웃 스타일 설정
  - **`layout.scss`**: 페이지 레이아웃 구조 설정
  - **`main.scss`**: 전역 레이아웃 구조 설정
  - **`notFound.module.scss`**: 404 페이지 스타일 설정

- **`firebaseConfig.ts`**: Firebase 애플리케이션 및 Firestore 데이터베이스 초기화 설정

- **`not-found.tsx`**: 404 페이지 

- **`public` 디렉토리**: 이미지 및 아이콘 모음

```
