<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    /** Optional monospace label in the header, e.g. a counter or code */
    meta?: string
    /** Remove default padding from the body */
    noPadding?: boolean
  }>(),
  {
    title: '',
    meta: '',
    noPadding: false,
  },
)
</script>

<script lang="ts">
export default { name: 'SuCard' }
</script>

<template>
  <section
    class="su-card"
    :aria-label="title || undefined"
  >
    <header
      v-if="title || meta || $slots.header"
      class="su-card__header"
    >
      <slot name="header">
        <h3 class="su-card__title">
          {{ title }}
        </h3>
        <span
          v-if="meta"
          class="su-card__meta"
        >{{ meta }}</span>
      </slot>
    </header>
    <div
      class="su-card__body"
      :class="{ 'su-card__body--flush': noPadding }"
    >
      <slot />
    </div>
    <footer
      v-if="$slots.footer"
      class="su-card__footer"
    >
      <slot name="footer" />
    </footer>
  </section>
</template>

<style>
.su-card {
  background: var(--su-panel);
  border: 1px solid var(--su-line);
  border-radius: var(--su-radius);
  box-shadow: var(--su-shadow);
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.su-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--su-space-3);
  padding: var(--su-space-3) var(--su-space-4);
  border-bottom: 1px solid var(--su-line);
}
.su-card__title {
  margin: 0;
  font: 600 var(--su-font-size) var(--su-font-ui);
  color: var(--su-text);
}
.su-card__meta {
  font: 500 var(--su-font-size-xs) var(--su-font-mono);
  color: var(--su-text-faint);
}
.su-card__body {
  padding: var(--su-space-4);
  flex: 1;
  min-height: 0;
}
.su-card__body--flush {
  padding: 0;
}
.su-card__footer {
  padding: var(--su-space-3) var(--su-space-4);
  border-top: 1px solid var(--su-line);
}
</style>
