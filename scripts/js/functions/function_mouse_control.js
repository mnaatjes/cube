//-------------------------------------------------------------------------------------------------------
// CIS 174: Functions - Mouse Controls
//-------------------------------------------------------------------------------------------------------
/*------------------------------------------------------*/
/***
 * @name cubeClick
 * @type {function}
 */
/*------------------------------------------------------*/
function cubeCick(e){
    e.target.addEventListener('mousemove', (e) => cubeMove(e));

}
/*------------------------------------------------------*/
/***
 * @name cubeMove
 * @type {function}
 */
/*------------------------------------------------------*/
function cubeMove(e){
    console.log(`(X: ${e.clientX}, Y: ${e.clientY}`);
}

const test = document.getElementById('test');

test.addEventListener('mousedown', (e) => cubeCick(e));
test.removeEventListener('mouseup', (e) => cubeCick(e));