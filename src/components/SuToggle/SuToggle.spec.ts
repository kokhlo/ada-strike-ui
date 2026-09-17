import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SuToggle from './SuToggle.vue'

describe('SuToggle', () => {
  it('renders an unchecked switch by default', () => {
    const wrapper = mount(SuToggle)
    const control = wrapper.get('.su-toggle__control')
    expect(control.attributes('role')).toBe('switch')
    expect(control.attributes('aria-checked')).toBe('false')
  })

  it('emits update:modelValue true on first click', async () => {
    const wrapper = mount(SuToggle, { props: { modelValue: false } })
    await wrapper.get('.su-toggle__control').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toEqual([[true]])
  })

  it('emits false when toggling off', async () => {
    const wrapper = mount(SuToggle, { props: { modelValue: true } })
    await wrapper.get('.su-toggle__control').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toEqual([[false]])
  })

  it('reflects the checked state in aria-checked', async () => {
    const wrapper = mount(SuToggle, { props: { modelValue: true } })
    expect(wrapper.get('.su-toggle__control').attributes('aria-checked')).toBe('true')
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(SuToggle, { props: { disabled: true } })
    await wrapper.get('.su-toggle__control').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    expect(wrapper.get('.su-toggle__control').attributes('disabled')).toBeDefined()
  })

  it('renders a label and wires aria-label fallback', () => {
    const wrapper = mount(SuToggle, { props: { label: 'Live stream' } })
    expect(wrapper.get('.su-toggle__label').text()).toBe('Live stream')
    expect(wrapper.get('.su-toggle__control').attributes('aria-label')).toBe('Live stream')
  })
})
