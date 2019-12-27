var saveAry = [];
var printAry = [];


//---------------------------------------------------
// these lines create variables using moment.js
// and then console.log out those variables to show
// the format that moment gives for each. there is 
// more info in the docs on different options and 
// formatting.
//---------------------------------------------------
var dayDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");

console.log(currentHour);
console.log(dayDate);

//---------------------------------------------------

$(".date").text(dayDate);

function saveClick () { //function that is run when save button is clicked
    var time = $(this).attr("data-time")
    var test2 = $(this).siblings();
    var test3 = test2[1].value;
    console.log(time);
    console.log(test2);
    console.log(test3);
    saveAry[time] = test3;
    console.log(saveAry);
    var storageAry = saveAry.toString();
    localStorage.setItem("Planner Save", storageAry);
    pullStorage();

    //need to rename some variables and convert array into string and store in local storage.
}

function pullStorage () { //function to get info from local storage and populate input fields to contain info from storage
    console.log("pullStorage test");
    printAry = localStorage.getItem("Planner Save");
    printAry = printAry.split(",");
    console.log(printAry);
    for (var i = 9; i<printAry.length; i++){
        var temp =document.getElementById(i);
        console.log(temp);
        $(temp).val(printAry[i]);
        if (i == currentHour) {
            $(temp).css("background", "red")
        } else if (i < currentHour) {
            $(temp).css("background", "grey")
        }
    }

    
}
pullStorage();
saveAry = printAry;
$(".planner").on("click", "button", saveClick)