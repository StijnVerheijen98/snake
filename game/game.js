import {Canvas} from './classes/Canvas.class.js';
import {Food} from './classes/Food.class.js';
import {Score} from './classes/Score.class.js';
import {Settings} from './classes/Settings.class.js';
import {Snake} from './classes/Snake.class.js';

const canvas = new Canvas();
const food = new Food();
const score = new Score();
const settings = new Settings();
const snake = new Snake();


// canvas.testImport();
// food.testImport();
// score.testImport();
// settings.testImport();
// snake.testImport();

canvas.drawCanvas();

window.addEventListener("load", function () {
    let deaths = 1;

    let RAF =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60)
        };

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let w = canvas.width
    let h = canvas.height

    let keys = []

    window.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true
    })
    window.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false
    })

    let player = {
        // Begin location
        x: w / 2,
        y: h / 2,
        // stroke
        r: 2.5,
        a: 1,
        // turn speed
        t: 5 * (Math.PI / 180),
        // Movement speed
        s: 3.5,
        // Color
        c: "#22DD1E",
        ht: null,
    }


    function getCIDCol(pl, ctx) {
        next.x = player.x + Math.cos(player.a) * player.r;
        next.y = player.y + Math.sin(player.a) * player.r;

        let id = ctx.getImageData(next.x, next.y, 1, 1);

        return (id.data[3]);
    }

    let next = {x: 0, y: 0};

    function update() {
        RAF(update);

        if (keys[39]) {
            player.a += player.t
        }
        if (keys[37]) {
            player.a -= player.t
        }

        player.x += Math.cos(player.a) * player.s
        player.y += Math.sin(player.a) * player.s


        // draw collision status
        if (getCIDCol(player, ctx)) {
            window.setTimeout(window.location.reload.bind(window.location), 200);
        }
        render()
    }

    update()

    function render() {
        if (player.ht == null) {
            ctx.beginPath()
            ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2, false)
            ctx.fillStyle = player.c
            ctx.fill()
            ctx.closePath()
        }
    }

})