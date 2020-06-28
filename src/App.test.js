import React from 'react';
import { shallow } from './app/enzyme';
import App from './App';

describe('renders App component', () => {
  it('render app', () =>{
    const component = shallow(<App/>);
    expect(component.exists()).toBe(true);
  })
});
