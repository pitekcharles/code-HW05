var saveAry = ["","","","","","","","","","","","","","","","",""];
var printAry = ["","","","","","","","","","","","","","","","",""];

//---------------------------------------------------
// these lines create variables using moment.js
// and then console.log out those variables to show
// the format that moment gives for each. there is 
// more info in the docs on different options and 
// formatting.
//---------------------------------------------------
var dayDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");
// saveAry.push(dayDate);

console.log(currentHour);
console.log(dayDate);

//---------------------------------------------------
if (localStorage.getItem("Planner Save") === null){
    localStorage.setItem("Planner Save", saveAry);
}

$(".date").text(dayDate);

function saveClick (event) { //function that is run when save button is clicked
    event.preventDefault();
    var time = $(this).attr("data-time")
    var test2 = $(this).siblings();
    var test3 = test2[1].value;
    saveAry[time] = test3;
    console.log(saveAry)
    var storageAry = saveAry.toString();
    localStorage.setItem("Planner Save", storageAry);
    pullStorage();
    

    //need to rename some variables and convert array into string and store in local storage.
}

function pullStorage () { //function to get info from local storage and populate input fields to contain info from storage
    printAry = localStorage.getItem("Planner Save");
    printAry = printAry.split(",");
    if (localStorage.getItem("date") === dayDate){
        for (var i = 9; i<printAry.length; i++){
            var temp =document.getElementById(i);
            $(temp).val(printAry[i]);
            if (i == currentHour) {
                $(temp).css("background", "red")
            } else if (i < currentHour) {
                $(temp).css("background", "grey")
            }
        }
    } else {
        localStorage.setItem("Planner Save", ["","","","","","","","","","","","","","","","",""])
        localStorage.setItem("date", dayDate);
    }

    
}
pullStorage();
saveAry = printAry;
// if (dayDate !== printAry[0]){
//     saveAry = printAry;
// } else {
//     saveAry = [];
// }

$(".planner").on("click", "button", saveClick)