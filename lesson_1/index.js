let tangram = [
    {
        p: [
            { x: 0, y: 0 },
            { x: 800, y: 0 },
            { x: 400, y: 400 },
        ],
        color: '#caff67',
    },
    {
        p: [
            { x: 0, y: 0 },
            { x: 400, y: 400 },
            { x: 0, y: 800 },
        ],
        color: '#67becf',
    },
    {
        p: [
            { x: 800, y: 0 },
            { x: 800, y: 400 },
            { x: 600, y: 600 },
            { x: 600, y: 200 },
        ],
        color: '#ef3d61',
    },
    {
        p: [
            { x: 600, y: 200 },
            { x: 600, y: 600 },
            { x: 400, y: 400 },
        ],
        color: '#f9f51a',
    },
    {
        p: [
            { x: 400, y: 400 },
            { x: 600, y: 600 },
            { x: 400, y: 800 },
            { x: 200, y: 600 },
        ],
        color: '#a594c0',
    },
    {
        p: [
            { x: 200, y: 600 },
            { x: 400, y: 800 },
            { x: 0, y: 800 },
        ],
        color: '#fa8ecc',
    },
    {
        p: [
            { x: 800, y: 400 },
            { x: 800, y: 800 },
            { x: 400, y: 800 },
        ],
        color: '#f6ca29',
    },
];
// 获取画布
let canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 800;
// 绘制接口
let ctx = canvas.getContext('2d');
for (let i = 0; i < tangram.length; i++) {
    draw(tangram[i], ctx);
}

function draw(data, ctx) {
    ctx.beginPath();
    ctx.moveTo(data.p[0].x, data.p[0].y);
    for (let i = 1; i < data.p.length; i++) {
        ctx.lineTo(data.p[i].x, data.p[i].y);
    }
    ctx.closePath();
    ctx.fillStyle = data.color;
    ctx.fill();
}
