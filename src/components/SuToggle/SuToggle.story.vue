<script setup lang="ts">
import { ref } from 'vue'
import SuToggle from './SuToggle.vue'

const streaming = ref(true)
</script>

<template>
  <Story title="Toggle">
    <template #default>
      <Variant
        id="basic"
        title="Basic (v-model)"
      >
        <div class="col">
          <SuToggle
            v-model="streaming"
            label="Live stream"
          />
          <p class="state">
            streaming = {{ streaming }}
          </p>
        </div>
      </Variant>

      <Variant
        id="states"
        title="States"
      >
        <div class="col">
          <SuToggle
            :model-value="true"
            label="On"
          />
          <SuToggle
            :model-value="false"
            label="Off"
          />
          <SuToggle
            :model-value="true"
            disabled
            label="Disabled on"
          />
          <SuToggle
            :model-value="false"
            disabled
            label="Disabled off"
          />
        </div>
      </Variant>
    </template>
  </Story>
</template>


<style scoped>
.col {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}
.state {
  margin: 0;
  font-family: var(--su-font-mono);
  font-size: 12px;
  color: #93a1b5;
}
</style>
