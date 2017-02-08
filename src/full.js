wizard = (x, y) =>
    y < 0 | 47 - x < y * 2 | y < 20 - x * 3 & y > x * 5 - 4 | x * 2 > 37 - y & x + 4 > y
        ? 0
        : x + 7 - y
            ? x * 2 > 30 - y & x + 4 > y
                ? 99
                : 9
            : 30;

mod = x => (x + 360) % 360;
between = (x, y, z) => x < y && y < z;

tower = (x, y) =>
    // door
    between(18, y, 22) & between(90, x, 94)
        ? 20
        : y < 36 & between(84, x, 108)
            ? 40
            // windows
            : windows[(y / 60 | 0) * 6 + x / 60 | 0] && (
                between(24, y % 60, 30) & between(0, x % 60, 36)
                    ? 90
                    : between(30, y % 60, 54) & between(6, x % 60, 30)
            ) || y % 6 && (x + (y / 6 | 0) % 2 * 6) % 12 && 80;

M = Math;
windows = [];

for(i = 120; i--;)
    windows[i] = (x = M.sin(i-5) * 1e4) - M.floor(x) < .5 - i / 540;

scrollx = 1;
last = 2;
scrolly = -20;
playery = sy = move = lost = 0;
magic = 180;

keys = [];
onkeydown = onkeyup = e => {
    keys[key = e.which - 37] = e.type[5];
    last = key % 2 ? last : key
}

setInterval(e => {
    if (!lost) {
        scrollx = mod(scrollx - !!keys[0]*4 + !!keys[2]*4);

        // update speed
        sy > -(keys[1] && magic && magic-- ? 2 : 12) && sy--;

        // update position
        playery += sy;
        if (playery - scrolly > 120 & sy > 0)
            scrolly += sy;

        // check collision
        if (sy < 0 & windows[(playery / 60 | 0) * 6 + mod(98 + scrollx) / 60 | 0] & playery % 60 <= 30 & 30 <= playery % 60 - sy & between(0, 52 - (scrollx + 38) % 60, 52))
            playery += 30 - playery % 30,
            sy = 12;

        sy = playery > 0 ? sy : 12;

        // check death
        lost |= scrolly - playery > 30;

        for (x = 120; x--;) {
            a = M.acos(x / 60 % 2 - 1);
            xp = (1 - a / M.PI) * 180 | 0;
            for (y = 160; y--;)
                color = 
                    // player
                    between(playery, y + scrolly, playery + 24) & between(82, xp, 98) && wizard(mod(last ? xp - 83 : 99 - xp), y + scrolly - playery)
                    || (scrolly < -y || scrolly + y > 1230
                        // sky / ground
                        ? 10
                        // tower
                        : M.sin(a) * 40 - 60 + tower(mod(xp + scrollx), y + scrolly)
                    ),
                d = M.min(1, M.max(0, 2 - M.hypot(60 - x, playery - y - scrolly + 12) / 12)) * magic,
                c.fillStyle = `hsl(${240 + d | 0},20%,${color + d / 9 | 0}%`,
                c.fillRect(x * 4, 640 - y * 4, 4, 4)
        }
    }
}, 42)