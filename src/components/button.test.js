//https://courses.thinkful.com/mi-react-v1/checkpoint/2

/* Given:
import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button />);
        wrapper.find('button').simulate('click');
    });
});
*/

//Task: 
//Complete the test in src/components/button.test.js to assert 
//that the onClick callback is fired when the button is clicked.


import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

// My Solution
describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button onClick={() => console.log('Click')} />);
        wrapper.find('button').simulate('click');
    });
});


/* Thinkful Solution

import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const spy = jest.fn();
        const wrapper = shallow(<Button onClick={spy} />);
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});

https://github.com/Thinkful-Ed/react-button-click-test-challenge/tree/solution

https://jestjs.io/docs/en/expect.html
*/



