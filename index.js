console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
var random1 = Math.floor(Math.random()*6)+1;

var randomimage = "dice" + random1 +".png";

var randomimagesource = "images/" + randomimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);

var random2 = Math.floor(Math.random()*6)+1;

var randomimagesource2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);

if(random1>random2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if(random2>random1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else
{
    document.querySelector("h1").innerHTML = "Its a Draw";
}
}