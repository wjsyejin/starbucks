// 오타를 내진 않았는지 확인해라 멍청이

// console.log("test");
window.onload = function(){
    if(window.scrollY > 500){
        //상단버튼 보이기
        gsap.to("#to-top", 0.6,{
            x:0
        });
    }else{
        // 상단버튼 숨기기
        gsap.to("#to-top", 0.6,{
            x:100
        });
    }
}



// badges 고정하기
// 좀 더 정확하게 쓰고 싶으면 상세 경로를 써줘라
const badgeEl = document.querySelector('#top_layout .badges');
// const badgeEl = document.querySelector('#top_layout .badges');
// console.log(badgeEl);

// 전체 화면 스크롤 조건이므로 단위가 다른것
// 원래 썼던 것
// window.addEventListener('scroll',function(){
//     console.log('scroll!!');
// });


// 고친 내용
// 여기서는 fucntion에 딜레이 요소를 붙인 것. 
// 위처럼 하나의 함수가 계속 동작하게 하면 과부화가 올 수 있다. 그래서 딜레이를 줘서 사용시에만 켜지게 해 준 것이다.
window.addEventListener('scroll', _.throttle(function(){
    // if문 통해 y좌표 스크롤만 카운트할 것

    // y좌표값이 500보다 클 때(밑으로 스크롤하면 안보이게 된다) 뱃지 안보이게 할 것
    if(window.scrollY > 500){
        // console.log('scroll!!');

        // 뱃지 숨김 - js에서 css조작하여 숨김
        // 처리방법1
        // badgeEl.style.display = 'none';
        // 처리방법2 - transition등의 효과 따로 적지 않고 쓸 수 있다.
        // gsap.to(요소, 지속시간(s안써줘야 ok),옵션);
        gsap.to(badgeEl, 0.6, {
            // 들어갈 속성을 묶어주기 위해(하나라도 써줘야 한다.) {}로 묶어준다.
            // 하나 더 추가하고 싶으면 , 로 분리해준다.
            opacity:0,
            display:'none',
        });
        //상단버튼 보이기
        gsap.to("#to-top", 0.6,{
            x:0
        });
    }else{
        // 뱃지 보임 - js에서 css조작하여 보임
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, 0.6, {
            opacity:1,
            display:'block',
        });
        // 상단버튼 숨기기
        gsap.to("#to-top", 0.6,{
            x:100
        });
    }
}, 300));
// ms단위, 300ms, 0.3초

// fade-in
const fadeEls = document.querySelectorAll('#body_layout .fade-in');
console.log(fadeEls);

// 4개 있는 fade-in을 각각 넣어주고 인덱싱한 것
fadeEls.forEach(function(fadeEl, index){
    // console.log(fadeEl);
    // console.log(index);
    // 0.7초 동안 아리 동작이 이루어진다?
    gsap.to(fadeEl, 1, {
        opacity:1,
        delay:(index+1)* 0.5
    });
});

// swiper기능 활용을 위한 swiper 생성자 호출
// new 사용할기능이름(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
    direction : "vertical",
    autoplay:true,
    loop:true
});

new Swiper('.promotion .swiper-container',{
    slidesPerView : 3, // 한 번에 세 개씩 보이고 넘어가게
    spaceBetween : 10, //슬라이스 사이 여백
    centeredSlides : true, //1번 이미지부터 보이게 만들기(1번 이미지 센터에 위치시키고 시작)
    autoplay : {
        delay:4500 //ms단위
    }, // 자동 넘어감
    pagination : {
        el: '.swiper-pagination', // 페이징 할 요소 선택자
        clickable:true // 사용자의 페이지 번호 요소 제어 여부
    },
    navigation : {
        prevEl : '.swiper-button-prev',
        nextEl : '.swiper-button-next',

    },
    loop : true // 루프 만들기
});

// 움직이면서 나타나는 것 만드는 js
const promotionEl = document.querySelector('.promotion');
// console.log(promotionEl);

const promotionToggleBtn = document.querySelector('.toggle-promotion');
// console.log(promotionToggleBtn);


// true - 숨기기 // false - 보이기
//false로 설정했더니 클릭을 두번째 해야 보인다
let isHidePromotion = false;
// console.log(isHidePromotion)
promotionToggleBtn.addEventListener('click', function(){
    console.log(isHidePromotion)
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        // 숨김처리
        promotionEl.classList.add('hide');
    }else{
        // 보임처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리)
// 랜덤숫자 만들기 용
function random(min, max){
    // toFixed()를 통해 반환된 문자 데이터를 parseFloat()을 통해 소수점을 가지는 숫자 데이터로 전환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    // gsap.to(요소, 지속시간(s안써줘야 ok),옵션);
    gsap.to(selector, random(1.5, 2.5),{
        y:size,
        repeat:-1,
        yoyo:true,
        ease: Power1.easeInOut,
        delay:random(0, delay)
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEl);
spyEls.forEach(function(spyEl){
    // 객체선언하고, 각각의 함수들을 통해 값을 담아준다. 
    new ScrollMagic
    .Scene({
        triggerElement:spyEl, // 보여짐 여부 감지할 요소
        triggerHook:.8 // 다음 요소를 보여주는 텀(시간)
    })
    .setClassToggle(spyEl, 'show') // 보여질 때 어떤 클래스를 추가할 것인가
    .addTo(new ScrollMagic.Controller()); // 무슨 기능이라고요?

});


new Swiper('#awards .swiper-container', {
    autoplay:true,
    loop:true,
    // 요소마다의 여백을 30씩 잡겠다.
    spaceBetween:30,
    // 한 번에 몇개의 슬라이더가 보이게 할 것이냐
    slidesPerView:5,
    // 버튼 생성
    navigation:{
        prevEl : '#awards .swiper-button-prev',
        nextEl : '#awards .swiper-button-next'
    }
});


const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener('click', function(){
    gsap.to(window, 0.7, {
        scrollTo:0
    })
});