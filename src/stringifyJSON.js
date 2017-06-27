// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // your code goes here
  var myString = "";

  

  if (typeof obj ==='boolean') {
  	if (obj) {
  		myString = myString + 'true';
  	} else {
  		myString =myString + 'false';
  	}
  }

 //if obj is object
 

 if (typeof obj ==='string') {
 	myString='"'+obj+'"';
 }
 // if obj === string
if (typeof obj ==='number') {
	myString= myString + obj.toString();
}


 //if obj=== array

 if (Array.isArray(obj)) {
 	myString = myString + '[';
 	for (var i = 0; i<obj.length; i++) {
 		if (i ===0) {
 			myString = myString + stringifyJSON(obj[i]);
 		} else {
 			myString = myString +  ',' + stringifyJSON(obj[i]);
 		}
 	}
 	myString = myString+ ']';

  } else if (typeof obj ==='object') {

  	if (obj===null) {
  		
  		myString="null";
  	} else if (isEmpty(obj)) {	
  		myString = "{}";
 	} else {
 		
 		myString = myString + "{";
 		for (var x in obj) {
 			
 			if (obj[x]!==undefined&&x!=="functions") {
 				if (myString==="{") {
 					
 					myString = myString + '"'+ x + '":' + stringifyJSON(obj[x]);
 				} else {
 					
 					myString = myString + ',"'+ x + '":' + stringifyJSON(obj[x]);
 				}

 			}


 			
 		
 		

 		}
 		myString = myString + "}";
 	}
  }
  
 	return myString;
 	
 

 };

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

