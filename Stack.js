function Stack(sizeOfStack){
  var dataItems = [];
  var top = -1;
  this.size = sizeOfStack ? sizeOfStack : 4;
  this.isEmpty = function(){
    return top === -1;
  }
  this.isFull = function(){
     return top === (this.size-1);
  }
  
  this.addItem = function(item){
     if(!this.isFull()){
	    dataItems[++top] = item ? item : 0;
	 }else{
	   console.log("Stack IS FULL");
	 }
  };
  
  this.removeItem = function(){
      if(!this.isEmpty()){
	     return dataItems[top--];
	  }else{
	    console.log("Stack IS EMPTY");
	  }
  };
  
  this.showItems = function(){
	  var p = top;
	  while(p!=-1){
		  console.log(dataItems[p--]);
	  }
  }

}