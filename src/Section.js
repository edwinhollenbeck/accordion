import React from 'react';

class Section extends React.Component {
    render() {
        let index = this.props.id
        function handleButtonClick (index) {
            this.setState({currentButtonIndex: index})
        }
        console.log(this.props)
        return (
            <li key={index}>
                <button key={index} type='button' onClick={() => handleButtonClick(index)}>{this.props.title}</button>
                <p>{this.props.content}</p>
            </li>
        )
    }
}

export default Section;