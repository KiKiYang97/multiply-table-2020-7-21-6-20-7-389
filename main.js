function createMultiplyTable(start, end) {
  if(isNumbersValid(start,end)){
    return generateMultiplyTable(start,end);
  }
  return null;
}
function isNumbersValid(start,end){
  var flag=true;
  if(start>end){
    flag = false;
  }
  if((start>1000||start<1)&&(end>1000||end<1)){
    flag = false;
  }
  return flag;
}
function generateMultiplyTable(start,end){
  var table="";
  for(let i=start; i<=end;i++){
    for(let j = start; j<=i; j++){
      table += printMultiple(j,i);
      if(j<i) table+="\t";
    }
    if(i<end)  table += "\n";
  }
  return table;
}
function printMultiple(multiplier,multiplicand){
  var product = multiplier * multiplicand;
  return multiplier + "*"+ multiplicand+"="+product;
}
module.exports = {
  createMultiplyTable,
};
