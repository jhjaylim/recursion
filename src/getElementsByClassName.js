// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//document.body
//element.childNodes
//element.classList
var count = 0;
var nodeAdded = 0;
var getElementsByClassName = function(className, node) {
	var myCount = count;
	

	var myElementList = [];
	if (node===undefined) {
		node = document.body;	
	}

	if (hasClassName(node.classList, className)) {
	
		myElementList.push(node);
		
	}

	if (node.childNodes.length!==0) {
		
		for (var i=0; i<node.childNodes.length; i++) {
			
			myConcat(myElementList, getElementsByClassName(className, node.childNodes[i]))
			
		}
	}

	return myElementList;
 
};
function hasClassName(classList, className){

	var result = false;
	if (classList&& classList.contains(className)) {
		return true;
	}
	return result;
}

function myConcat(arr1,arr2) {
	
	
	for (j=0; j<arr2.length;j++) {
		arr1.push(arr2[j]);
	}
	

}






