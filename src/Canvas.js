import React, { Component } from 'react';
import { fabric } from 'fabric';

export default class Canvas extends Component {
  state = { counter: 5 };

  componentDidMount() {
    // this.interval = setInterval(this.tick.bind(this), 1000);

    const canvas = new fabric.Canvas('canvas', {
      width: 4000,
      height:4000,
      preserveObjectStacking: true,
      selection: false,
    });

    const rect = new fabric.Rect({
      width: 1500, height: 1500,
      left: 100, top: 100,
      fill: 'yellow',
      angle: 30
    });

    canvas.setDimensions({
      width: `${500}px`,
      height: `${500}px`
    }, {cssOnly: true})

    canvas.add(rect);

    canvas.renderAll();

    fabric.loadSVGFromURL('/test_base.svg', (objects, options) => { 
      for(let object of objects){
        object.fill = '#000';
      }


      const template = fabric.util.groupSVGElements(objects, options);
      // canvas.backgroundColor = '#000'
      template.set({
        selectable: false,
        evented: false,
        originX: 'left',
        originY: 'left',
        left: 0,
        top: 0,
        scaleX: 1,
        scaleY: 1,
      });

      canvas.add(template);
      canvas.renderAll();

      console.log(canvas)
    });

    canvas.on({
      'selection:cleared': () => {
        console.log('cleared')
      },
    });


    fabric.loadSVGFromURL('/test.svg', (objects, options) => { 
      for(let object of objects){
        object.fill = '#fff';
        object.globalCompositeOperation = 'source-atop';
      }


      const template = fabric.util.groupSVGElements(objects, options);
      // canvas.backgroundColor = '#000'
      template.set({
        selectable: false,
        evented: false,
        originX: 'center',
        originY: 'center',
        left: 0,
        top: 0,
        scaleX: 1,
        scaleY: 1,
      });

      canvas.add(template);
      canvas.renderAll();

      console.log(canvas)
    });

    canvas.on({
      'selection:cleared': () => {
        console.log('cleared')
      },
    });



  }

  tick() {
    // this.setState({ counter: this.state.counter - 1 });
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <canvas id="canvas" />
      </div>
    )
  }
}
