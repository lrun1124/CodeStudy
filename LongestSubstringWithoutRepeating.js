/**
 * @param {string} s
 * @return {number}
 */
 //Time limit exceeded
var lengthOfLongestSubstring = function(s) {
	if(s === '') return 0;
    for(let i = s.length; i > 0; i-- ){
    	for(let j = 0; (j + i) <= s.length; j++){
    		if(!checkDup(s.substring(j, j + i))){
    			return i;
    		}
    	}
    }
};

var checkDup = function(s){
	var set = new Set();
	for(let i = 0; i < s.length; i++){
		var index = s.charAt(i);
		if(set.has(index)){
			return true;
		}
		else{
			set.add(index);
		}
	}
	return false;
};

debugger;
var s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

//slide window
var lengthOfLongestSubstring = function(s) {
	var i = 0,
		j = 0,
		len = s.length;
		res = 0
		set = new Set();
	while(i < len && j < len){
		if(set.has(s.charAt(j))){
			set.delete(charAt(i));
			i++;
		}
		else{
			set.add(s.charAt(j));
			res = Math.max(res, j - i);
			j++;
		}
	}
	return res;
};
