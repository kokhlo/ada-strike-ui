<script setup lang="ts">
import SuCard from './SuCard.vue'
import SuBadge from '../SuBadge/SuBadge.vue'
import SuButton from '../SuButton/SuButton.vue'
</script>

<template>
  <Story title="Card">
    <template #default>
      <Variant
        id="basic"
        title="Basic"
      >
        <SuCard
          title="Endpoints"
          meta="12 items"
        >
          <p>Body content goes here. Use cards as raised panels on the base surface.</p>
        </SuCard>
      </Variant>

      <Variant
        id="flush"
        title="Flush body (noPadding)"
      >
        <SuCard
          title="Recent events"
          meta="live"
          no-padding
        >
          <div class="event">
            <code>2026-09-17T09:12:04Z</code>
            <span>checkpoint reached</span>
          </div>
          <div class="event">
            <code>2026-09-17T09:14:41Z</code>
            <span>sync complete</span>
          </div>
        </SuCard>
      </Variant>

      <Variant
        id="footer"
        title="With footer actions"
      >
        <SuCard
          title="Region eu-west"
          meta="4 nodes"
        >
          <p>Body</p>
          <template #footer>
            <div class="row">
              <SuButton variant="ghost">
                Details
              </SuButton>
              <SuButton>Drain</SuButton>
            </div>
          </template>
        </SuCard>
      </Variant>

      <Variant
        id="custom-header"
        title="Custom header slot"
      >
        <SuCard>
          <template #header>
            <div class="row">
              <strong>Queue depth</strong>
              <SuBadge
                tone="warning"
                dot
              >
                growing
              </SuBadge>
            </div>
          </template>
          <p>Any markup can replace the default title/meta header.</p>
        </SuCard>
      </Variant>
    </template>
  </Story>
</template>


<style scoped>
.row {
  display: flex;
  gap: 12px;
  align-items: center;
}
.event {
  display: flex;
  gap: 12px;
  padding: 8px 16px;
  border-bottom: 1px solid #232d3d;
  font-size: 12px;
}
.event:last-child {
  border-bottom: none;
}
</style>
