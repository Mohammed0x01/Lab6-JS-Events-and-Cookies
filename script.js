//Read this from API/DB
const initLikes=220;
const initDislikes=34;

let likesCount = initLikes;
let dislikesCount = initDislikes;

let likeBtn = document.getElementById("likeBtn");
let dislikeBtn = document.getElementById("dislikeBtn");

likeBtn.innerText = "👍 " + initLikes;
dislikeBtn.innerText = "👎 " + initDislikes;

function doLike(){
    likesCount++;
    likeBtn.innerText= "👍 " + likesCount;
    disableButtons();
    setCookie();
}

function doDislike(){
    dislikesCount++;
    dislikeBtn.innerText= "👎 " + dislikesCount;
    disableButtons();
    setCookie();
}

function disableButtons (){
    likeBtn.disabled = true;
    dislikeBtn=disabled = true;
}

//here we just set the cookie when voted for 60 seconds that is on our domain
function setCookie(){
    document.cookie = "voted=true; SameSite=Strict; Max-Age" + 60;
}

//when the page load, check if a cookie is stored 
window.onload = function(){
    if(document.cookie && document.cookie.indexOf('voted') > -1){
        disableButtons();
    }

}