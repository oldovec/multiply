module.exports = function multiply(first, second) {
let massFirst=first.split("").reverse();
  let massSecond=second.split("").reverse();
  let massSum=[];
  for(i=0;i<massFirst.length;i++) {
      for(j=0;j<massSecond.length;j++)
      {
          massSum[i+j]? massSum[i+j]+=massFirst[i]*massSecond[j] : massSum[i+j]=massFirst[i]*massSecond[j];
      }
  }
  for(i=0;i<massSum.length-1;i++) {
      massSum[i+1]+=massSum[i]/10|0;
      massSum[i]%=10;
      if(i==massSum.length-2 && massSum[massSum.length-1]>9) 
          {
              massSum[massSum.length]=0;
          }
  }
  let resultMultiply=massSum.reverse().join('');
  return resultMultiply;
}
