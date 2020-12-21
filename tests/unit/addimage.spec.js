import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import AddImages from '@/views/AddImages.vue'

describe('addimages.vue', () => {
  it('renders heading', () => {
    const welcomeText = 'Add an Image'
    const wrapper = mount(AddImages, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
