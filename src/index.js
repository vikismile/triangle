/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) { 
let sum = 0;
let a=0;
let length = preferences.length;
for(let i = 0; i< preferences.length; i++){
  n1=preferences[i] 
  if(n1<length+1){
    n2=preferences[n1-1]
    if(n2<length+1){
      n3=preferences[n2-1]
      if (n3<length+1){
        if (n3 === i+1 && n2 != i+1) sum++;
      }
    }
  }
}
return sum/3;
};
