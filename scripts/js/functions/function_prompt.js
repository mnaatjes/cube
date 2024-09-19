//-------------------------------------------------------------------------------------------------------
// CIS 174: Functions - Prompt
//-------------------------------------------------------------------------------------------------------
/*------------------------------------------------------*/
/***
 * @name validateInput
 * @type {function}
 */
/*------------------------------------------------------*/
function validateInput(input){
    const alert = document.querySelector('small');
    if(isNaN(input)){
        alert.style.display = 'block';
        return false;
    } else {
        alert.style.display = 'none';
        return true;
    }
}
/*------------------------------------------------------*/
/***
 * @name drawNumber
 * @type {function}
 */
/*------------------------------------------------------*/
function drawNumber(element, number, type=""){
    const cube  = element.querySelector('[class="cube"]');
    const print = element.querySelector('p');

    // do maths
    if(type == 'root'){
        number = Math.cbrt(number).toFixed(2);
    } else if (type == 'cube'){
        number = Math.pow(number, 3).toFixed(2);
        number = Number.parseFloat(number).toExponential(2);
    }
    // print to screen
    print.innerHTML = number;
    // loop faces of cubes
    for(let i = 0; i < cube.children.length; i++){
        cube.children[i].innerHTML = number;
    }
}
/*------------------------------------------------------*/
/***
 * @name promptNumber
 * @type {function}
 */
/*------------------------------------------------------*/
function promptNumber(){
    // define prompt
    const prompt_num = prompt('Please enter a whole number.', 2);
    // validate
    if(validateInput(prompt_num) == true){
        // define elements
        const root      = document.getElementById('root');
        const number    = document.getElementById('number');
        const cubed     = document.getElementById('cubed');

        // draw output
        drawNumber(root, prompt_num, 'root');
        drawNumber(number, prompt_num);
        drawNumber(cubed, prompt_num, 'cube');
    }
}