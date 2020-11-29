
//随机颜色
function randomColor(){
    var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ",1)";
    return str;
}


function getElementsByClassName(node,classStr)
{
	//1获取node这个节点下所有的子节点
	var nodes = node.getElementsByTagName("*");
	var arr=[];//存放符合条件的节点
	for(var i=0; i<node.length; i++)
	{
		if(nodes[i].className === classStr)
		{
			arr.push(nodes[i]);
		}
	}
	return arr;
}
			
//跨浏览器兼容
function getStyle(node,cssStyle)
{
	return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}

function showTime()
{
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth()+1;//0-11月
	var date = d.getDate();
	
	var week = d.getDay();//0-6 0是周日
	week=numOfChinese(week);
	
	var hour =doubleNum(d.getHours());
	
	var min =doubleNum(d.getMinutes());
	
	var sec =doubleNum(d.getSeconds());
	
	var str = year + "年" + month + "月" + date + "日 星期" + week + " " + hour + ":" + min + ":" + sec;
	return str; 	
}

//数字转成中文
function numOfChinese(num)
{
	var arr = ["日","一","二","三","四","五","六"];
	return arr[num];
}
function doubleNum(n)
{
	if(n<10)
	{
		return "0" + n;
	}
	else return n;
}

//纯数字验证码
function numTestCode(n){
	var arr = []; //存储生成的数字
	for(var i = 0; i < n; i++){
		var num = parseInt(Math.random() * 10);
		arr.push(num);
	}
	return arr.join("");
}
//非纯数字验证码
function testCode(n){
	var arr = [];
	for(var i = 0; i < n; i++){
		var num = parseInt(Math.random() * 123);
		if(num >= 0 && num <= 9){
			arr.push(num);
		}else if(num >= 97 && num <= 122 || num >= 65 && num <= 90){
			arr.push(String.fromCharCode(num));
		}else{
			i--;
		}
	}

	return arr.join("");
}

//冒泡排序升序
function BubbleSortAsc(arr)
{
	for(var i = 0; i < arr.length-1; i++)
	{
		for(var j = 0; j < arr.length - (i + 1); j++)
		{
			if(arr[j] > arr[j + 1])
			{
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}
//冒泡排序降序
function BubbleSortDesc(arr)
{
	for(var i = 0; i < arr.length-1; i++)
	{
		for(var j = 0; j < arr.length - (i + 1); j++)
		{
			if(arr[j] < arr[j + 1])
			{
				var tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}

//选择排序升序
function changeSortAsc(arr)
{
	for(var i = 0; i < arr.length - 1; i++)
	{
		for(var j = i + 1;j < arr.length; j++)
		{
			if(arr[i] > arr[j])
			{
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}				
}
//选择排序降序
function changeSortDesc(arr)
{
	for(var i = 0; i < arr.length - 1; i++)
	{
		for(var j = i + 1;j < arr.length; j++)
		{
			if(arr[i] < arr[j])
			{
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}				
}


