let totalp1=[]
let totalp2=[]
let winner=document.getElementById('winner announce')
function randomp1(){
  let total1= document.getElementById('total')
  let num= Math.floor(Math.random()*6+1)
  let ran= document.getElementById('random')
  ran.innerHTML=`${ num}`
  totalp1.push(num)
  let score=totalp1.reduce((a,b)=>a+b)
  total1.innerHTML=score
  if(score>=50){
  winner.innerHTML="PLAYER-1 WINNNER"
}
}
function randomp2(){
let total2= document.getElementById('Total')
let num= Math.floor(Math.random()*6+1)
let ran= document.getElementById('randomscore')
ran.innerHTML=`${ num}`
totalp2.push(num)
let score=totalp2.reduce((a,b)=>a+b)
  total2.innerHTML=score
if(score>=50){
  winner.innerHTML="PLAYER-2 WINNNER"
}
}

