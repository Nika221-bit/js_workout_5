//square
function square(num){
    return num * num;

}
console.log(square(prompt("აიყვანე რიცხვი კვადრატში")));

//str lenght
function lenght(str){
    return str.length;
}
console.log(lenght(prompt("ჩაწერე სიტყვა ")));

//addition

function addition(addsum){
  let a = Number(prompt("ჩაწერე რიცხვი შესაკრებათ"))
  let b = Number(prompt("ჩაწერე რიცხვი მეორე შესაკრებათ"))
  let finish = a + b;
  return finish
}
console.log(addition());

//restricted age

function age(){
     let userage = Number(prompt("შეიყვანეთ თქვენი ასაკი"))
    if(userage > 18){
        console.log("შენ ხარ სრულწლოვანი")
        
    } else if(userage === 18){
        console.log("შენ ხარ სრულწლოვანი")
    }
    
    else if( userage < 18 && userage >0){
        console.log("შენ არ ხარ სრულწლოვანი")
    }
    else {
  console.log("შეიყვანე სწორი ბრძანება");
}
return userage;
}
age();
//iseven

function iseven(){
    let num = Number(prompt("შეიყვანეთ რიცხვი"))
    if(num % 2 === 0){
        console.log("even")
    }else (console.log("odd"))
    return num 

}
iseven();

//startwitha

function startwitha(str){ 
    let word = prompt("ჩაწერე სიტყვა ლათინურად");

    if(word.toLowerCase().startsWith("a")){
        console.log("სიტყვა იწეყება A-ზე")
    }
    else{
        console.log("სიტყვა არ იწყება A-ზე")
    }
}
startwitha()

//max
let arr = [12,43,53,70,86,80,43,68,]
const max = arr.reduce(maxnum)

function maxnum(accumulator,element){
   return Math.max(accumulator,element)
  

}
console.log(max)

//only even

let arr1 = [12, 43, 53, 70, 86, 80, 43, 68];

function getEvenNumbers(array) {
  return array.filter(num => num % 2 === 0);
}

let evennums = getEvenNumbers(arr1);
console.log(evennums); 

//add

let arr3 = [10,20,30,40,50]
let sum = arr3.reduce(add,0)
function add(accumulator,element){
    return accumulator + element

}
console.log(sum)