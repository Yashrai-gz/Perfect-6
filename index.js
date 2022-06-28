
let im1=document.querySelectorAll("img")[0];
let score1=(Math.floor(Math.random()*6)+1 );
let dem="images/dice" + score1 + ".png";
im1.setAttribute("src", dem);

let im2=document.querySelectorAll("img")[1];
let score2=(Math.floor(Math.random()*6)+1 );
let dem1="images/dice" + score2+ ".png";
im2.setAttribute("src", dem1);

if(score1>score2)
{
    document.querySelector("h1").innerText=" 🎊🎉Player 1 wins";
    document.querySelector("p").classList.toggle("celeb2");   

} 
else if(score2>score1)
{
    document.querySelector("h1").innerText="Player 2 wins 🎉🎊";
    document.querySelector("p").classList.toggle(" celeb2");   
}
else{
    document.querySelector("h1").innerText="🎊Draw🎊";
}