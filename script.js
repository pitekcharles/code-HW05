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

    //need to rename some variables and convert array into string and store in local storage.
}

function pullStorage () { //function to get info from local storage and populate input fields to contain info from storage

}

$(".planner").on("click", "button", saveClick)