function showMultiplicationTable(x) {
    for (var index = 1; index < 10; index++) {
        console.log(x+"x"+index+"="+(x*index));
    }
}
showMultiplicationTable(7);

for (let ev=0; ev<=10; ev++){
    let random = Math.ceil(Math.random()*(200-20)+20);
    if(random % 2 !== 0){
        console.log(random+"is odd");}
    else{
        console.log(random + "is even");
    }
}

showMultiplicationTable(7);

for (let ev = 0; ev<10; ev++) {
    let random = Math.ceil(Math.random() * (200 - 20) + 20);
    if (random % 2 !== 0) {
        console.log(random + " is odd");}
    else {
        console.log(random + " is even")
    }

}



for (var index = 1,number = "";index < 10;index++) {
    number += "1";
    console.log(index * number)}


for (var index = 100; index > 0; index = index -5) {
    console.log(index);
}

