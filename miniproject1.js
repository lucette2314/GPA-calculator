    //Parameter:arr;
    //The function should take an array of alphabets representing the grades
    //Each alphabet in the array should be checked using the === operator.
    //Using a for loop and if, else if, and else statements, sum the numeric values 
    //of the grades. 
    //Next, divide the sum by the number of subjects to get the average 
    //numeric GPA.
    //Using logical and comparison operators, check the value of the average numeric
    //result and convert that to an alphabetic GPA value.
    


    function calculateGPA(arr) {
        
        let GPA = 0;
        let A = 100;
        let B = 80;
        let C = 70;
    
//debugger
        for (let i = 0; i < arr.length; i++){
        if (arr[i] === "A"){
            GPA  += 100;
        }
        else if(arr[i] === "B"){
            GPA += 80;
        }
        else{
           GPA += 70;
        }
        console.log(GPA/arr.length);
    
}
let sum = GPA/arr.length;

if( sum >= 91){
return "A";
}
else if(sum >= 81){
return "B";
}
else{
    return "C";
}

}
