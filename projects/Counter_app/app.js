var count = 0;

function add() {
    count += 1;
    document.getElementById('counter').innerHTML = count;
}

function lower() {
    count -= 1;
    document.getElementById('counter').innerHTML = count;
}
