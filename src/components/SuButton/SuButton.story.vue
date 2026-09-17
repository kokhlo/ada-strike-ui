<script setup lang="ts">
import SuButton from './SuButton.vue'

function initState() {
  return {
    variant: 'primary',
    disabled: false,
    loading: false,
    block: false,
  }
}
</script>

<template>
  <Story
    title="Button"
    :init-state="initState"
  >
    <template #controls="{ state }">
      <HstSelect
        v-model="state.variant"
        title="Variant"
        :options="['primary', 'ghost', 'danger']"
      />
      <HstBool
        v-model="state.disabled"
        title="Disabled"
      />
      <HstBool
        v-model="state.loading"
        title="Loading"
      />
      <HstBool
        v-model="state.block"
        title="Block"
      />
    </template>
    <template #default="{ state }">
      <Variant
        id="playground"
        title="Playground"
      >
        <SuButton
          :variant="state.variant"
          :disabled="state.disabled"
          :loading="state.loading"
          :block="state.block"
        >
          Deploy
        </SuButton>
      </Variant>

      <Variant
        id="primary"
        title="Primary"
      >
        <div class="row">
          <SuButton>Default</SuButton>
          <SuButton loading>
            Deploying…
          </SuButton>
          <SuButton disabled>
            Disabled
          </SuButton>
        </div>
      </Variant>

      <Variant
        id="ghost"
        title="Ghost"
      >
        <div class="row">
          <SuButton variant="ghost">
            Cancel
          </SuButton>
          <SuButton
            variant="ghost"
            disabled
          >
            Cancel
          </SuButton>
        </div>
      </Variant>

      <Variant
        id="danger"
        title="Danger"
      >
        <div class="row">
          <SuButton variant="danger">
            Purge
          </SuButton>
          <SuButton
            variant="danger"
            loading
          >
            Removing…
          </SuButton>
          <SuButton
            variant="danger"
            disabled
          >
            Purge
          </SuButton>
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
