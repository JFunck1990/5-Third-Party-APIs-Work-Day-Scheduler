//IVEN I am using a daily planner to create a schedule


//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar


//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

// current date displayed at top
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//each time block is color-coded to indicate weather it is in the past.
function timeColor(){
var d = new Date();
var n = d.getHours();
$(".hour").each(function(){
    var currentTIme = $(this).attr("data-time");
    console.log("current time: "+currentTIme);
    console.log("hour: "+n);
    console.log(typeof currentTIme);
    console.log(typeof n);

    if(currentTIme < n)
    {
        $(this).addClass("past");
    }
    else if(currentTIme == n){
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})
}

timeColor();


// save button function to local storage even when refreshing
function saveEvent (event){

    
}
// Trash delete button function







