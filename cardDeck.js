/* CardDeck.js*/
let emp = new Array();
emp[0] = 'Hearts';
emp[1] = "Spade";
emp[2] = "Club";
emp[3] = "Diamonds";
for(let i=0;i<emp.length;i++){
  for(let j=1;j<14;j++){
   console.log((j==1)?"Ace"+" "+emp[i]:
               (j==11)?"Jack"+" "+emp[i]:
               (j==12)?"queen"+" "+emp[i]:
               (j==13)?"king"+" "+emp[i]:
               j+" "+emp[i]
              );
  }

   console.log("---------------------");
}
