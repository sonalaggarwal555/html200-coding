/*The sentence is: I Love Mangoes And Strawberries!*/
string_to_array = function(str){
  return str.trim().split(" ");
};
/*Array of String*/
let arr = string_to_array("I Love Mangoes And Strawberries !");
let arr = ['Vanilla','Strawberry','Butterscotch','Chocolate','Caramel'];
for(let i=0;i<arr.length;i++){
  console.log(i+','+arr[i]);
}
