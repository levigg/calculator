$(function(){
	var answer;
	var afterNum;
	var	beforeNum;
	var operation = 'nothing';

	var currtext = '';

	$('#btn1').on('click',function() {
		currtext = currtext + '1';
		retResult();
	});

	$('#btn2').on('click',function() {
		currtext = currtext + '2';
		retResult();
	});

	$('#btn3').on('click',function() {
		currtext = currtext + '3'
		retResult();
	});

	$('#btn4').on('click',function() {
		currtext = currtext + '4';
		retResult();
	});

	$('#btn5').on('click',function() {
		currtext = currtext + '5';
		retResult();
	});

	$('#btn6').on('click',function() {
		currtext = currtext + '6';
		retResult();
	});

	$('#btn7').on('click',function() {
		currtext = currtext + '7';
		retResult();
	});

	$('#btn8').on('click',function() {
		currtext = currtext + '8';
		retResult();
	});

	$('#btn9').on('click',function() {
		currtext = currtext + '9';
		retResult();
	});

	$('#btn0').on('click',function() {
		currtext = currtext + '0';
		retResult();
	});
	$('#btnNegative').on('click',function() {
		currtext = '-' + currtext ;
		retResult();
	});

	$('#btnDot').on('click',function() {
		currtext=currtext+'.';
		retResult();
	})

	$('#btnClear').on('click',function() {
		currtext = '';
		beforeNum=null;
		afterNum=null;
		answer=null;
		operation=null;	
		retResult();
	});

	$('#btnEqual').on('click',function() {	
		afterNum = parseFloat(currtext);
		calculate(operation);		
		retResult();
	});

	//算式符號	
	$('#btnAdd').on('click',function() {
		if(operation = 'nothing'){
			operation = '+';
			beforeNum = parseFloat(currtext);			
		}else{
			afterNum = parseFloat(currtext);
			calculate(operation);//new currtext
			beforeNum = parseFloat(currtext);
			operation='+';
		};
		retResult();//print new currtext
		currtext = '';
	});

	$('#btnMinus').on('click',function() {
		if(operation = 'nothing'){
			operation = '-';
			beforeNum = parseFloat(currtext);			
		}else{
			afterNum = parseFloat(currtext);
			calculate(operation);//new currtext
			beforeNum = parseFloat(currtext);
			operation='-';
		};
		retResult();//print new currtext
		currtext = '';
	});

	$('#btnMultiply').on('click',function() {
		if(operation = 'nothing'){
			operation = '*';
			beforeNum = parseFloat(currtext);			
		}else{
			afterNum = parseFloat(currtext);
			calculate(operation);//new currtext
			beforeNum = parseFloat(currtext);
			operation='*';
		};
		retResult();//print new currtext
		currtext = '';
	});

	$('#btnDivide').on('click',function() {
		if(operation = 'nothing'){
			operation = '/';
			beforeNum = parseFloat(currtext);			
		}else{
			afterNum = parseFloat(currtext);
			calculate(operation);//new currtext
			beforeNum = parseFloat(currtext);
			operation='/';
		};
		retResult();//print new currtext
		currtext = '';
	});

	function calculate (operation){
		if(operation=='+') {
			answer = beforeNum+afterNum;
			currtext = ""+answer;			
		}else if (operation=='-') {
			answer = beforeNum-afterNum;
			currtext = ""+answer;			
		}else if (operation=='*') {
			answer = beforeNum*afterNum;
			currtext = ""+answer;			
		}else if (operation=='/') {
			answer = beforeNum/afterNum;	
			currtext = ""+answer;		
		}else{
		currtext = ""+currtext;
		};
		beforeNum=null;
		afterNum=null;
		answer=null;
		operation=null;	
	};

	function retResult(){
		$('#result').text(currtext);
	};				
});