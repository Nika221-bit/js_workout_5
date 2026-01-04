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