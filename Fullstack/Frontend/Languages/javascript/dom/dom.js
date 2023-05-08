let myarray=[{"userId": 4,"id": 72,"title": "suchi","completed": false},
              {"userId": 4,"id": 73,"title": "chandu","completed": true},
              {"userId": 4,"id": 74,"title": "puppy","completed": false},];



let narray=JSON.parse(JSON.stringify(myarray))
console.log(narray)
narray.map((title)=>{
    let h1=document.createElement('h1')
    h1.innerHTML=title.title;
    let div=document.getElementById('demo')
    div.append(h1)
})    




