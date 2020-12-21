import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Images from '@/views/Images.vue'

describe('images.vue', () => {
  it('renders heading', () => {
    const welcomeText = 'Latest Images'
    const wrapper = mount(Images, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
