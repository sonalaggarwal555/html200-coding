let a = 100;
let b = 80;
let c = 50;
let d = 20;
let i= 0;
do{
i= i+1;
  switch(i){
    case 1:
      console.log("1. c+d : "+(a+b));
      break;
    case 2:
      console.log("2. b-c : "+(b-c));
      break;
    case 3:
      console.log("3. c*d : "+(c*d));
      break;
    case 4:
      console.log("4. a/d : "+(a/d));
      break;
    case 5:
      console.log("5. b%c : "+(b%c));
      break;
     case 6:
      console.log("6. a-b*c/d : "+(a-b*c/d));
      break;
    case 7:
      console.log("7. a+b/c*d : "+(a+b/c*d));
      break;
    case 8:
      console.log("8. (a*b)*c-d : "+((a*b)+c-d));
      break;
    case 9:
      console.log("9. a/b+c*d : "+(a/b+c*d));
      break;
    case 10:
      console.log("10. a-b*c/d : "+(a-b*c/d));
      break;
    default:
      console.log("11. (((a%b)*c)/d) : "+(((a%b)*c)/d));
      break;
  }
}
while(i<11)
