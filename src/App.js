import React, {Component} from "react";
import ColourSelector from "./ColourSelector";
import Canvas from "./Canvas";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to your drawing pad</h1>
                <Canvas hex="#f4424b" />
                <ColourSelector hex="#ffffff" />
                <ColourSelector />
            </div>
        )
    }
};

export default App;