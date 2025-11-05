// ScrollMagic 사용
// init controller
const controller = new ScrollMagic.Controller();

const spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEls);

spyEls.forEach(function (spyEl) {
  // console.log(spyEl, index);

  // create a scene
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 감시할 장면 추가 및 옵션 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!)
});

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
  // autoplay: { // 자동 재생 여부
  //   delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
  // },

  // 페이지네이션 옵션
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});

// 모달창 띄우기
const imageModal = document.querySelector('#imageModal');
const imageModalBtnList = document.querySelectorAll('.btn-modal-image');
const imageCloseBtn = document.querySelector('#imageModal .btn-close');
const imageEl = document.querySelector('#imageModal img');
// console.log(imageModalBtnList);

// Quiz: 이미지 버튼을 누르면 모달창이 뜨고 닫기 버튼을 누르면 닫히도록 만들기
imageModalBtnList.forEach(function (imageModalBtn) {
  imageModalBtn.addEventListener('click', function () {
    imageEl.src = imageModalBtn.dataset.imageSrc;
    imageModal.style.display = 'flex';
  });
});
imageCloseBtn.addEventListener('click', function () {
  imageModal.style.display = 'none';
});

// ESC 키로 닫기
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') { // e.key: 입력된 문자 자체
    imageModal.style.display = 'none';
  }
});

// 모달 바깥 영역 클릭 시 닫기
imageModal.addEventListener('click', function (e) {
  console.log(e.target); // 현재 이벤트가 발생한 대상(사용자가 실제로 클릭한 가장 안쪽 요소)
  console.log(e.currentTarget); // 이벤트가 바인딩된 요소(여기선 imageModal), this와 동일
  
  if (e.target === e.currentTarget) { // 이벤트 리스너가 붙은 요소 그 자체를 클릭한 경우만 실행
    imageModal.style.display = 'none';
  }
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
console.log(new Date().getFullYear());
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
const toTopEl = document.querySelector('#toTop');
const visualSpanEls = document.querySelectorAll('.visual h1 span');

// 페이지에 스크롤 이벤트 감지를 추가!
// 브라우저는 문서 전체의 스크롤을 window 기준으로 처리
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // y축 스크롤 위치

  // Quiz: 페이지 스크롤 위치가
  // 500px을 넘으면 요소를 보이고,
  // 500px을 넘지 않으면 요소 숨기기!
  if (window.scrollY > 500) {
    toTopEl.style.opacity = '1';
    toTopEl.style.transform = 'translateX(0)';

    visualSpanEls.forEach(function (spanEl) {
      spanEl.classList.remove('animate-flash');
    });
  } else {
    toTopEl.style.opacity = '0';
    toTopEl.style.transform = 'translateX(100px)';

    visualSpanEls.forEach(function (spanEl) {
      spanEl.classList.add('animate-flash');
    });
  }
});