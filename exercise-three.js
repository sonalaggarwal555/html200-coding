/*The sentence is: I Love Mangoes And Strawberries!*/
string_to_array = function(str)
{
  return str.trim().split(" ");
};
/*Array of String*/
let arr = string_to_array("I Love Mangoes And Strawberries");
console.log(arr);

/*for loop to console log all of the elements plus the index and a comma*/
for(let i=0;i<arr.length;i++)
{
  console.log(i+','+arr[i]);
}
