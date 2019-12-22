/*The sentence is: I Love Mangoes And Strawberries!*/

string_to_array = function(str){
  return str.trim().split(" ");
};
/*Array of String*/
let arr = string_to_array("I Love Mangoes And Strawberries!");

/*Third word in array*/
console.log('Third word in array: '+arr[2]);
