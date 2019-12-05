//array==========================================

//replacing an array element
// var myarray= [10, 20, 30, "khagapti"]
// myarray[myarray.length-1]= "smriti";  // changing the array elemnt using the index number
// console.log(myarray)


//multi dimensional array-------------------------
// var myarray1= [[5, 10, 20], [6,30, 40]]
// var viewElement= myarray1[1][0];              //displaying an element from multi dimensional array
// console.log(viewElement)


//manipulate arrays with push()----------------------
// var myarray= [[10, 20], [30, 40]]
// myarray.push([50,60])                      //inserting an array in nested array(at the end of the array)
// console.log(myarray);


//manipulate arrays with pop---------------------
// var myarray= [[10, 20],[30, 40]]
// var afterPopingMyArray=myarray.pop();      //deleting the last array from the nested array
// console.log(myarray);


//manipulate array with shift()
// var myarray= [[10, 20],[30, 40]]
// var afterPopingMyArray=myarray.shift();      //deletingt the frist array from the nested array
// console.log(myarray);


//Manipulate the array with unshift()
// var myarray= [[10, 20],[30, 40]]
// myarray.unshift([5,6]);      //inserting an array a5t the begenning of an nested array
// console.log(myarray);


//FUNCTIONS=========================================

//reusing a code using function i.e., callingt the function
//  function ourFunction()                     //called function
//  {
//      console.log("khagapati bhakat");
//  }
//  ourFunction();                           //calling function
//  ourFunction();

/* funcution reduces the writing of code and increases the use of code*/

// function numbers(a,b)       //a & b are the arguments
// {
//     console.log(a+b);                  //addition of numbers
// }
// numbers(10,5);              // 10,5 are the values that are passed to the arguments
// numbers(5,5);


//global and local variable of same name
//1)
// var wear="t-shirt";
// function myOutfit()
// {
//     return wear;
// }
// console.log(myOutfit());                //output is t-shirt (global variable)
//---------------------------------------------------------------------
//2.)
// var wear="t-shirt";
// function myOutfit()
// {
//     var wear="sweater";
//     return wear;
// }
// console.log(myOutfit());              //outpurt is sweater (local variable)- because local variable thate 6the preidence over g.var
// console.log(wear);                    // output is t-shirt- outside the function it acces the global variable


//return a value from a function with return-----------------------------------------------------
// function operation(num)
// {
//     return num-7;               //an operation can be performed directly on thre retrun
// }
// console.log(operation(10));   //passing the value and calling the function


//understanding undefined value returned  from a function
// var sum=0;
// function additionOperation()
// {
//     sum += 5;                 
// }
// console.log(additionOperation());      // undefined because sum is defined as the global variable


//boolean data types-------------------------------------------------------------------------------

// function booleanExample()
// {
//     retuen true/false;                             // syntax
// }

// function TrueOrfalse(wasThatTrue)
// {
//     if (wasThatTrue)
//     {
//         return "Sahi Hai";
//     }
//      return "Galat Hai";
// }
// console.log(TrueOrfalse(true));

//comparision with thw equality operator------------------------------------------------------------------
  
// function equalityCheck(data)
// {
//     if(data === 10)                               //3===3 true     3==='3' false        --->Strict Equality Operator
//     {                                             //3==3 true       3=='3' true
//         return "Equal";
//     }
//     return "Not Equal";
// }
// console.log(equalityCheck(10));

//Inequality--------------------------------------------
// !=   --------> inequality
// !== ---------> Strict enequalty