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
  <Story
    title="Badge"
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
      <Variant
        id="playground"
        title="Playground"
      >
        <SuBadge
          :tone="state.tone"
          :dot="state.dot"
        >
          active
        </SuBadge>
      </Variant>

      <Variant
        id="tones"
        title="All tones"
      >
        <div class="row">
          <SuBadge tone="neutral">
            idle
          </SuBadge>
          <SuBadge tone="accent">
            queued
          </SuBadge>
          <SuBadge tone="success">
            healthy
          </SuBadge>
          <SuBadge tone="warning">
            degraded
          </SuBadge>
          <SuBadge tone="error">
            failed
          </SuBadge>
          <SuBadge tone="info">
            info
          </SuBadge>
        </div>
      </Variant>

      <Variant
        id="dots"
        title="Status dots"
      >
        <div class="row">
          <SuBadge
            tone="success"
            dot
          >
            online
          </SuBadge>
          <SuBadge
            tone="warning"
            dot
          >
            throttled
          </SuBadge>
          <SuBadge
            tone="error"
            dot
          >
            down
          </SuBadge>
        </div>
      </Variant>
    </template>
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
