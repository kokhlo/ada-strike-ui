import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

// HISTOIRE_BASE is set by the Pages workflow so the build emits
// absolute asset URLs under /ada-strike-ui/; local dev keeps '/'.
const base = process.env.HISTOIRE_BASE || '/'

export default defineConfig({
  setupFile: 'src/histoire-setup.ts',
  plugins: [HstVue()],
  vite: {
    base,
  },
})
