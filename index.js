random1 = Math.floor(Math.random() * 6)+1;
random2 = Math.floor(Math.random() * 6)+1;
//alert(random);
image1 = document.querySelectorAll("img")[0];
str1 = "images/dice" + random1 +".png"
image1.setAttribute("src",str1);

image2 = document.querySelectorAll("img")[1];
str2 = "images/dice" + random2 +".png"
image2.setAttribute("src",str2);

if(random1>random2)
{
  heading = document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if(random1 === random2)
{
  heading = document.querySelector("h1").innerHTML = "TIE";
}
else
{
  heading = document.querySelector("h1").innerHTML = "🚩 Player 2 wins";
}
