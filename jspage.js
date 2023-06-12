// 글자 색상바꾸기
window.onload = function(){
    const photo = document.querySelector('.photo');
    let colorIndex = 0;
    photo.onclick = function() {
        const firstname = document.querySelector('.firstname');
        const colors = ['red', 'yellow', 'blue', 'green','white','#f504cd'];
        firstname.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    };

    // 부드럽게 내려가는 모션
    const navLinks = document.querySelectorAll('.navi a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    let targetOffsetTop = target.offsetTop;
                    window.scrollTo({
                        top: targetOffsetTop,
                        behavior: 'smooth'
                    });
                    resetScrollPosition();
                }
            });
        });
    
    // .material-symbols-rounded>a 클릭 시 해당 섹션으로 부드럽게 이동
    const symbol = document.querySelector('.material-symbols-rounded>a');
    if (symbol) {
        symbol.addEventListener('click', function(event) {
            event.preventDefault();
            let target = document.querySelector(symbol.getAttribute('href'));
            if (target) {
                let targetOffsetTop = target.offsetTop;
                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: 'smooth'
                });
                resetScrollPosition();
            }
        });
    };
};

// 스크롤 이벤트
window.addEventListener('scroll', function() {
    let aboutName = document.getElementById('about-name');
    let aboutInfo = document.getElementById('about-info');
    let aboutText = document.getElementById('about-text');

    let scrollTop = window.scrollY ;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // newPosition 값 설정
    let newPosition = (scrollTop - 1050);

    // newPosition값 위치에서 작동
    if (scrollTop > thresholdStart &&  scrollTop < thresholdEnd) {
            aboutName.style.right = newPosition + 'px';
            aboutInfo.style.right = newPosition + 'px';
            aboutText.style.right = newPosition + 'px';
    }
    lastScrollTop = scrollTop; 
});
const lastScrollTop = 0;
const thresholdStart = 200; // 특정 위치의 임계값 (사진중간)
const thresholdEnd = 1350; // 특정 위치의 임계값 (사진맨밑)

