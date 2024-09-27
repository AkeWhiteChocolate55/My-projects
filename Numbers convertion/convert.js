document.getElementById("kmInput").addEventListener('input', function(e) {
    let km =e.target.value;
    document.getElementById('metOutput').innerHTML = km * 1000;
    document.getElementById('cdOutput').innerHTML = km * 100000;
    document.getElementById('mlOutput').innerHTML = km * 1000000;
});