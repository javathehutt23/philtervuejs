import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Account from '@/views/Account.vue'

describe('account.vue', () => {
  it('renders heading', () => {
    const welcomeText = 'User Login/Registration'
    const wrapper = mount(Account, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
