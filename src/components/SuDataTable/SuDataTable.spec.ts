import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SuDataTable from './SuDataTable.vue'
import type { SuDataTableColumn } from './SuDataTable.vue'

const columns: SuDataTableColumn[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'host', label: 'Host' },
  { key: 'latency', label: 'Latency', sortable: true, align: 'right' },
]

const rows = [
  { id: 3, host: 'gamma.internal', latency: 240 },
  { id: 1, host: 'alpha.internal', latency: 90 },
  { id: 2, host: 'beta.internal', latency: 120 },
]

function cells(wrapper: ReturnType<typeof mount>): string[] {
  return wrapper.findAll('tbody td').map((td) => td.text())
}

describe('SuDataTable', () => {
  it('renders one header per column and all rows', () => {
    const wrapper = mount(SuDataTable, { props: { columns, rows } })
    expect(wrapper.findAll('thead th')).toHaveLength(3)
    expect(wrapper.findAll('tbody tr')).toHaveLength(3)
  })

  it('renders default cell values from row[column.key]', () => {
    const wrapper = mount(SuDataTable, { props: { columns, rows } })
    expect(cells(wrapper)[0]).toBe('3')
    expect(wrapper.text()).toContain('alpha.internal')
  })

  it('sorts rows by a sortable column via initialSortKey', () => {
    const wrapper = mount(SuDataTable, {
      props: { columns, rows, initialSortKey: 'id' },
    })
    expect(cells(wrapper).filter((v) => /^\d$/.test(v))).toEqual(['1', '2', '3'])
  })

  it('re-sorts desc when the same header is clicked twice', async () => {
    const wrapper = mount(SuDataTable, {
      props: { columns, rows, initialSortKey: 'id' },
    })
    const header = wrapper.findAll('thead th')[0]
    await header.trigger('click') // id asc -> desc
    expect(cells(wrapper).filter((v) => /^\d$/.test(v))).toEqual(['3', '2', '1'])
    expect(header.attributes('aria-sort')).toBe('descending')
  })

  it('emits sort with key and direction on header click', async () => {
    const wrapper = mount(SuDataTable, { props: { columns, rows } })
    await wrapper.findAll('thead th')[2].trigger('click')
    expect(wrapper.emitted('sort')).toEqual([['latency', 'asc']])
  })

  it('ignores clicks on non-sortable headers', async () => {
    const wrapper = mount(SuDataTable, { props: { columns, rows } })
    await wrapper.findAll('thead th')[1].trigger('click')
    expect(wrapper.emitted('sort')).toBeUndefined()
  })

  it('does not mutate the rows prop while sorting', async () => {
    const wrapper = mount(SuDataTable, { props: { columns, rows } })
    await wrapper.findAll('thead th')[0].trigger('click')
    expect(rows[0].id).toBe(3)
  })

  it('renders custom cells through named slots', () => {
    const wrapper = mount(SuDataTable, {
      props: { columns, rows },
      slots: {
        'cell-host': '<template #cell-host="{ value }"><em>{{ value }}</em></template>',
      },
    })
    const host = wrapper.findAll('tbody td')[1]
    expect(host.find('em').exists()).toBe(true)
    expect(host.text()).toBe('gamma.internal')
  })
})
