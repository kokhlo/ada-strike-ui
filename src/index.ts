import type { App } from 'vue'
import './styles/tokens.css'
import SuButton from './components/SuButton/SuButton.vue'
import SuBadge from './components/SuBadge/SuBadge.vue'
import SuCard from './components/SuCard/SuCard.vue'
import SuKbd from './components/SuKbd/SuKbd.vue'
import SuToggle from './components/SuToggle/SuToggle.vue'
import SuDataTable from './components/SuDataTable/SuDataTable.vue'
import type { SuDataTableColumn } from './components/SuDataTable/SuDataTable.vue'

export const version = '0.1.0'

export { SuButton, SuBadge, SuCard, SuKbd, SuToggle, SuDataTable }
export type { SuDataTableColumn }

export default {
  install(app: App) {
    app.component(SuButton.name || 'SuButton', SuButton)
    app.component(SuBadge.name || 'SuBadge', SuBadge)
    app.component(SuCard.name || 'SuCard', SuCard)
    app.component(SuKbd.name || 'SuKbd', SuKbd)
    app.component(SuToggle.name || 'SuToggle', SuToggle)
    app.component(SuDataTable.name || 'SuDataTable', SuDataTable)
  },
}
