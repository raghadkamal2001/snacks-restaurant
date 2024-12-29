let name = prompt("your name:");
let gender = prompt ("gender:");
if (gender == `male`){alert (`welcome Mr. ${name}`)}
else if (gender== `female`){alert(`Welcome Ms. ${name}`)}
else {
    alert(`Welcome, ${name}!`);
}

let ask = confirm("do want you to order shawrma, zinger, burger")
let ordername = prompt(" write your order?")
let ordre = alert ("your order is being prepared")

console.log(`${name} ${ordername}`);


let number = 4;
let numbername = "";
switch(number){
    case 1:
        numbername = "ONE";
    break;
    case 2:
        numbername = "TWO";
    break;
    case 3:
        numbername = "THREE";
    break;
    case 4:
        numbername = "FOUR";
    break;
    case 5:
        numbername = "FIVE";
    break;
    case 6:
        numbername = "SIX";
    break;

    case 7:
        numbername = "SEVEN";
    break;
    
    case 8:
        numbername = "EIGHT";
    break;
    case 9:
        numbername = "NINE";
    break;

    default:
        nmbername = "SEVEN";
    break;

}
console.log(numbername)
