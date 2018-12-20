import React, {Component} from "react";
import ColourSelector from "./ColourSelector";
import SizeSelector from "./SizeSelector";


class Canvas extends Component {
    state = { 
        hex: "#0000ff", 
        width: 400, 
        height: 400,
        coords: null,
        size: 3
    }

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.context = null;
    }

    componentDidUpdate() {
        this.setContext();
    }

    setContext() {
        this.context = this.canvasRef.current.getContext("2d");
        this.context.strokeStyle = this.state.hex;
        this.context.lineJoin = "round";
        this.context.lineWidth = this.state.size;
    }

    onColourSelectorChange = (hex) => {
        this.setState({ hex });
    }

    onSizeSelectorChange = (size) => {
        this.setState({ size });
    }

    onCanvasMouseDown = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        this.setState({ coords: [x, y]});
    }

    onCanvasMouseUp = (event) => {
        this.setState({ coords: null });
    }

    clearCanvas = () => {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    onCanvasMouseMove = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        const { coords, height, width } = this.state;

        if (x > 0 && y > 0 && x < width && y < height) {
            if (coords) {
                this.context.beginPath();
                this.context.moveTo(coords[0], coords[1]);
                this.context.lineTo(x, y);
                this.context.closePath();
                this.context.stroke();
                this.setState({ coords: [x, y]});
                console.log(this.context);
            }

        } else {
            this.setState({ coords: null });
        }
    }

    render() {
        const { hex, width, height, size } = this.state;

        return (
            <div>
                <div>
                    <ColourSelector 
                        hex={hex} 
                        onColourSelectorChange={this.onColourSelectorChange} 
                    />
                    <SizeSelector 
                        size={size}
                        onSizeSelectorChange={this.onSizeSelectorChange}
                    />
                </div>
                
                <canvas
                    ref={this.canvasRef}
                    width={width}
                    height={height}
                    style={{ border: "6px solid black"}}
                    onMouseMove={this.onCanvasMouseMove}
                    onMouseDown={this.onCanvasMouseDown}
                    onMouseUp={this.onCanvasMouseUp}
                />
                <button onClick={this.clearCanvas}>Clear</button>
            </div>            
        );
    }
}

export default Canvas;