let input = document.querySelector(".container input");
let btn = document.querySelector(".container button");
let p = document.querySelector(".container p");

let picker = (arr)=>{
    let random = Math.floor(Math.random() * arr.length);
    // console.log(random)
    p.innerText = `The random value is ${arr[random]}`;
}

let generator =(value)=>{
    // console.log(value);
    let arr = [];
    let str= ",";
    value=value.concat(str);
    let y=0;
    for(let i=0;i<value.length;i++){
        if(value[i]===","){
            let a = value.slice(y,i);
            // console.log(a);
            arr.push(a);
            // console.log(arr);
            y=i+1;
        }
    }
    picker(arr);
}

btn.addEventListener("click",()=>{
    // console.log("generated");
    let value = input.value;
    // console.log(value);
    generator(value);
})


