
var shareBtn = document.getElementById('share-btn');
var socials = document.getElementById('social-links-window');

shareBtn.addEventListener('click', function(){
    if(socials.style.display === 'flex'){
        socials.style.display = "none";
        shareBtn.classList = "share-btn";
    }
    else{
        socials.style.display = 'flex';
        shareBtn.classList = "share-btn active";

    }
});