import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'

test('should render loading gif correctly', () => {
  const wrapper = shallow(<LoadingPage />)
  expect(wrapper).toMatchSnapshot()
})
