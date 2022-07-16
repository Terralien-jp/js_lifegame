let g = 0, a= [], b = [], k;

for (k = 0; k <26 * 40 * 41; k++) {
    a[k] = false;
    b[k] = 0;
}

// 初期値
a[12 * 41 + 25] = true;
a[12 * 41 + 26] = true;
a[13 * 41 + 24] = true;
a[13 * 41 + 25] = true;
a[14 * 41 + 25] = true;

setInterval(update, 800);

function update() {
    let i, j, k;
    g++;
    for (i = 1; i <= 25; i++) {
        for (j = 1; j <=40; j++) {
            k = i * 41 + j;
            if (a[k]) {
                b[k-42]++; b[k-41]++; b[k-40]++;
                b[k- 1]++;            b[k+ 1]++;
                b[k+40]++; b[k+41]++; b[k+42]++;
            }
        }
    }
    for (k = 0; k < 26 * 40 + 41; k++) {
        if (b[k] !=2 ) a[k] = (b[k] == 3);
        b[k] = 0;
    }
    draw()
}

function draw() {
    let s = '', i, j, k;
    for (i = 1; i <= 25; i++) {
        for (j = 1; j <= 40; j++) {
            k = i * 41 + j;
            if (a[k])
                s += '■';
            else
                s += '□';
        }
        s += '\n';
    }
    s += "Generation:" + g;
    document.getElementById("board").textContent = s;
}