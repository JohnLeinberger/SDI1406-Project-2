//John Leinberger
//SDI 1406
//6/9/2014
//Project 2

//variables
var canOfSoup = "Cream of Mushroom";
var cannedMeat = "Mystery Meat";
var waterCount;
var newFoodName;
var cookTime;
var timeToCook = false;
var singASong = false;
var direction;
var distanceHiked = 0;



//procedure for directional heading
function directionProcedure(direction){
    
    if(direction === "North"){
        console.log("To the North the road is pretty empty, you can see anyone or anything coming from miles in either direction.");
    }else{
        console.log("To the South you see what appears to be some kind of beast roaming the forest, he doesn't seem to have noticed you.");
    }
    console.log("You decide it's in your best interest to continue North, putting more distance between you and the beast.");

};

//boolean function with two arguments
function travelDistance(distanceHiked, singASong) {
    
    //continues the loop for the desired distance to hike
    while(distanceHiked > 1 && (singASong === true || singASong === false)){
        
        distanceHiked--;
        console.log("You have " + distanceHiked + " miles to go, until you can rest.");
        
        if (singASong === true) {
            
            console.log("You sing a new song during mile " + distanceHiked + ".");
            
        }else{
            
            console.log("Your mind aimlessly wanders about all the different things hiding in the woods...");
            
        }
        
        console.log("You've reached the end of the distance you desired to travel today.");
        
    }
    
    return true;
};

//string function, combines the two types of food into a new food name
function foodCreator(cannedMeat, canOfSoup) {
    
    var foodName = canOfSoup+" with "+cannedMeat;
    
    return foodName;
    
}

//main code

//prompt for procedure
direction = prompt("What direction would you like to head, North or South?", "Enter North or South");

//call to directionProcedure function
directionProcedure(direction);

//arguments for boolean function
distanceHiked = parseInt(prompt("Enter the number of miles you want to hike today: ", "Enter the number of miles."));
singASong = confirm("Do you want to sing a song while you hike?");

//call to travelDistance function
timeToCook = travelDistance(distanceHiked, singASong);

//call to foodCreator function
newFoodName = foodCreator(cannedMeat, canOfSoup);
