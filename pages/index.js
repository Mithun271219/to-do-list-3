import List from "@/Components/List"
import ContextState from '../Context/ContextState'

export default function Home() {
  return (
    <ContextState>
      <List />
    </ContextState>
  )
}