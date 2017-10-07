var catModel=["../Images/firstCat.jpg",
            "../Images/secondCat.jpg",
			"../Images/thirdCat.jpg",
			"../Images/fourthCat.jpg"];
			
var Cat = function(name,i,co){
	obj ={}
	obj.name = name[i];
	obj.countLikes =co;
	obj.counter = function(){
		 return ++this.countLikes;
	}
	return obj;
};



(function(){
	
	let catplaceHolder = document.getElementById("catImg");
	let counterHolder = document.getElementById("showCount");
	let dropdownSelector = document.getElementById("choose");
	let indexSel =0;
    const cat1 = Cat(catModel,0,0);
	const cat2 = Cat(catModel,1,0);
	const cat3 = Cat(catModel,2,0);
	const cat4 = Cat(catModel,3,0);
	var test = cat1;
	
	dropdownSelector.addEventListener("change",function(index){
	  //get the selected index
	  indexSel = index.currentTarget.selectedIndex;
	  
	  catImageUrl = catModel[indexSel];
	  
	  console.log("current index "+indexSel);
	  switch(indexSel){
		  case 0: test = cat1;break;
		  case 1: test = cat2;break;
		  case 2: test =cat3;break;
		  case 3:test = cat4;break;
	  }
	  catplaceHolder.src = test.name;	  
	  
	 console.log(test.name);
	  counterHolder.innerHTML = test.countLikes;
	
	});
	
    
	
	catplaceHolder.src = test.name;
	counterHolder.innerHTML = test.countLikes;
	
	catplaceHolder.addEventListener("click",function(){
		  counterHolder.innerHTML = test.counter();
			  
			  
		 });
		 
	
	
	
	
})();