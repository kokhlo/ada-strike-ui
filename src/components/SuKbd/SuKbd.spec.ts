import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SuKbd from './SuKbd.vue'

describe('SuKbd', () => {
  it('renders a kbd element with slot content', () => {
    const wrapper = mount(SuKbd, { slots: { default: 'Ctrl' } })
    expect(wrapper.element.tagName).toBe('KBD')
    expect(wrapper.classes()).toContain('su-kbd')
    expect(wrapper.text()).toBe('Ctrl')
  })

  it('renders unicode keys', () => {
    const wrapper = mount(SuKbd, { slots: { default: '⌘' } })
    expect(wrapper.text()).toBe('⌘')
  })
})
