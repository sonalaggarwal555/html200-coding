/*Array of 5 strings*/
let arr = ['I','LOVE','Mangoes','AND','STRAWBERRIES'];
for(let i=0;i<arr.length;i++){
console.log(i+','+arr[i]);
}
/*Adding an element to the end of the array*/
arr.push('pineapple');
console.log('-> Adding an element to the end of the array:'+arr);

/*Remove third element from array*/
arr.splice(2,1);
console.log('-> Remove third element from array: '+arr);

/*String from the elements and comma separated*/
console.log('-> String from the elements and comma separated '+arr.join(','));
