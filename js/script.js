function send() {
    /* Form */

    var d = document.getElementById('dist').value;
    var a = document.getElementById('angle').value;

    var a = parseFloat(a)
    var d = parseFloat(d)

    console.log(d);
    console.log(a);

    /* Height and Speed */

    const g = 9.8;

    function vel (d, a, g) {
        return ((d * g) / (Math.sin(2 * (a / 57.2958)))) ** 0.5
    }

    function maxHeight (v, a, g) {
        return (((v * Math.sin(a / 57.2958)) ** 2) / (2 * g))
    }

    var velo = vel(d, a, g);
    var height = maxHeight(velo, a, g);

    document.getElementById('alt').innerHTML = 'Altura máxima: ' + height + ' m'

    /* Quadratic Formula */

    function findF (h, d) {
        var b = (4 * h) / d
        var a = (-d * b) / (d ** 2)
        return [a, b]
    }

    var f = findF(height, d)

    function findY (a, b, x) {
        return ((a * x ** 2) + (b * x))
    }

    /* Canvas */

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    function drawPx (x, y) {
        ctx.fillRect(x, y, 1, 1);
    }

    for (let x = 0; x <= (d + 0.05); x += 0.05) {
        drawPx(x * 9 , findY(f[0], f[1], x) * 9);
    }
}

