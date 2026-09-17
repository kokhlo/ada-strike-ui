<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    disabled?: boolean
    label?: string
  }>(),
  {
    modelValue: false,
    disabled: false,
    label: '',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>

<script lang="ts">
export default { name: 'SuToggle' }
</script>

<template>
  <label
    class="su-toggle"
    :class="{ 'is-disabled': disabled }"
  >
    <button
      type="button"
      role="switch"
      class="su-toggle__control"
      :aria-checked="modelValue ? 'true' : 'false'"
      :aria-label="label || undefined"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="su-toggle__thumb" />
    </button>
    <span
      v-if="label || $slots.default"
      class="su-toggle__label"
    >
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style>
.su-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--su-space-2);
  cursor: pointer;
}
.su-toggle.is-disabled {
  cursor: not-allowed;
  opacity: 0.45;
}
.su-toggle__control {
  position: relative;
  width: 30px;
  height: 16px;
  border-radius: 999px;
  border: 1px solid var(--su-line-strong);
  background: var(--su-panel-2);
  padding: 0;
  cursor: inherit;
  transition: background 120ms ease, border-color 120ms ease;
}
.su-toggle__control:focus-visible {
  outline: 2px solid var(--su-focus);
  outline-offset: 1px;
}
.su-toggle__thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--su-text-faint);
  transition: transform 120ms ease, background 120ms ease;
}
.su-toggle__control[aria-checked='true'] {
  background: var(--su-accent-soft);
  border-color: var(--su-accent);
}
.su-toggle__control[aria-checked='true'] .su-toggle__thumb {
  transform: translateX(14px);
  background: var(--su-accent);
}
.su-toggle__label {
  font: 500 var(--su-font-size-sm) var(--su-font-ui);
  color: var(--su-text);
}
</style>
