const stdList = ["Abul", "Babul", "Kabul", "Bulbul"];
stdList.push("Kamal", "Jamal");
stdList.pop();
stdList.unshift("Ratul", "Sajal");
stdList.shift();
console.log(stdList[0]);
console.log(stdList);

let num = 0;

while (num < 10){
    console.log(num);
    num++;
}

for (let i = 0; i < stdList.length; i++) {
    console.log(i, stdList[i]);
}

for (let j = 0; j < 10; j++) {
    console.log("Hello World");
}

for (let k = 0; k < 10; k += 2) {
    console.log(k);
}

for (let l = 9; l >= 0; l--) {
    console.log(l);
}
