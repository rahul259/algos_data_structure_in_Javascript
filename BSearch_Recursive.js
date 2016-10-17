function BSearch_R(array, startIndex, endIndex, item){
   if(!array instanceof Array)
     return;
   
   var mid = parseInt((startIndex+endIndex)/2);
   if(array[mid] === item)
     return mid;

   if(startIndex == endIndex)
	   return
 if(item < array[mid])
	 return BSearch_R(array,startIndex,mid-1,item);
   else
	 return BSearch_R(array,mid+1, endIndex, item);
}

BSearch_R([1,2,4,6,78],0,4,87);
BSearch_R([1,2,4,6,87],0,4,87);
BSearch_R([1,2,87,88,98],0,4,87);
