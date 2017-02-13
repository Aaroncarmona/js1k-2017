mod = (x, y, z) => (x + 360) % 360;
between = (x, y, z) => x < y & y < z;
wall = (x, y, z) => between(0, y / 6 % 51, 1) ? 7 : y % 6 && (x + (y / 6 & 1) * 6) % 12 && (wall(x + 1, y) ? 8 : 6);
div60 = (x, y, z) => x / 60 | 0;
windowat = (x, y, z) => (z = div60(y) * 6 + div60(x)) * 28 % 64 < 39 - z / 4;
visible = (x, y, z) => div60(y) - 19 || step % 60 < 30;

// precompute tower wall for faster rendering
tower = [{min: min, sin: sin, hypot: hypot, PI: PI} = M = Math];
for (step = 360; playery = win = step--; scrolly = -12)
    for (tower[step] = [sy = top = 1231]; sy--;)
        tower[step][sy] =
            sy < 42 & between(126, step, magic = 150)
                // door
                ? step & 3
                // windows
                : windowat(step, sy) && (
                    between(24, sy % 60, 30) & between(0, step % 60, 36)
                        ? 9
                        : between(30, sy % 60, 54) & between(6, step % 60, 30)
                )
                // wall
                || wall(step, sy);

onkeydown = onkeyup = (x, y, z) => c[39 - x.which] = x.type[5];

setInterval(x = (x, y, z) => {
    step++;
    dir = !c[2] - !c[0];
    scrollx = mod(scrollx + dir * 4);

    // update position
    playery += sy = -min(c[1] && magic && magic-- ? 3 : 10, 1 - sy);
    scrolly += (y = playery - scrolly) > 110 ? y - 110 : y < 5 && y - 5;

    // check tower top collision
    win = playery > 1228 ? playery = c[sy = 0] = top : 0;

    // check window collision
    if (visible(playery) && windowat(mod(98 + scrollx), playery) & between(sy, playery % 60 - 30, 1) & between(0, (scrollx + 38) % 60, 52))
        playery += 30 - playery % 60,
        sy = 14;

    // draw
    (x = (x, y, z) => {
             // check ground collision
        for (playery > 0 || (sy = 14, playery = -2); x--;)
            for (e = mod(~dir ? x - 53 : 69 - x), y = 160; y--; c.fillRect(x * 4, 636 - y * 4, 4, 4))
                z = scrolly + y,
                // calculate light around player
                d = min(1, -min(0, hypot(60 - x, 12 - z + playery) / 12 - 2)) * magic,
                c.fillStyle = `hsl(${240 + d},25%,${d / 6 + 9 * (
                    // player
                    between(0, f = z - playery + !win * sin(x/2)*(14-hypot(sy))/8|0, 24) & between(52, x, 68) & !(f < 0 | 47 - e < f * 2 | f / 3 < 6 - e & f > e * 5 - 4 | e * 2 > 37 - f & e + 4 > f)
                        ? e + 7 - f
                            ? e * 2 > 30 - f & e + 4 > f
                                ? 9
                                : 1
                            : 3
                    // world
                    : z < 0
                        // ground
                        ? 2 + z / 6
                        : z > top
                            // sky
                            ? win
                                ? M.atan2(120 - y, x - 60) * 8 + scrollx/9*PI & 1 && 4
                                : 1
                            // tower
                            : sin(a = M.acos(x / 60 % 2 - 1)) * 4 - 6 + tower[mod((1 - a / PI) * 180 + scrollx | 0)][visible(z) ? z : z % 12 + 60]
                )}%)`
    })(120)
}, scrollx = 42)