function rotateRight(input, k) {
    if (k>0){
        for (var i = 0; i < k; i++){
            var last = input.pop();
            input.unshift(last) 
        }     
        return input;
    } else {
        return input="Steps argument must be positive number";
    }        
} 

// Input here
var input = [1,2,7,8,9];  // array
var k = 3;                // steps
console.log("Input: ", input);
console.log("k: ", k);
console.log(rotateRight(input, k));

module.exports = {
    rotateRight: rotateRight 
};