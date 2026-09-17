<script setup lang="ts">
import { ref } from 'vue'
import SuDataTable from './SuDataTable.vue'
import SuBadge from '../SuBadge/SuBadge.vue'
import type { SuDataTableColumn } from './SuDataTable.vue'

const columns: SuDataTableColumn[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'node', label: 'Node' },
  { key: 'region', label: 'Region', sortable: true },
  { key: 'latency', label: 'Latency, ms', sortable: true, align: 'right' },
  { key: 'state', label: 'State' },
]

const rows = ref([
  { id: 3, node: 'gamma.internal', region: 'eu', latency: 240, state: 'degraded' },
  { id: 1, node: 'alpha.internal', region: 'eu', latency: 90, state: 'healthy' },
  { id: 2, node: 'beta.internal', region: 'us', latency: 120, state: 'healthy' },
  { id: 4, node: 'delta.internal', region: 'us', latency: 410, state: 'failed' },
])
</script>

<template>
  <Story
    title="DataTable"
    :layout="{ type: 'single', iframe: false }"
  >
    <template #default>
      <Variant
        id="sortable"
        title="Sortable columns"
      >
        <SuDataTable
          :columns="columns"
          :rows="rows"
          caption="Nodes — click a header to sort"
          initial-sort-key="latency"
        >
          <template #cell-node="{ value }">
            <strong>{{ value }}</strong>
          </template>
          <template #cell-region="{ value }">
            <code>{{ value }}</code>
          </template>
        </SuDataTable>
      </Variant>

      <Variant
        id="custom-cells"
        title="Custom cells (slots + Badge)"
      >
        <SuDataTable
          :columns="columns"
          :rows="rows"
        >
          <template #cell-state="{ value }">
            <SuBadge
              :tone="value === 'healthy' ? 'success' : value === 'degraded' ? 'warning' : 'error'"
              dot
            >
              {{ value }}
            </SuBadge>
          </template>
          <template #cell-latency="{ value }">
            <span :style="{ color: Number(value) > 300 ? 'var(--su-error)' : undefined }">{{ value }}</span>
          </template>
        </SuDataTable>
      </Variant>
    </template>
  </Story>
</template>

