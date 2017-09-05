/**
 * Definition for singly-linked list.
 */
 function ListNode(val) {
      this.val = val;
      this.next = null;
 }
 
//order，顺序先遍历长链找到同位起点
var addTwoNumbersOrder = function(l1, l2) {
    var p = l1,
    	q = l2, 
    	len1 = 0,
    	len2 = 0,
    	head = new ListNode(0);
    	flag = 0,
    	digit = new Array();
    while(!!p){
    	p = p.next;
    	len1++;
    }
    while(!!q){
    	q = q.next;
    	len2++;
    }
    if(len1 >= len2){
    	p = l1;
    	q = l2;
    }
    else{
    	p = l2;
    	q = l1;
    }
    res = head;
    for(let i = 0; i < Math.abs(len1 - len2); i++){
    	res.next = new ListNode(p.val);
    	p = p.next;
    	res = res.next;
    }
    while(!!p){
    	res.next = new ListNode((p.val + q.val + flag) % 10);
    	if(p.val + q.val + flag >= 10){
    		flag = 1;
    	}
    	else{
    		flag = 0;
    	}
    	p = p.next;
    	q = q.next;
    	res = res.next;
    }
    if(flag === 1){
    	res.next = new ListNode(1);
    }
    return head.next;
};

//reverse order
var addTwoNumbers = function(l1, l2) {
    var p = l1,
    	q = l2, 
    	len1 = 0,
    	len2 = 0,
    	head = new ListNode(0);
    	flag = 0,
    	res = head;
    while(!!p || !!q){
    	//error: 开始没给条件运算符加（），一元运算优先级要高于条件运算符
    	var sum = (!!p ? p.val : 0) + (!!q ? q.val : 0) + flag;
    	res.next = new ListNode(sum % 10);
    	if(sum >= 10){
    		flag = 1;
    	}
    	else{
    		flag = 0;
    	}
    	p = !!p ? p.next : null;
    	q = !!q ? q.next : null;
    	res = res.next;
    }
    if(flag === 1){
    	res.next = new ListNode(1);
    }
    return head.next;
};

//test
var p1 = new ListNode(2);
var p2 = new ListNode(4);
var p3 = new ListNode(3);
var q1 = new ListNode(5);
var q2 = new ListNode(6);
var q3 = new ListNode(4);
p1.next = p2;
p2.next = p3;
q1.next = q2;
q2.next = q3;
debugger;
var res = addTwoNumbers(p1,q1);
console.log(res);

