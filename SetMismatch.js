//use map
var findErrorNums = function(nums) {
    var m = new Map(),
    	mis,
    	dup;
    for(let i = 0; i < nums.length; i++){
    	var current = nums[i];
    	if(m.has(current)){
    		m.set(current, m.get(current) + 1);
    	}
    	else{
    		m.set(current, 1);
    	}
    }
    for(let i = 1; i <= nums.length; i++){
    	var current = i;
    	if(m.has(current)){
    		if(m.get(current) > 1)
    		dup = current;
    	}
    	else{
    		mis = current;
    	}
    }
    return [dup, mis];
};

debugger;
findErrorNums([1,2,2,4]);

//use invert constans space
var findErrorNums = function(nums) {
	var mis, dup;
	nums.forEach(function(item, index, nums){
		if(nums[Math.abs(item - 1)] < 0){
			dup = Math.abs(item);
		}
		else{
			nums[item - 1] *= -1; 
		}
	});
	nums.forEach(function(item, index){
		if(item > 0){
			mis = index + 1;
		}
	});
	return [dup, mis];
}

debugger;
findErrorNums([1,2,2,4]);