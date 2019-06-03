import React from 'react';
import Section from './Section';

class App extends React.Component {
  static defaultProps = {
    sections: []
  };
  state = {
    currentButtonIndex: 0
  };
  render() {
    const {sections} = this.props
    function handleButtonClick(i) {
      this.setState({currentButtonIndex: i})
    }
    return (
      <ul>
        {
          sections.map((section, i) => {
            <li key={i}>
              <button key={i} type='button' onClick={() => handleButtonClick(i)}>{section.title}</button>
              <p>{section.content}</p>
            </li>
          })
      }
      </ul>
    );
  }
}

export default App;