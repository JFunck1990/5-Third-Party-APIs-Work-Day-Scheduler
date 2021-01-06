
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//each time block is color-coded to indicate weather it is in the past.
function timeColor(){
var d = new Date();
var n = d.getHours();
$(".hour").each(function(){
    var currentTIme = $(this).attr("data-time");
    //console.log("current time: "+currentTIme);
    //console.log("hour: "+n);
    //console.log(typeof currentTIme);
    //console.log(typeof n);

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
var theInput = $(this).sibling("input").value.trim();

window.localStorage.setItem(theInput);
}

$(".saveBtn").on("click", saveEvent);


// Trash delete button function
function destroy (event){
 var trash = $(this).siblings("input");

 localStorage.

 

}