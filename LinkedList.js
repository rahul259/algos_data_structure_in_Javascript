function Node(item){
  this.item = item ? item : null;
  this.next = null;
}

var Head = new Node();

function displayItems(){
 var temp = Head;
 while(temp.next)
   {
	console.log(temp.next.item);
	temp = temp.next;
   }
}
function AddItem(item){
   var temp = Head;
   var  newNode = new Node(item);
   while(temp.next){
	   temp = temp.next;
   }
   temp.next = newNode;
   displayItems();
}

function DeleteItem(item){
	var temp = Head;
	while(temp.next){
		if(temp.next.item === item){
			temp.next = temp.next.next;
		}
		temp = temp.next;
	}
	
	displayItems();
}

AddItem(3);
AddItem(5);
AddItem(8);
AddItem(7);

DeleteItem(8)