import React from 'react';

class App extends React.Component {
  state = {
    currentButtonIndex: 0
  };

  static defaultProps = {
    sections: []
  };

  handleButtonClick(i) {
    this.setState({currentButtonIndex: i});
  }

  renderButtons() {
    const {sections} = this.props
    return sections.map((section, i) => (
        <li key={i}>
          <button key={i} type='button' onClick={() => this.handleButtonClick(i)}>
            {section.title}
          </button>
        </li>
    ))
  }

  renderContent() {
    const currentButton = this.props.sections[this.state.currentButtonIndex]
    return (
      <p>{!!this.props.sections.length && currentButton.content}</p>
    )
  }

  render() {
    return (
      <ul>
        {this.renderButtons()}
        {this.renderContent()}
      </ul>
    );
  }
}

export default App;