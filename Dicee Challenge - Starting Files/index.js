var p1=Math.random()*6;
var p2=Math.random()*6;
p1=Math.floor(p1)+1;
p2=Math.floor(p2)+1;

if (p1>p2)
 {
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
 else if(p2>p1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins";

}

else
{
  document.querySelector("h1").innerHTML="Draw";

}

var v1="dice"+p1+".png";
var v2="dice"+p2+".png";
document.querySelector(".img1").setAttribute("src", "images/"+v1);
document.querySelector(".img2").setAttribute("src", "images/"+v2);
