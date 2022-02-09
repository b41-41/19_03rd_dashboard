# dashboard

1. 💁 프로젝트 소개
2. 👋🏻 팀원 소개
3. 🔗 배포 링크
4. 📄 협업 문서
5. 👩‍💻구현 기능
6. 💿 설치 및 실행 방법
7. 🛠️ 기술 스택

## 1. 💁 프로젝트 소개

- 주제 : 상품 정보 등록 및 관리 기능을 하는 관리자 페이지
- 기간 : 22.02.07 ~ 22.02.09

## 2. 👋🏻 팀원 소개

<table>

  <tr align="center">
    <td><a href='https://github.com/yeongjong310'>김영종</a></td>
    <td><a href="https://github.com/b41-41">정다빈</a></td>
    <td><a href="https://github.com/leechoiswim1">최수임</a></td>
    <td><a href="https://github.com/vi2920va">이송현</a></td>
  </tr>

  <tr align="center">
    <td><img src="https://avatars.githubusercontent.com/u/39623897?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/90027202?v=4"  width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/85476908?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/76679130?v=4" width="150px"/></td>

  </tr>

  <tr align="center">
  <td>팀장</td>
  <td>팀원</td>
  <td>팀원</td>
  <td>팀원</td>
  </tr>

</table>

## 3. 🔗 배포 링크

[프로젝트 링크 바로가기](https://dashboard19wanted.herokuapp.com/)

## 4. 📄 협업 문서

[프로젝트 노션 바로가기](https://www.notion.so/2-1-8865814f6bb3421481ff3f6db463890f)

## 5. 👩‍💻 기능 목록 명세

### ✔ 담당자 : 김영종

- Main 페이지 반응형 디자인 구현
- json-server 세팅 및 배포
- 선택 방식, 가공 방식에 따른 필터링 로직 구현

### ✔ 담당자 : 정다빈

- theme에서 전역에서 공통적으로 사용되는 color, font-size 등 스타일등 정의
- Reset 버튼 스타일 및 기능 구현
- 견적 요청 카드 컴포넌트 기능 구현
- Divider 구분선 구현

### ✔ 담당자 : 최수임

- Header 컴포넌트 구현
- 모바일 사이즈에서 Hamburger 버튼 클릭 시 사이드 바 메뉴 구현
- 선택 방식과 가공 방식에 따른 필터링 로직 구현

### ✔ 담당자 : 이송현

- Toogle 버튼 스타일 및 기능 구현
- json-server 세팅 및 배포
- 빈 화면 기능 구현
- request api 기능 구현

### ✔ 담당자 : 팀 전체

- 가공 방식 필터
- 재료 선택 필터

## 6. 💿 설치 및 실행 방법

Project Clone

```
$ https://github.com/wantedPreOnboarding/19_03rd_dashboard
```

Project Setup

```
$ yarn install
```

Project Start For Development

```
$ yarn start
```

## 7. 🛠️ 기술 스택

<div>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>

## 8. 🌲 폴더 구조

```
├── README.md
├── db.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── server
│   ├── db.json
│   └── index.js
├── src
│   ├── App.tsx
│   ├── api
│   │   ├── request.ts
│   │   └── request.type.ts
│   ├── assets
│   │   └── images
│   ├── components
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── pages
│   │   └── templates
│   ├── consts
│   │   └── constants.ts
│   ├── index.tsx
│   ├── setupTests.ts
│   ├── styles
│   │   ├── globalStyles.tsx
│   │   ├── styled.d.ts
│   │   └── theme.ts
│   ├── types
│   │   ├── props.ts
│   │   └── react-app-env.d.ts
│   └── utils
│       └── index.md
├── tsconfig.json
└── yarn.lock
```
