let prev;

function rememPrev(val){
    prev = val;
    console.log(prev);
}

function changeBgColor(linkNo){
    if (prev != undefined) {
        document.getElementById('ssblink'+prev).style.backgroundColor = "#818080";
    }
    let lnk = document.getElementById('ssblink'+linkNo);
    lnk.style.backgroundColor = "#000000";
    rememPrev(linkNo);
}