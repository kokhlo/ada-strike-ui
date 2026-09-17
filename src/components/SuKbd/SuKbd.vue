<script setup lang="ts">
/**
 * Keyboard key hint — a single key cap, e.g. `<Kbd>⌘</Kbd><Kbd>K</Kbd>`.
 * For a "chord" use several Kbd elements joined by the browser's own +.
 */
</script>

<script lang="ts">
export default { name: 'SuKbd' }
</script>

<template>
  <kbd class="su-kbd"><slot /></kbd>
</template>

<style>
.su-kbd {
  display: inline-block;
  font: 600 10px/1 var(--su-font-mono);
  color: var(--su-text);
  background: var(--su-panel-2);
  border: 1px solid var(--su-line-strong);
  border-bottom-width: 2px;
  border-radius: 3px;
  padding: 3px 5px;
  min-width: 18px;
  text-align: center;
  white-space: nowrap;
}
</style>
