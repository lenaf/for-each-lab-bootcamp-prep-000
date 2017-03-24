function iterativeLog(ary){
  ary.forEach(function(element,index){
    console.log(`${index}: ${element}`)
  })
};

function iterate(callback){
  ary=[1,2,3,4];
  ary.forEach(callback);
  return ary;
}

function doToArray(ary, callback){
  ary.forEach(callback);
}
