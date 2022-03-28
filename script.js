var old_top = 'home';
setTimeout(function(){
    document.getElementById('navbar').style.position = "sticky";
},3001);
function toTop(new_top){
    var a = document.getElementById(new_top).style;
    var b = document.getElementById(old_top).style;
    if(old_top != new_top){
        a.zIndex = "3";
        b.zIndex = "2";
        b.position = "relative";
        a.animation = "front 3s cubic-bezier(1,1,1,1) 0s 1";
        setTimeout(function(){
            a.animation = "none";
            b.zIndex = "0";
            b.position ="absolute";
        },3001);
        b.animation = "backing 3s cubic-bezier(1,1,1,1) 0s 1";
        old_top = new_top;
    }
}