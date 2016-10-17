function Queue(sizeOfQueue){
  var dataItems = [];
  var head = -1;
  var tail = -1;
  this.size = sizeOfQueue ? sizeOfQueue : 4;
  this.isEmpty = function(){
    return head == tail;
  }
  this.isFull = function(){
     return tail === (this.size-1);
  }
  
  this.addItem = function(item){
     if(!this.isFull()){
	    dataItems[++tail] = item ? item : 0;
	 }else{
	   console.log("Queue IS FULL");
	 }
  };
  
  this.removeItem = function(){
      if(!this.isEmpty()){
	     var removedData = dataItems[++head];
		 if(head === tail)
	       head = tail = -1;
	     return removedData ;
	  }else{
	    console.log("Stack IS EMPTY");
	  }
  };
  
  this.showItems = function(){
	  var p = head;
	  while(p<=tail){
		  console.log(dataItems[++p]);
	  }
  }

}