import React from 'react';
import backgroundImage from '../images/bg-1080p.png'

export class TopCanvasView extends React.Component {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private frameId: number | null = null;

  constructor(props: any) {
    super(props);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {}

  onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    const _image = new Image();
    _image.src = backgroundImage;
    _image.onload = () => {
      if(!this.ctx){
        return;
      }
      this.ctx.drawImage(_image, 0, 0, _image.width, _image.height);
    }
  };

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId!);
  }

  animate() {
    // 次のフレームを要求
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  render() {
    return (
      <div>
        <canvas style={{ width: '100%', height: '40vw' }} ref={this.onCanvasLoaded} />
      </div>
    );
  }
}
