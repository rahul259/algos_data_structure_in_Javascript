
function Merge(arr1,arr2){
	
	debugger;
  var l = arr1.length;
  var r = arr2.length;
  var min = Math.min(l,r);
  var i = 0;
  while(i < min){
    if(arr1[i] > arr2[i]){
	   var temp = arr1[i];
	   arr1[i] = arr2[i];
	   arr2[i] = temp;
	}
	i+=1;
  };
  
  return arr1.push.apply(arr1,arr2)
}
function MergeSort(arr,start,end){
  if(arr[start] > arr[end]){
     var temp  = arr[start];
	 arr[start]  = arr[end];
	 arr[end] = temp;
  }else{
    var mid = (start+end)/2;
	MergeSort(arr,start,)
  }
}