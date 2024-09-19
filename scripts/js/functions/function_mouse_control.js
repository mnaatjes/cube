//-------------------------------------------------------------------------------------------------------
// CIS 174: Functions - Mouse Controls
//-------------------------------------------------------------------------------------------------------
/*------------------------------------------------------*/
/***
 * @name onCubeMove
 * @type {function}
 */
/*------------------------------------------------------*/
function onCubeMove(e){
    moveAt(e.pageX, e.pageY);
}
/*------------------------------------------------------*/
/***
 * @name moveAt
 * @type {function}
 */
/*------------------------------------------------------*/
function moveAt(pageX, pageY){
    console.log(`(X: ${pageX}, Y: ${pageY}`);
    const root  = document.querySelector(':root');
    const style = getComputedStyle(root);
    // set X
    root.style.setProperty('--rotateX', (pageX-600));
    root.style.setProperty('--rotateY', (pageY-600));
}


//console.log(`(X: ${e.clientX}, Y: ${e.clientY}`);
//test.addEventListener('mousedown', (e) => cubeClick(e));
const test = document.getElementById('test');
test.onmousedown = function(e){
    // get pageX, Y
    moveAt(e.pageX, e.pageY);
    // document --> start event
    document.addEventListener('mousemove', onCubeMove);
    // document --> end event
    test.onmouseup = function(){
        document.removeEventListener('mousemove', onCubeMove);
        test.onmouseup = null;
    }
};