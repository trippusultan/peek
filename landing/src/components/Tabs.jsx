// frontend-patterns: compound components (Tabs via context)
import { createContext, useContext, useState } from 'react'

const TabsContext = createContext(undefined)

export function Tabs({ defaultTab, onTabChange, children }) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, onTabChange }}>
      {children}
    </TabsContext.Provider>
  )
}

export function TabList({ children }) {
  return <div className="tabs" role="tablist">{children}</div>
}

export function Tab({ id, children }) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('Tab must be used within Tabs')
  const { activeTab, setActiveTab, onTabChange } = context
  return (
    <button
      role="tab"
      aria-selected={activeTab === id}
      className={activeTab === id ? 'on' : ''}
      onClick={() => { setActiveTab(id); onTabChange?.(id) }}
    >
      {children}
    </button>
  )
}
