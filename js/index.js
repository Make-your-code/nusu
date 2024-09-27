window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;

  // 스크롤 위치에 따라 opacity 조절
  var opacity = 1 - scrollPosition / (windowHeight * 0.5);

  // opacity가 0 이하면 완전히 투명하게, 1 이상이면 완전히 불투명하게
  opacity = Math.max(0, Math.min(1, opacity));

  header.style.opacity = opacity;
});

document.addEventListener('DOMContentLoaded', function () {
  var modals = document.getElementsByClassName('modal');
  var privacyLinks = document.getElementsByClassName('privacy-policy');
  var termsLinks = document.getElementsByClassName('terms-of-service');
  var closeBtns = document.getElementsByClassName('modal-close');

  var privacyContent = `
    <h3>개인정보 처리방침</h3>
    <p>
      (주)누모(이하 '회사'라 함)는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
    </p>
    <h4>1. 개인정보의 처리 목적</h4>
    <p>
      회사는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.<br>
      - 고객 가입의사 확인<br>
      - 고객에 대한 서비스 제공에 따른 본인 식별, 인증<br>
      - 회원자격 유지, 관리<br>
      - 물품 또는 서비스 공급에 따른 금액 결제<br>
      - 물품 또는 서비스의 공급, 배송
    </p>
    <h4>2. 개인정보의 처리 및 보유 기간</h4>
    <p>
      이용자 개인정보는 원칙적으로 개인정보의 처리목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
    </p>
    <!-- 추가적인 내용은 여기에 -->
  `;

  var termsContent = `
    <h3>이용약관</h3>
    <p>
      본 약관은 (주)누모(이하 '회사'라 함)가 운영하는 누모 서비스(이하 '서비스'라 함)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
    </p>
    <h4>제1조 (목적)</h4>
    <p>
      이 약관은 회사가 제공하는 서비스의 이용조건 및 절차에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
    </p>
    <h4>제2조 (정의)</h4>
    <p>
      본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br>
      1. '서비스'라 함은 회사가 제공하는 모든 서비스를 의미합니다.<br>
      2. '이용자'라 함은 회사의 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
    </p>
    <h4>제3조 (약관의 게시와 개정)</h4>
    <p>
      1. 회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.<br>
      2. 회사는 필요한 경우 관련법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
    </p>
      <h3>이용약관</h3>
    <p>
      본 약관은 (주)누모(이하 '회사'라 함)가 운영하는 누모 서비스(이하 '서비스'라 함)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
    </p>
    <h4>제1조 (목적)</h4>
    <p>
      이 약관은 회사가 제공하는 서비스의 이용조건 및 절차에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
    </p>
    <h4>제2조 (정의)</h4>
    <p>
      본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br>
      1. '서비스'라 함은 회사가 제공하는 모든 서비스를 의미합니다.<br>
      2. '이용자'라 함은 회사의 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
    </p>
    <h4>제3조 (약관의 게시와 개정)</h4>
    <p>
      1. 회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.<br>
      2. 회사는 필요한 경우 관련법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
    </p>
    <!-- 추가적인 내용은 여기에 -->
  `;

  function showModal(modal, title, content) {
    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('.modal-body').innerHTML = content;
    modal.classList.add('show');
    // document.body.classList.add('modal-open'); // body에 클래스 추가
  }

  function hideModal(modal) {
    modal.classList.remove('show');
    // document.body.classList.remove('modal-open'); // body에서 클래스 제거
  }

  // 개인정보 처리 방침 링크에 이벤트 리스너 추가
  for (var i = 0; i < privacyLinks.length; i++) {
    privacyLinks[i].onclick = function (e) {
      e.preventDefault();
      showModal(modals[0], '개인정보 처리 방침', privacyContent);
    };
  }

  // 이용 약관 링크에 이벤트 리스너 추가
  for (var i = 0; i < termsLinks.length; i++) {
    termsLinks[i].onclick = function (e) {
      e.preventDefault();
      showModal(modals[0], '이용 약관', termsContent);
    };
  }

  // 닫기 버튼에 이벤트 리스너 추가
  for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function () {
      hideModal(this.closest('.modal'));
    };
  }

  // 모달 외부 클릭 시 닫기
  window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
      hideModal(event.target);
    }
  };
});
