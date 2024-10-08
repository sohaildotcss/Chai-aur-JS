//Todo:- Study Type Coercion.

//h Comparison Operator(<,>,<=,>=) and Equality Checks(==,===) works differently in JS.
console.log(null > 0); //! here null is treated as 0
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0); //!false, because equality checks will not convert null to anything and null(empty) isn't equal to 0.

//h Comparisons convert everything to a number.

console.log("2" == 2);
//! here JS converts "2" to a number because the other operand is also a number.hence 2 == 2, it shows true.
console.log("2" === 2);
//! here JS will check the data type as well as the value.Hence string != number it will show false.

//* Note: All these types of Conversions should be avoided while writing the code, but these are helpful for the interview.
