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
