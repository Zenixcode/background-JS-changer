const changerNode = document.getElementById("changer-btn");//btn gets stored into a var to use later 
const body = document.querySelector("body");//the body element gets selected and stored
//let colors = prompt("what color do you want");

let colors = ['pink','red','orange','purple','blue']; //the colors used are stored in the array

function changeColor(){
    //changes to the color the user asked for
    //document.getElementById("body").style.background = colors.toLowerCase(colors);

    const colorLoop = Math.floor(Math.random()*colors.length  ) //to make it loop through I used Math.floor
    //to make it solid numbers then math.random operator starting from 0 till the arrays length to choose a random one


        document.body.style.background = colors[colorLoop]; //then changed the body background using the colors
        //array and using the color loop inside to cycle through it
    
}

changerNode.addEventListener('click',changeColor);