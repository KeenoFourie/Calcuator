// Display
let result = document.querySelector("#output");
let checkerArray = [];


// Output = displays what is clicked and doesn't repeat dot
function display(value){
    if(value == '.' && checkerArray.includes('.')){      //if value dot is included the let dot not appear
        return
    } else if(value == '+' || value == '-' || value == '*' || value == '/'){     //else let it appear once more after operators are clicked/included
    } else {
        result.value += value;
        checkerArray.push(value);
    }
}


// Backspace = removes value/number from display area
document.querySelector("#backspace").
addEventListener("click", ()=> {
    let output = result.value;   //displays it in the display area
    result.value = output.slice(0, -1);   //removes one and only one value/number from the display area 
})


// Clear
document.querySelector("#clear").  
addEventListener("click", ()=> {
    let output = result.value;
    result.value = output.slice(output.length); //clears all values in the display area(length of output)
})

// Operators
document.querySelectorAll(".operator").forEach( (ops)=>{     //argument for each different operators
    ops.addEventListener("click", (e)=>{
        result.value += e.target.innerText        // places operators in display area
        checkerArray = [];
    })
})


// Equal sign
document.querySelector("#equal_sign")
    .addEventListener("click", (e)=>{
        result.value = eval(result.value).toFixed(2);        //displays answer to equation with two decimal spaces only
})
