
var randomNumber1 = Math.ceil(Math.random()*6);

var randomNumber2 = Math.ceil(Math.random()*6);


//Method 1
// var diceImage = "images/dice" + randomNumber1 + ".png";

// var image1= document.querySelectorAll("img")[0];

// image1.setAttribute("src",diceImage);




// var diceImage = "images/dice" + randomNumber2 + ".png";

// var image2= document.querySelectorAll("img")[1];

// image2.setAttribute("src",diceImage);







//Method 2
if(randomNumber1===1)
{
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(randomNumber1===2)
{
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(randomNumber1===3)
{
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(randomNumber1===4)
{
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(randomNumber1===5)
{
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else
{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}


var randomNumber2 = Math.ceil(Math.random()*6);

if(randomNumber2===1)
{
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(randomNumber2===2)
{
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(randomNumber2===3)
{
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(randomNumber2===4)
{
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(randomNumber2===5)
{
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else
{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}



// setAttribute("h1","Draw!");
// setAttribute("h1","Player 1 wins!")
// setAttribute("h1","Player 2 wins!")




if(randomNumber2===randomNumber1)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber2<randomNumber1){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else {
    document.querySelector("h1").innerHTML="Player 2 wins!";
}

