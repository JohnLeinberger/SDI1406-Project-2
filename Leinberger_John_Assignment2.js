//John Leinberger
//SDI 1406
//6/9/2014
//Project 2

//variables
var canOfSoup;
var cannedMeat;
var waterCount;
var cookTime;
var continueHiking = false;
var direction;

//prompt for procedure
direction = prompt("What direction would you like to head, North or South?", "Enter North or South");

//procedure for directional heading
directionProcedure = function (direction){
    if(direction === "North"){
        console.log("To the North the road is pretty empty, you can see anyone or anything coming from miles in either direction.");
    }else{
        console.log("To the South you see what appears to be some kind of beast roaming the forest, he doesn't seem to have noticed you.");
    }
    console.log("You decide it's in your best interest to continue North, putting more distance between you and the beast.");
};
