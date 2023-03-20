//  검색바
// search_bar의 내용들을 가져와서 searchEl에 저장할 것이다.
const searchEl = document.querySelector('.search_bar');
const searchInputEl = searchEl.querySelector('input');
// console.log(searchEl);
// console.log(searchInputEl);

// searchEl 안의 로고를 클랙했을 때 searchEl.inputEl(입력칸)를 focus 상태(입력가능상태)로 바꿔주도록 리스너 기능을 추가
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

// focused 시에는 이런 내용이 나타날 것이다.
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '검색어를 입력해주세요');
});


// focused가 되면 이런 상태가 된다.
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});