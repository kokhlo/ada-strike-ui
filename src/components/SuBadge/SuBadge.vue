<script setup lang="ts">
type Tone = 'neutral' | 'accent' | 'success' | 'error' | 'warning' | 'info'

withDefaults(
  defineProps<{
    tone?: Tone
    /** Render as a small solid status dot + label instead of an outlined tag */
    dot?: boolean
  }>(),
  {
    tone: 'neutral',
    dot: false,
  },
)
</script>

<script lang="ts">
export default { name: 'SuBadge' }
</script>

<template>
  <span
    class="su-badge"
    :class="[`su-badge--${tone}`, { 'su-badge--dot': dot }]"
  >
    <span
      v-if="dot"
      class="su-badge__dot"
      aria-hidden="true"
    />
    <slot />
  </span>
</template>

<style>
.su-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font: 600 var(--su-font-size-xs) var(--su-font-mono);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid var(--su-line-strong);
  color: var(--su-text-muted);
  background: var(--su-panel-2);
  white-space: nowrap;
}
.su-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.su-badge--neutral { color: var(--su-text-muted); }
.su-badge--accent {
  color: var(--su-accent);
  border-color: rgba(255, 158, 44, 0.45);
  background: var(--su-accent-soft);
}
.su-badge--success {
  color: var(--su-success);
  border-color: rgba(126, 224, 138, 0.45);
  background: var(--su-success-soft);
}
.su-badge--error {
  color: var(--su-error);
  border-color: rgba(255, 107, 107, 0.45);
  background: var(--su-error-soft);
}
.su-badge--warning {
  color: var(--su-warning);
  border-color: rgba(230, 180, 80, 0.45);
  background: var(--su-warning-soft);
}
.su-badge--info {
  color: var(--su-info);
  border-color: rgba(93, 169, 255, 0.45);
  background: var(--su-info-soft);
}
</style>
