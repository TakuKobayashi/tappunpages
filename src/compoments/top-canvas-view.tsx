import React from 'react';

export class TopCanvasView extends React.Component {
  private canvas: HTMLCanvasElement | null = null;
  private frameId: number | null = null;

  constructor(props: any) {
    super(props);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {}

  onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    this.canvas = canvas;
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
