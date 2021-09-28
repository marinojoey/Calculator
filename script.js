// Arithmetic
const add = function(...nums) {
	return nums[0] + nums[1]
};
const subtract = function(...nums) {
	return nums[0] - nums[1]
};
const multiply = function(...nums) {
    return nums[0] * nums[1]
};
const divide = function(...nums) {
    return nums[0] / nums[1]
};
// operator function
const operate = function(callback, ...nums) { 
    return callback(nums[0], nums[1])
    
};

console.log(operate(divide,2,2))
