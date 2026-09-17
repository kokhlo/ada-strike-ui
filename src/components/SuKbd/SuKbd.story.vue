<script setup lang="ts">
import SuKbd from './SuKbd.vue'
</script>

<template>
  <Story title="Kbd">
    <Variant
      id="single"
      title="Single keys"
    >
      <div class="row">
        <SuKbd>Esc</SuKbd>
        <SuKbd>Tab</SuKbd>
        <SuKbd>Enter</SuKbd>
        <SuKbd>⌘</SuKbd>
      </div>
    </Variant>

    <Variant
      id="chord"
      title="Chords"
    >
      <p class="hint">
        <SuKbd>⌘</SuKbd> + <SuKbd>K</SuKbd> — command palette
      </p>
      <p class="hint">
        <SuKbd>Ctrl</SuKbd> + <SuKbd>Shift</SuKbd> + <SuKbd>F</SuKbd> — search
      </p>
    </Variant>
  </Story>
</template>


<style scoped>
.row {
  display: flex;
  gap: 12px;
  align-items: center;
}
.hint {
  margin: 0 0 8px;
  display: flex;
  gap: 6px;
  align-items: center;
  color: #93a1b5;
}
</style>
