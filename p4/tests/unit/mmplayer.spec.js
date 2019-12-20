import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ContactPage from '@/components/ContactPage.vue'

describe('ContactPage.vue', () => {

    it('renders props.msg when passed', () => {

      const msg = 'new message'

      const wrapper = shallowMount(ContactPage, {

          propsData: { msg }

      })

      expect(wrapper.text()).to.include(msg)

    })

})
