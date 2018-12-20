import React, {Component} from "react";
import Canvas from "./Canvas";
import TitleSelector from "./TitleSelector";

class App extends Component {
    state = {
        text: "Welcome To Your Drawing Pad"
    }

    onTextSelectorChange = (text) => {
        this.setState({ text });
    }


    render() {
        const { text } = this.state;
        return (
            <div>
                <h1>{text}</h1>
                <TitleSelector 
                    text={text} 
                    onTextSelectorChange={this.onTextSelectorChange}  
                />
                <Canvas />
            </div>
        )
    }
};

export default App;