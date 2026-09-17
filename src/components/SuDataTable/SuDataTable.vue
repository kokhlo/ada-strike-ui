<script setup lang="ts">
import { computed, ref } from 'vue'

export interface SuDataTableColumn {
  key: string
  label: string
  /** Enable the built-in click-to-sort on this column */
  sortable?: boolean
  /** Optional stable sort accessor; defaults to row[column.key] */
  sortBy?: (row: Record<string, unknown>) => string | number
  align?: 'left' | 'right'
}

const props = withDefaults(
  defineProps<{
    columns: SuDataTableColumn[]
    rows: Record<string, unknown>[]
    initialSortKey?: string
    /** 'asc' | 'desc' for initialSortKey */
    initialSortDir?: 'asc' | 'desc'
    rowKey?: string | ((row: Record<string, unknown>) => string | number)
    caption?: string
  }>(),
  {
    initialSortKey: '',
    initialSortDir: 'asc',
    rowKey: '',
    caption: '',
  },
)

type SortDir = 'asc' | 'desc'
const sortKey = ref<string>(props.initialSortKey)
const sortDir = ref<SortDir>(props.initialSortDir)

const emit = defineEmits<{
  sort: [key: string, dir: SortDir]
}>()

const sortedRows = computed(() => {
  const col = props.columns.find((c) => c.key === sortKey.value && c.sortable)
  if (!col) return props.rows
  const accessor: (row: Record<string, unknown>) => string | number =
    col.sortBy ?? ((row: Record<string, unknown>) => row[col.key] as string | number)
  const factor = sortDir.value === 'asc' ? 1 : -1
  return [...props.rows].sort((a, b) => {
    const va = accessor(a)
    const vb = accessor(b)
    if (va < vb) return -1 * factor
    if (va > vb) return 1 * factor
    return 0
  })
})

function headerClick(col: SuDataTableColumn) {
  if (!col.sortable) return
  if (sortKey.value === col.key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = col.key
    sortDir.value = 'asc'
  }
  emit('sort', col.key, sortDir.value)
}

function ariaSort(col: SuDataTableColumn): 'ascending' | 'descending' | undefined {
  if (sortKey.value !== col.key || !col.sortable) return undefined
  return sortDir.value === 'asc' ? 'ascending' : 'descending'
}

function rowId(row: Record<string, unknown>, i: number): string | number {
  if (typeof props.rowKey === 'function') return props.rowKey(row)
  if (props.rowKey) return String(row[props.rowKey])
  return i
}
</script>

<script lang="ts">
export default { name: 'SuDataTable' }
</script>

<template>
  <div class="su-table-wrap">
    <table class="su-table">
      <caption
        v-if="caption"
        class="su-table__caption"
      >
        {{ caption }}
      </caption>
      <thead>
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            scope="col"
            :class="[
              'su-table__th',
              { 'su-table__th--sortable': col.sortable, 'su-table__th--active': sortKey === col.key },
              col.align === 'right' ? 'su-table__th--right' : '',
            ]"
            :aria-sort="ariaSort(col)"
            @click="headerClick(col)"
          >
            <span class="su-table__th-label">{{ col.label }}</span>
            <span
              v-if="col.sortable"
              class="su-table__sort"
              aria-hidden="true"
            >
              {{ sortKey === col.key ? (sortDir === 'asc' ? '▲' : '▼') : '↕' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in sortedRows"
          :key="rowId(row, i)"
          class="su-table__tr"
        >
          <td
            v-for="col in columns"
            :key="col.key"
            class="su-table__td"
            :class="col.align === 'right' ? 'su-table__td--right' : ''"
          >
            <slot
              :name="`cell-${col.key}`"
              :row="row"
              :value="row[col.key]"
              :index="i"
            >
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.su-table-wrap {
  overflow-x: auto;
}
.su-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--su-font-size);
}
.su-table__caption {
  text-align: left;
  font: 500 var(--su-font-size-xs) var(--su-font-mono);
  color: var(--su-text-faint);
  padding-bottom: var(--su-space-2);
}
.su-table__th {
  text-align: left;
  font: 600 var(--su-font-size-xs) var(--su-font-ui);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--su-text-faint);
  border-bottom: 1px solid var(--su-line-strong);
  padding: var(--su-space-2) var(--su-space-3);
  white-space: nowrap;
  user-select: none;
}
.su-table__th--right {
  text-align: right;
}
.su-table__th--sortable {
  cursor: pointer;
}
.su-table__th--sortable:hover {
  color: var(--su-text);
}
.su-table__th--active {
  color: var(--su-accent);
}
.su-table__th-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.su-table__sort {
  font-size: 9px;
  color: currentColor;
  opacity: 0.9;
}
.su-table__td {
  padding: var(--su-space-2) var(--su-space-3);
  border-bottom: 1px solid var(--su-line);
  color: var(--su-text);
  font-family: var(--su-font-mono);
  font-variant-numeric: tabular-nums;
}
.su-table__td--right {
  text-align: right;
}
.su-table__tr:hover .su-table__td {
  background: var(--su-panel-2);
}
</style>
