function plannerPop () {
    var planner = $(".planner")
    for (var i = 9; i <= 17; i++) {
        if (i > 12) {
            var fill = $("<div class='time'>" + (i-12) +" pm</div><div class='plan></div><div class='saveButton'></div>")
            planner.append(fill);
        } else if (i === 12) {
            var fill = $("<div class='time'>12 pm</div><div class='plan></div><div class='saveButton'></div>")
            planner.append(fill);
        } else {
            var fill = $("<div class='time'>" + i +" am</div><div class='plan></div><div class='saveButton'></div>")
            planner.append(fill);

        }
    }
}

plannerPop();