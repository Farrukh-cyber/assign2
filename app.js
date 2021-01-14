/*CHANGING CASE #1*/
// let myName=prompt('Enter your name');
// myName=myName.toUpperCase();
// alert(myName);

/*CHANGING CASE #2*/
// let str=prompt('enter your sentence:')
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     call=str.join(' ');
//   alert(call);


/*Strings: measuring length and extracting parts #1*/
// let mobile = prompt("Enter a Mobile phone model");
// let charsInMobile= mobile.length;
// alert(charsInMobile);

/*Strings: measuring length and extracting parts #2*/
// var str=prompt('enter your string');
// var lastCharOfStr=str.slice(-1);
// alert(lastCharOfStr);


/*Strings: finding segments #1*/
// let country=('pakistani');
// alert(country.indexOf('n'));

/*Strings: finding segments #2*/
// let input=prompt('enter your username');
// for(let i=0;i<input.length;i++){
//     if(input[i]=='@' || input[i]=='!' || input[i]==',' || input[i]=='.'){
//         alert('enter a valid user name!!');
//         break;
//     }
//     else{
//         alert(input);
//         break;
//     }
// }

/*Strings: finding segments #3*/
// let temp = "The quick brown fox jumps over the lazy dog";
// let cont =(temp.slice(0,3));
// let occurrences=cont.length;
// alert(occurrences);



/*Strings: finding a character at a location #1*/
// let country=('pakistani');
// let index= country.charAt(3);
// alert(index);

/*Strings: replacing characters #1*/
// let word=('hyderabad');
// let replacing=word.replace('hyder','Islam');
// alert(replacing);

/*Strings: replacing characters #2*/
// let word=('Ali and Sami are best friends. They play cricket and football together');
// let replacing=word.replace(/and/g,'&');
// alert(replacing);


/*Rounding numbers #1*/
// let num=parseFloat(prompt('enter your number'));
// final=Math.round(num);
// final=Math.floor(num);
// final=Math.ceil(num);
// alert(final);

/*Rounding numbers #2*/
// let num=parseFloat(prompt('enter your number'));
// final=Math.round(num);
// final=Math.floor(num);
// final=Math.ceil(num);
// alert(final);

/*Generating random numbers #1*/
// let random=Math.random();
// let variable=(random*6)+1;
// let end=Math.floor(variable);
// alert(end);

/*Generating random numbers #2*/
// let random=Math.random();
// let variable=(random*2)+1;
// let end=Math.floor(variable);
// if(end==2){
//     alert('Heads');
// }
// else{
//     alert('Tales');
// }

/*Generating random numbers #3*/
// let random=Math.random();
// let variable=(random*10)+1;
// let end=Math.floor(variable);
// let num=parseInt(prompt('enter secret number'));
// if(num==end){
//     alert('Congratulations You Guess The Correct Number');
// }
// else{
//     alert('Try again');
// }

/*Converting strings to integers and decimals #1*/
// let weight=parseInt(prompt('enter your weight'));
// alert(weight);
// alert(weight+'kgs');
// let weight=parseFloat(prompt('enter your weight'));
// alert(weight+'kgs');
// alert(weight+'kilograms')



/*Converting strings to numbers, numbers to strings #1*/
// let num=(472);
// document.write('Before conversion:'+"<br />");
// document.write(`${num}, ${typeof num} `+"<br />"+"<br />");
// document.write('After conversion:'+"<br />");
// num=num.toString();
// document.write(`${num}, ${typeof num} `+"<br />"+"<br />");

/*Converting strings to numbers, numbers to strings #2*/
// let num = 35.36;
// num=num.toString();
// let withoutDot = num.replace(".", "");
// document.write(withoutDot);


/*Controlling the length of decimals #1*/
// let percentage=(30/45*100);
// document.write(percentage.toFixed(2));
