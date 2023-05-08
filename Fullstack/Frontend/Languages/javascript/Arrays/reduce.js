let array=[3,5,6,3,7,1,7,9];
let uniquearrays=array.reduce((values,currentvalues)=>{
    if(!values.includes(currentvalues)){
        values.push(currentvalues);
    }
    return values;
},[])
console.log(uniquearrays);