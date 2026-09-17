<script setup lang="ts">
import SuBadge from './SuBadge.vue'

function initState() {
  return {
    tone: 'accent',
    dot: false,
  }
}
</script>

<template>
  <Story title="Badge">
    <Variant
      id="playground"
      title="Playground"
      :init-state="initState"
    >
      <template #controls="{ state }">
        <HstSelect
          v-model="state.tone"
          title="Tone"
          :options="['neutral', 'accent', 'success', 'error', 'warning', 'info']"
        />
        <HstBool
          v-model="state.dot"
          title="Status dot"
        />
      </template>
      <template #default="{ state }">
        <SuBadge
          :tone="state.tone"
          :dot="state.dot"
        >
          active
        </SuBadge>
      </template>
    </Variant>

    <Variant
      id="tones"
      title="Tones"
    >
      <div class="row">
        <SuBadge tone="neutral">
          staged
        </SuBadge>
        <SuBadge tone="accent">
          active
        </SuBadge>
        <SuBadge tone="success">
          checked-in
        </SuBadge>
        <SuBadge tone="error">
          quarantined
        </SuBadge>
        <SuBadge tone="warning">
          degraded
        </SuBadge>
        <SuBadge tone="info">
          pivot
        </SuBadge>
      </div>
    </Variant>

    <Variant
      id="dot"
      title="Status dot"
    >
      <div class="row">
        <SuBadge
          tone="success"
          dot
        >
          session alive
        </SuBadge>
        <SuBadge
          tone="error"
          dot
        >
          listener down
        </SuBadge>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.row {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
