document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('#exp').innerHTML = '';
});
document.addEventListener('click', function(e) {
    if ( !e.target.matches('.digit') && !e.target.matches('.sign') ) return;
    document.querySelector('#exp').innerHTML += e.target.innerHTML;
}, false);
document.querySelector('#eql-sign').addEventListener('click', function() {
    var exp = document.querySelector('#exp').innerHTML;
    eel.solve(exp)(renderResult);
});

eel.expose(renderResult);
function renderResult(result) {
    console.log('render result');
    document.querySelector('#result').innerHTML = result;
}
