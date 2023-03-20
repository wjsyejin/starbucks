// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

// function onYouTubeIframeAPIReady() {
//   new YT.Player('player', {
//     videoId: 'EJF919p_hb0', // 처음 재생할 유튜브 영상 고유번호(Id) 적는 곳
//     playerVars:{ // 플레이 할 내용들 적어주는 구간
//         autoplay:true, // 반복재생
//         loop:true, // 자동재생
//         playList:['kpJqcLeHxk0', 'zorYgb5ayw8','dhOd9cyXe7I'] // 자동재생 플리 만드는 것
//     },
//     events: {
//         onReady:function(event){ // 영상 재생되는 동안 영상 조작해주는 부분
//             event.target.mute() // mute해준다
//         }
//     }
//   });
// }

function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    videoId: 'ee973zMi0Cs', //'EJF919p_hb0' 처음 재생할 유튜브 영상 고유번호(Id) 적는 곳
    playerVars:{ // 플레이 할 내용들 적어주는 구간
        autoplay:true, // 반복재생
        loop:true, // 자동재생
        playList:'ee973zMi0Cs'
        //['kpJqcLeHxk0', 'zorYgb5ayw8','dhOd9cyXe7I'] // 자동재생 플리 만드는 것
    },
    events: {
        onReady:function(event){ // 영상 재생되는 동안 영상 조작해주는 부분
            event.target.mute() // mute해준다
        }
    }
  });
}
