async function mylifeEasy(){
    let dataApi=await fetch('https://fakestoreapi.com/products')
    dataApi=await dataApi.json()
    console.log(dataApi)

dataApi.map((name)=>{
    let h1=document.createElement('h1')
    h1.innerHTML=title.title;
    let div=document.getElementById('demo')
    div.append(h1)
    let img=document.createElement('img')
    img.src= name.img
    img.style.width="200px"
    div.append(img)
});
}