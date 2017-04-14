var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var fs = require('fs'),
      fabric = require('fabric').fabric,
      canvas = fabric.createCanvasForNode(500, 500);

  var text = new fabric.Text('Hello world', {
    left: 100,
    top: 100,
    fill: '#f55',
    angle: 15
  });
  // console.log(text)
  canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

  // canvas.add(text);
  canvas.renderAll();

  res.writeHead(200, { 'Content-Type': 'image/png' });

  var stream = canvas.createPNGStream();
  stream.on('data', function(chunk) {
    res.write(chunk);
  });
  stream.on('end', function() {
    res.end();
  });
})

app.get('/itext', function (req, res) {
  var fs = require('fs'),
      fabric = require('fabric').fabric,
      canvas = fabric.createCanvasForNode(500, 500);

  var text = new fabric.Text('Hello world', {
    left: 100,
    top: 100,
    fill: '#f55',
    angle: 15
  });
  // console.log(text)
  // canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

  canvas.add(text);
  canvas.renderAll();

  res.writeHead(200, { 'Content-Type': 'image/png' });

  var stream = canvas.createPNGStream();
  stream.on('data', function(chunk) {
    res.write(chunk);
  });
  stream.on('end', function() {
    res.end();
  });
})

app.get('/text', function (req, res) {
  var fs = require('fs'),
      fabric = require('fabric').fabric,
      canvas = fabric.createCanvasForNode(500, 500);

  var text = new fabric.Text('Hello world', {
    left: 100,
    top: 100,
    fill: '#f55',
    angle: 15
  });
  // console.log(text)
  // canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

  canvas.add(text);
  canvas.renderAll();

  res.writeHead(200, { 'Content-Type': 'image/png' });

  var stream = canvas.createPNGStream();
  var out = fs.createWriteStream(__dirname + '/text1.png')
	stream.on('data', function(chunk){
	  out.write(chunk);
	});

	stream.on('end', function(){
	  console.log('saved png');
	  res.end();
	});
})

app.get('/test', function (req, res) {
  // var fabric = require('fabric').fabric,
      // canvas = fabric.createCanvasForNode(500, 500);

  // var text = new fabric.Text('Hello world', {
  //   left: 250,
  //   top: 250,
  //   fill: '#000'
  // });
  // // console.log(text)
  // canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

  // canvas.add(text);
  

	var Canvas = require('canvas')
	  , Image = Canvas.Image
	  , canvas = new Canvas(200, 200)
	var ctx = canvas.getContext('2d');

	// ctx.font = '30px Impact';
	// ctx.rotate(.1);
	// ctx.fillText("Awesome!", 50, 100);

	// var te = ctx.measureText('Awesome!');
	// ctx.strokeStyle = 'rgba(0,0,0,1)';
	// ctx.beginPath();
	// ctx.lineTo(50, 102);
	// // ctx.lineTo(50 + te.width, 102);
	// ctx.stroke();
	ctx.fillText('abcdefg', 50, 100);

	// ctx.fillStyle = 'blue';
	// ctx.fillRect(10, 10, 100, 100);
	// canvas.renderAll();

	var fs = require('fs')
	  , out = fs.createWriteStream(__dirname + '/text2.png')
	  , stream = canvas.pngStream();

	stream.on('data', function(chunk){
	  out.write(chunk);
	});

	stream.on('end', function(){
	  console.log('saved png');
	  res.writeHead(200, { 'Content-Type': 'image/png' });
	  res.end();
	});




	// var canvas = fabric.createCanvasForNode(200, 200);
	// var text = new fabric.Text('Hello world', {
	//   left: 100,
	//   top: 100,
	//   fill: '#f55',
	//   angle: 15
	// });
	// canvas.add(text);

	// var stream = canvas.createPNGStream();
	// stream.on('data', function(chunk) {
	//   out.write(chunk);
	// });
})


app.listen(5000, function () {
  console.log('Example app listening on port 4000!')
})