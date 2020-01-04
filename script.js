var saveAry = ["","","","","","","","","","","","","","","","",""];
var printAry = ["","","","","","","","","","","","","","","","",""];


var dayDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");

if (localStorage.getItem("Planner Save") === null){
    localStorage.setItem("Planner Save", saveAry);
}

$(".date").text(dayDate);

function saveClick (event) { 
    event.preventDefault();
    var time = $(this).attr("data-time")
    var test2 = $(this).siblings();
    var test3 = test2[1].value;
    saveAry[time] = test3;
    console.log(saveAry)
    var storageAry = saveAry.toString();
    localStorage.setItem("Planner Save", storageAry);
    pullStorage();
}

function pullStorage () {
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

$(".planner").on("click", "button", saveClick)