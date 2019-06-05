import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders without props', () => {
    const tree = renderer
        .create(<App />)
    expect(tree).toMatchSnapshot();
})

it('component opens a clicked section', () => {
    const wrapper = shallow(<App sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
})