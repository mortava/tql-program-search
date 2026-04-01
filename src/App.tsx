import { SearchView } from '@/components/views/SearchView'
import { investors } from '@/data/investors'

export default function App() {
  return <SearchView investors={investors} />
}
