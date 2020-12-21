import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('home.vue', () => {
  it('renders welcome message', () => {
    const welcomeText = 'Welcome To Philter'
    const wrapper = mount(Home, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
