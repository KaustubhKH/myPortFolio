let prev;

function resetPrev() {
    if (prev == undefined) {
        return;
    }
    document.getElementById('ssblink' + prev).style.backgroundColor = "#818080";
}

// onclick functinality
function changeBgColor(linkNo) {
    if (prev != undefined) {
        resetPrev();
    }
    let lnk = document.getElementById('ssblink' + linkNo);
    lnk.style.backgroundColor = "#000000";
    prev = linkNo;
}

//onscroll functionality
window.onscroll = function () { myFunction() };
function myFunction() {
    let curr = document.documentElement.scrollTop;
    if (curr > 2300) {
        changeBgColor(5);
    } else if (curr > 2100) {
        changeBgColor(4);
    } else if (curr > 1800) {
        changeBgColor(3);
    } else if (curr > 1200) {
        changeBgColor(2);
    } else if (curr > 400) {
        changeBgColor(1);
    } else {
        resetPrev();
    }
}