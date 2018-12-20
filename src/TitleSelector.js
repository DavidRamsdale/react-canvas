import React, { Component } from 'react';

class TitleSelector extends Component {
    onInputChange = (event) => {
        const { onTextSelectorChange } = this.props;
        onTextSelectorChange(event.target.value);
    }
    
    render() { 
        const { text } = this.props;
        
        return (
            <input 
            type="text" 
            value={text} 
            onChange={this.onInputChange} 
            />  
        );
    }
}
 
export default TitleSelector;