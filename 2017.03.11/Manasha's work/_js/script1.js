// console.log("Hello JavaScript");
// comment


// comment



// var x = 1, y = 2;
// var a;
// console.log(a);
// var b = 5;
// console.log(b);
// var c = true, d = false;
// console.log(c);
// console.log(d);
// var e = 2.5;
// console.log(e);
// var f = 'Manasha';
// console.log(f);
// var g = "Manasha";
// console.log(g);
// var h = null;
// console.log(h);
// var i = undefined;
// console.log(i);
// var j = "dvdfb sbbbbbb sssssbg\
//             dvsfv";
// console.log(j);



// var array1 = [1, 2, "m", 4];
// var array2 = new Array("a", "b", "c");
// console.log(array1[2]);

// var matixArray = [[1, 2], [3, 4], [5]];
// console.log(matixArray[0]);
// console.log(array1.length);
// console.log(parseInt("25"));
// console.log(parseFloat("12.21"));



// var a = 2;
// console.log(void a++);
// console.log(a);

// console.log(typeof a);



// var a = 5;
// a += a++ + a++;
// console.log(a);



// var a = 1;
// if (a < 5) {
    
// } else if (a === 5) {
    
// } else {
    
// }


// var i = 0;

// for(var i=0;i<5;i++){
//     for(var j=0; j<5; j++){
//         console.log("*");    
//     }
//     console.log(" ");
// }

// for(var i=0;i<5;i++){
//     for(var j=0; j<i; j++){
//         console.log("*");    
//     }
//     console.log(" ");
// }



// for (var i=0; i<5; i++){
//     for (var j=0; j<i; j++){
//         document.write("*");
//     }
//     document.writeln('<br>');
// }



// var i = 5;
// var j;
// do {
//     j = i;
//     do {
//         if (i == 5 & j == 4) {
//             document.write("o");
//         } else if (i == 4 & j == 3) {
//             document.write("o");
//         } else if (i == 4 & j == 2) {
//             document.write("o");
//         } else if (i == 3 & j == 2) {
//             document.write("o");
//         } else {
//             document.write("*");
            
//         }
//         j--;
//     } while (j > 0);
//     //document.write("*"); 
//     document.writeln('<br>');
//     i--;
// } while (i > 0);



// function f1(a) {
//     alert(a+"Stay");
// }
// f1("Please ");


function f2(){
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
f2.call(null,1,2,5,"m","n");

