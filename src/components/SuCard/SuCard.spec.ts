import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SuCard from './SuCard.vue'

describe('SuCard', () => {
  it('renders a header with title and meta', () => {
    const wrapper = mount(SuCard, {
      props: { title: 'Sessions', meta: '42' },
      slots: { default: '<p>body</p>' },
    })
    expect(wrapper.find('.su-card__title').text()).toBe('Sessions')
    expect(wrapper.find('.su-card__meta').text()).toBe('42')
    expect(wrapper.find('.su-card__body').text()).toBe('body')
  })

  it('omits the header when no title, meta or header slot is given', () => {
    const wrapper = mount(SuCard, { slots: { default: 'body' } })
    expect(wrapper.find('.su-card__header').exists()).toBe(false)
  })

  it('renders a footer slot when provided', () => {
    const wrapper = mount(SuCard, {
      props: { title: 'Panel' },
      slots: { default: 'x', footer: '<button>close</button>' },
    })
    expect(wrapper.find('.su-card__footer').exists()).toBe(true)
    expect(wrapper.find('.su-card__footer').text()).toBe('close')
  })

  it('supports the noPadding flush body mode', () => {
    const flush = mount(SuCard, { props: { noPadding: true }, slots: { default: 'x' } })
    const padded = mount(SuCard, { slots: { default: 'x' } })
    expect(flush.find('.su-card__body').classes()).toContain('su-card__body--flush')
    expect(padded.find('.su-card__body').classes()).not.toContain('su-card__body--flush')
  })

  it('exposes an aria-label derived from the title', () => {
    const wrapper = mount(SuCard, { props: { title: 'Nodes' } })
    expect(wrapper.attributes('aria-label')).toBe('Nodes')
  })
})
