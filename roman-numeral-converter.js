function convertToRoman(num) {
  let romanNum = [];
  while (num >= 1000) {
    num -= 1000;
    romanNum.push("M");
  }
  while (num >= 900) {
    num -= 900;
    romanNum.push("CM");
  }
    while (num >= 500) {
    num -= 500;
    romanNum.push("D");
  }
   while (num >= 400) {
    num -= 400;
    romanNum.push("CD");
  }
   while (num >= 100) {
    num -= 100;
    romanNum.push("C");
  }
     while (num >= 90) {
    num -= 90;
    romanNum.push("XC");
  }
     while (num >= 50) {
    num -= 50 ;
    romanNum.push("L");
  }
     while (num >= 40) {
    num -= 40;
    romanNum.push("XL");
  }
     while (num >= 10) {
    num -= 10;
    romanNum.push("X");
  }
     while (num >= 9) {
    num -= 9;
    romanNum.push("IX");
  }
     while (num >= 5) {
    num -= 5 ;
    romanNum.push("V");
  }
     while (num >= 4) {
    num -= 4;
    romanNum.push("IV");
  }
   while (num >= 1) {
    num -= 1 ;
    romanNum.push("I");
  }
  return romanNum.join("");
}

console.log(convertToRoman(3999));
