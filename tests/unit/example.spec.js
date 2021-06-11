import { shallowMount } from '@vue/test-utils'
import Navigation from '@/components/Navigation'

describe('Navigation', () => {
  it('renders navigation', () => {
    const navigation = shallowMount(Navigation)
    expect(navigation).not.toBeFalsy()
  })
})
