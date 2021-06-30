function checkCashRegister(priceI, cashI, cidI) {
let price = priceI*100;
let cash = cashI*100;
let cid = [...cidI];
let total2 = 0;
for (let z = 0; z < cid.length ; z++){
  cid[z][1]= Math.round(cid[z][1]*100);
}
  let change = cash - price; 
     let totalCid = 0;
     let statusChange = {
       status: "OPEN",
       change: [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0],["PENNY", 0]]
     }
  for (let i = 0; i < cid.length ; i++){
    totalCid += cid[i][1];
  }
  if (change > totalCid){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (change == 0) {
    return {status: "closed", cidI}
  } else {

  while (change >= 10000 && cid[8][1] >= 10000) {
    change -= 10000;
    cid[8][1] -= 10000;
    statusChange.change[0][1]+=10000;
  }
    while (change >= 2000 && cid[7][1] >= 2000){
    change -= 2000;
    cid[7][1] -= 2000;
    statusChange.change[1][1]+= 2000;
  }
  while (change >= 1000 && cid[6][1] >= 1000) {
    change -= 1000;
    cid[6][1] -= 1000;
    statusChange.change[2][1]+=1000;
  }
    while (change >= 500 && cid[5][1] >= 500) {
    change -= 500;
    cid[5][1] -= 500;
    statusChange.change[3][1]+=500;
  }
    while (change >= 100 && cid[4][1] >= 100) {
    change -= 100;
    cid[4][1] -= 100;
    statusChange.change[4][1]+=100;
  }
    while (change >= 25 && cid[3][1] >= 25) {
    change -= 25;
    cid[3][1] -= 25;
    statusChange.change[5][1]+=25;
  }
    while (change >= 10 && cid[2][1] >= 10) {
    change -= 10;
    cid[2][1] -= 10;
    statusChange.change[6][1]+=10;
  }
    while (change >= 5 && cid[1][1] >= 5) {
    change -= 5;
    cid[1][1] -= 5;
    statusChange.change[7][1]+=5;
  }
      while (change >= 1 && cid[0][1] >= 1) {
    change -= 1;
    cid[0][1] -= 1;
    statusChange.change[8][1]+=1;
  }  
  for (let n = 0; n < statusChange.change.length ; n++){
  statusChange.change[n][1] = statusChange.change[n][1]/100;
  }
   for (let f = 0; f < statusChange.change.length ; f++){
    total2 += cid[f][1];}
  if (change !== 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (change == 0 && total2 == 0){
    statusChange.status = "CLOSED";
    statusChange.change.reverse();
    return statusChange;
  }
  //remove array elements with 0 value.
  for (let j = statusChange.change.length - 1 ; j >= 0 ; j--){
    if (statusChange.change[j][1] == 0) {
    statusChange.change.splice(j, 1);
  }}
  return statusChange;
}
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
