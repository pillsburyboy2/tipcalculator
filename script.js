var $ = function(id) {
    return document.getElementById(id);
};

// var checkTextInput = function() {
//     var bill = parseFloat($("billAmount").value);
//     var partyNumber = parseFloat($("partyAmount").value);
//     var tipAmount = $("tipPercentages").value;
//     var totalTip;

//     if (isNaN(bill)){
//         $("billError").firstChild.nodeValue = "Enter a numeric value for bill.";
//     } else if (bill <= 0){
//         $("billError").firstChild.nodeValue = "Bill must be greater than zero.";
//     } else if (isNaN(partyNumber)) {
//         $("partyError").firstChild.nodeValue = "Enter a numeric value for number of people.";
//     } else if (partyNumber <= 0) {
//         $("partyError").firstChild.nodeValue = "Number of people must be greater than zero.";
//     }
//     else {
//         $("billError").firstChild.nodeValue = "";
//         $("partyError").firstChild.nodeValue = "";
//         //$("totalTip").value = calculateTip(bill, partyNumber, tipAmount);
//         $("totalTip").value = calculateTip(bill, partyNumber, tipAmount);
//     }
// };

function calculateTip() {
    var bill = parseFloat($("billAmount").value);
    var partyNumber = parseFloat($("partyAmount").value);
    var tipAmount = $("tipPercentages").value;
    var newTipPercent = tipAmount/100;
    var tipPerPerson = (bill / partyNumber) * newTipPercent;
    totalTip = tipPerPerson.toFixed(2);
    $("tipResults").innerHTML = "with a bill of $" + bill + " and " + partyNumber + ", each person owes $" + totalTip + ".";
    //return totalTip;
};

window.onload = function() {
    $("billAmount").focus();
};