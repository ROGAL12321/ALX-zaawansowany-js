import { GlobalContext } from 'contexts/global';
import { useContext } from 'react';

function MainLayout({ children }) {
  const { state, changeTheme } = useContext(GlobalContext)

  return (
    <main className="max-w-4xl mx-auto p-4">
      <header>
      <button className={`mx-2 py-2 px-4 rounded ${state.theme === 'light' ? 'bg-gray-300' : 'bg-red-500'}`} onClick={() => changeTheme('light')}>Light</button>
        <button className={`mx-2 py-2 px-4 rounded ${state.theme === 'light' ? 'bg-gray-300' : 'bg-red-500'}`} onClick={() => changeTheme('dark')}>Dark</button>
      </header>
      {children}
    </main>
  )
}

export default MainLayout