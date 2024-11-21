// UI 영수증 목록에서 보여주는 항목
const receipt = {
  purchaseDate: "2014-12-12", // 구매날짜 - 스캔됨
  productPrice: 2000, // 제품가격 - 스캔됨
  purchasePlace: "다이소 강남점", // 구매지점 - 스캔됨
  productName: "다이소 가위", // 제품명 - 스캔됨
  usedTime: "n", // (day기준) 사용시간 - 자동계산됨.
};

// UI 영수증 상세 및 글 작성
const receiptDetail = {
  purchaseDate: "2014-12-12", // 구매날짜 - 스캔됨
  productPrice: 2000, // 제품가격 - 스캔됨
  purchasePlace: "다이소 강남점", // 구매지점 - 스캔됨 - 지점 비공개 처리 가능
  productName: "다이소 가위", // 제품명 - 스캔됨
  productImage: "", // 제품이미지 - 선택
  productTag: "기타", // 제품태그 - 선택
  content: "가성비 좋음", // 제품후기 - 필수
  starrating: "5", // 0.5~5 입력
  usedTime: "n", // (day기준) 사용시간 - 자동계산됨.
};


// UI 메인-피드 목록
const feedList = {
  productPrice: 2000, // 제품가격 - 스캔됨
  purchasePlace: "다이소 강남점", // 구매지점 - 스캔됨
  productName: "다이소 가위", // 제품명 - 스캔됨
  productImage: "", // 제품이미지 - 선택
  productTag: "기타", // 제품태그 - 선택
  content: "가성비 좋음", // 제품후기 - 필수
  starrating: "5", // 0.5~5
  usedTime: "n", // (day기준) 사용시간 - 자동계산됨.
  userInfo: "홍길동", // 자동입력
  createTime: "2014-12-12 23:00:11", // 글 작성 시간
};

// UI 메인-피드 상세
const feed = {
  purchaseDate: "2014-12-12", // 구매날짜 - 스캔됨
  productPrice: 2000, // 제품가격 - 스캔됨
  purchasePlace: "다이소 강남점", // 구매지점 - 스캔됨
  productName: "다이소 가위", // 제품명 - 스캔됨
  productImage: "", // 제품이미지 - 선택
  productTag: "기타", // 제품태그 - 선택
  content: "가성비 좋음", // 제품후기 - 필수
  starrating: "5", // 0.5~5
  usedTime: "n", // (day기준) 사용시간 - 자동계산됨.
  userInfo: "홍길동", // 자동입력
  createTime: "2014-12-12 23:00:11", // 글 작성 시간
};

// DB 메인-피드
const DBfeed = {
  purchaseDate: "2014-12-12", // 구매날짜 - 스캔됨
  productPrice: 2000, // 제품가격 - 스캔됨
  purchasePlace: '다이소 강남점', // 구매지점 - 스캔됨
  productName: "다이소 가위", // 제품명 - 스캔됨
  productImage: "", // 제품이미지 - 선택
  productTag: "기타", // 제품태그 - 선택
  content: "가성비 좋음", // 제품후기 - 필수
  starrating: "5", // 0.5~5
  usedTime: "n", // (day기준) 사용시간 - 자동계산됨.
  userInfo: "홍길동", // 자동입력
  createTime: "2014-12-12 23:00:11", // 글 작성 시간
};

// 랭킹에서 필터링 기능
const filter = {
  filter: '가격범위 조절' | '제품태그 종류마다 선택해서 보기' | '별점 높은순-낮은순' | '사용시간 '
}

// 상단 검색
const search = {
  search: '제품명' | 'content' | '작성자이름'
}

// 마이페이지



// 로그인
// db