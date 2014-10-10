a = c.getContext('2d')

t = setInterval(function () {
    o = [];

    for (y = 7; y --;) {
        for (z = 4; z --;) {
            for (x = 7; x --;) {
                if ('00000100000000000000000000100000011000010100001010000011011111110000011000001011111111111001000100100010011111001111100100010010001001111100100010000000000000000100010010001000000000000000010001'[y*28+z*7+x]==1) {
                    n = t / 99;

                    o.push([
                        x * (v=Math.cos)(n) + z * v(n-8),
                        y + v((t + x)/9),
                        z * v(-n) + x * v(-n-8)
                    ]);
                }
            }
        }
    }

    o.sort(function (a, b) {
        return a[2] - b[2];
    });

    c.width = c.height = 700;
    a.translate(350, 90);
    a.scale(40, 40);

    while (p = o[++y]) {
        a.fillStyle = 'hsl(9,80%,' + (5 * p[2] + 40) + '%';

        a.beginPath();
        a.arc(
            p[0],
            p[1],
            1,
            0,
            6
        );
        a.fill();
    }

    t ++;
},9);
