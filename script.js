var saveAry = [];

function saveClick () { //function that is run when save button is clicked
    console.log(this);
    var test = $(this).attr("data-time")
    var test2 = $(this).siblings();
    var test3 = test2[1].value;
    console.log(test);
    console.log(test2);
    console.log(test3);
    saveAry[test] = test3;
    console.log(saveAry);
}

function pullStorage () { //function to get info from local storage

}

$(".planner").on("click", "button", saveClick)