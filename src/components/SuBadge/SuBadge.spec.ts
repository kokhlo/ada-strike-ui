import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SuBadge from './SuBadge.vue'

describe('SuBadge', () => {
  it('renders slot content with the neutral tone by default', () => {
    const wrapper = mount(SuBadge, { slots: { default: 'idle' } })
    expect(wrapper.classes()).toContain('su-badge--neutral')
    expect(wrapper.text()).toBe('idle')
  })

  it.each(['accent', 'success', 'error', 'warning', 'info'] as const)(
    'applies the %s tone class',
    (tone) => {
      const wrapper = mount(SuBadge, { props: { tone } })
      expect(wrapper.classes()).toContain(`su-badge--${tone}`)
    },
  )

  it('renders a status dot when dot is set', () => {
    const wrapper = mount(SuBadge, { props: { dot: true, tone: 'success' } })
    expect(wrapper.find('.su-badge__dot').exists()).toBe(true)
    expect(wrapper.classes()).toContain('su-badge--dot')
  })

  it('renders no dot by default', () => {
    const wrapper = mount(SuBadge)
    expect(wrapper.find('.su-badge__dot').exists()).toBe(false)
  })
})
