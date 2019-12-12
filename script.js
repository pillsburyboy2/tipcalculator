var $ = function(id) {
    return document.getElementById(id);
};


window.onload = function() {
    $("calculateTip").onclick = calculateTip();
    $("billAmount").focus();
};