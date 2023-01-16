
import { createRoot } from 'react-dom/client'
import App from './templates/pages/dt/search'
createRoot(document.getElementById('root') as HTMLElement).render(
	<App location={ '' as any } pageContext={ '' } />
)