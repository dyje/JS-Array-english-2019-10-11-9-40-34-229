// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
var checkA = Array.isArray(a);
var checkB = Array.isArray(b);
console.log(checkA);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var output = '';
for(let i=0; i<a.length; i++)
	{
		a[i]*=2;
		output += a[i] + (i<(a.length-1)?',':null);
	}
console.log("["+output+"]");

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var output ="";
		for(let i=0; i<colors.length; i++)
		{
		 output+=colors[i];
			if(i<colors.length-1)
			{
			output+=" ";
			}
		}
		console.log("case1: "+ output);

		output=output.replaceAll(" ", "+");
		console.log("case2: "+output);
		
		output=output.replaceAll("+", ",");
		console.log("case3: "+output);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a,b) {return b-a})
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var mf = 1;
var m = 0;
var item = "";
for (var i=0; i<arr1.length; i++)
	{
		for (var j=i; j<arr1.length; j++)
		    {
		        if (arr1[i] == arr1[j])
		          m++;
		            if (mf<m)
		             	{
		                  mf=m; 
		                  item = arr1[i];
		                }
		    }
		    m=0;
		}
	console.log(item);