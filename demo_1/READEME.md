# Demo1

## general

this demo we will use the basic conception of canvas element such as
`height`, `width` and some functions related the draw function.

* skills points:

1. `canvas.height` this is both physical height and resolution height
2. `canvas.width` this is both physical width and resolution width
3. `moveTo`
4. `lineTo`
5. `stroke`
6. `strokeStyle`
7. `fill`
8. `fillStyle`
9. `beginPath`
10. `closePath`
11. `lineWidth`

These skills points are basic canvas drawing system, and we already can do something on canvas now!

## basic conceptions

```js
    const canvas = document.getElementById('canvasId')
    const ctx = canvas.getContext('2d');
    ctx.moveTo(100,100);
    ctx.lineTo(200, 200);
    // until now lineTo and moveTo is just a state 
    // tell web that we are going to move pointA (100, 100) and end at pointB(200,200)
    // but canvas not really draw yet

    ctx.stroke(); // this is real one let canvas to draw 
    
```

> canvas is base on state rendering not objective rendering, once you set, will change all
> unless you use beginPath, closePath
