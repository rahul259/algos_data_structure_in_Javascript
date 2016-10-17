function isAscendingPattern(arr){
   var ascCount = 0;
   var descCount = 0;
   for(var i=1;i<arr.length;i++){
      if(arr[i]>arr[i-1]){
	    ascCount++;
	  }else if(arr[i]<arr[i-1]){
	    descCount++;
	  }
   }
   
   return ascCount>descCount? true : false;
}


function findIndexesOfNonSort(arr, ascDescFlg){
        var indexes = [];
        for(var i=1;i<arr.length;i++){
		    if((arr[i-1]<arr[i]) !== ascDescFlg){
			    indexes.push(i-1);
			}
		}
		
		return indexes;

}

function main(){
  var arr = [1,2,3,5,4,6,11,8];
  console.log(findIndexesOfNonSort(arr, isAscendingPattern(arr)))
}

main();