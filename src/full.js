playery = step = sy = scrolly = 0,
a.style.cssText = 'height:100%;image-rendering:pixelated;image-rendering:-moz-crisp-edges',

between = (x, y) => x < (y || 24) && x > 0,

onkeydown = onkeyup = (x, y) => c[39 - x.which] = x.type[5],

data = new ImageData(120, magic = 160),

setInterval(
    x = (x, y) => requestAnimationFrame(
        x = (x, y) => {
            for (i = 120 * 160; i--;
                 d = Math.min(1, -Math.min(0, Math.hypot(60 - x, 12 - p + playery) / 12 - 2)) * magic * l / 100,
                 data.data.set([9 * d + l * 8, 6 * d + l * 8, 6 * l + d + l * 8, 6 * 60], i * 4))
                x = i % 120,
                y = 160 + (x - i) / 120,
                e = ((c[2] ? 69 - x : x - 53) + 360) % 360,
                p = scrolly + y,
                l =
                    // player
                    between(f = p - playery + active * Math.sin(e / 2 + 14)*(c[1]?1:14-Math.hypot(sy))/8|0) && between(e + 1, 16) && ~f && 48 - e > f * 2 && f > 17 - e * 3 | e * 5 - 3 > f && 38 - e * 2 > f | 3 < f - e
                        ? (
                            f - e - 7
                                ? 31 - e * 2 > f | 3 < f - e
                                    ? (3 < f - e) + 3 - (x + p) % 2 / 3
                                    : 15
                                : 6
                        ) - (f * 3 - e * e) / 60
                        // world
                        : p < 0
                            // ground
                            ? p + 6 - (x + p) % 2 / 3
                            : 1230 < p
                                // sky
                                ? active || (x - 60) / (100 - y) * 5 + step / 5 & 1 && 5 - i * i / Math.PI % 2
                                // tower
                                : Math.sin(e = Math.acos(x / 60 - 1)) * 12 - 12 + (
                                    e = (((1 - e / Math.PI) * 180 + scrollx | 0) + 360) % 360,
                                    // door
                                    p < 42 && between(150 - e) && 3 - e % 3
                                    // windows
                                    || ((p / 60 | 0) % 10 - 9 || step % 60 < 30) && (g = (p / 60 | 0) * 6 + ((e + 360) % 360) / 60 | 0) * 28 % 64 < 39 - g / 4 && between(p % 60 - 30 + 6, 6) && between(e % 60, 36) && between(e % 60, 35) * 5 + 5
                                    || ((p / 60 | 0) % 10 - 9 || step % 60 < 30) && (g = (p / 60 | 0) * 6 + ((e + 360) % 360) / 60 | 0) * 28 % 64 < 39 - g / 4 && between(p % 60 - 30) && between(30 - e % 60)
                                    // wall
                                    || between(p / 6 % 51, 1) && 5
                                    || p % 6 && (p % 6 - p - e) % 12 && (11 + (p % 6 - p - e) % 12 && 8 + (p / 6 | 0) * ((p % 6 - p - e) / 12 | 0) / Math.PI % 2 || 5)
                                ) * 2 - (e = p * 360 - e) * e / Math.PI % 2;
            c.putImageData(data, 0, 0)
        },
        scrollx = ((!c[2] - !c[0]) * 4 + scrollx + 360) % 360,

        // update position
        p = playery += sy = -Math.min(c[1] && magic && magic-- ? 2 : 8, 1 - sy),
        scrolly = -Math.min(110 - playery, -Math.min(playery - 5, scrolly)),

        // check tower top collision
        (active = playery < 1229) || (playery = c[sy = 0] = 1230),

        // check window collision
        e = 98 + scrollx,
        ((p / 60 | 0) % 10 - 9 || step % 60 < 30) && (g = (p / 60 | 0) * 6 + ((e + 360) % 360) / 60 | 0) * 28 % 64 < 39 - g / 4 && between(p % 60 - 30 - sy, 1 - sy || 1) && between((38 + scrollx) % 60, 52) && (
            sy = 13, playery += 30 - playery % 60
        ),

        // check ground collision
        0 < playery || (sy = 13, playery = -2),

        step += 1
    ),
    scrollx = 33
)
