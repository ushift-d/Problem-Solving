// Two inputs for function 
// Check if inputs is an anagram
var anagram = function (string1, string2) {
    if (string1.length !== string2.length) {
        return false; 
         
    }
    string1 = string1.toLowerCase(); 
    string2 = string2.toLowerCase();
    
    str1arr = [];
    str2arr = [];
    for (var i = 0; i < string1.length; i++) {
    str1arr.push(string1[i]);
    str2arr.push(string2[i]);
    }
    
    
    str1arr.sort();
    str2arr.sort();

    
    
    for (var j = 0; j < str1arr.length; i++){
        if (str1arr[i] !== str2arr[i]) {
            return false;
            
        }
      
        return true;
    }
};
    /*for length add all characters into separate arrays
    sort the arrays and check if each are the same*/ 
     // edge case length must be the same 
     // edge case must be input of string
     // edge case if string has upper/lower case letters
// return boolean (true or false)

// tests coat, taco