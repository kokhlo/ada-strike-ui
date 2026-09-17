<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'ghost' | 'danger'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    disabled?: boolean
    loading?: boolean
    type?: 'button' | 'submit' | 'reset'
    block?: boolean
  }>(),
  {
    variant: 'primary',
    disabled: false,
    loading: false,
    type: 'button',
    block: false,
  },
)

const variantClass = computed(() => `su-button--${props.variant}`)
</script>

<script lang="ts">
export default { name: 'SuButton' }
</script>

<template>
  <button
    class="su-button"
    :class="[variantClass, { 'su-button--block': block, 'is-loading': loading }]"
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
  >
    <span
      v-if="loading"
      class="su-button__spinner"
      aria-hidden="true"
    />
    <slot />
  </button>
</template>

<style>
.su-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--su-space-2);
  font: 600 var(--su-font-size) var(--su-font-ui);
  line-height: 1;
  padding: 7px 14px;
  border-radius: var(--su-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;
  white-space: nowrap;
}
.su-button:focus-visible {
  outline: 2px solid var(--su-focus);
  outline-offset: 1px;
}
.su-button--block {
  display: flex;
  width: 100%;
}

.su-button--primary {
  background: var(--su-accent);
  color: #16100a;
}
.su-button--primary:hover:not(:disabled) {
  background: #ffb254;
}

.su-button--ghost {
  background: transparent;
  color: var(--su-text);
  border-color: var(--su-line-strong);
}
.su-button--ghost:hover:not(:disabled) {
  background: var(--su-panel-2);
  border-color: var(--su-accent);
}

.su-button--danger {
  background: var(--su-error);
  color: #1c0b0b;
}
.su-button--danger:hover:not(:disabled) {
  background: #ff8585;
}

.su-button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.su-button__spinner {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-top-color: transparent;
  animation: su-spin 700ms linear infinite;
}
@keyframes su-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
