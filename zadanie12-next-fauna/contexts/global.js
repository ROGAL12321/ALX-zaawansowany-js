import { useState, useEffect, createContext } from "react";

const INITIAL_STATE = {
  theme: 'light',
  selected: []
}

export const GlobalContext = createContext(INITIAL_STATE)

export const GlobalProvider = ({ children }) => {
  const [providerState, setProviderState] = useState(INITIAL_STATE)

  useEffect(() => {
    const selectedArrayInLS = JSON.parse(localStorage.getItem('selected') ?? null)

    if(selectedArrayInLS) {
      setProviderState({
        ...providerState,
        selected: selectedArrayInLS
      })
    }
  }, [])

  const changeTheme = (theme) => {
    setProviderState({
      ...providerState,
      theme
    })
  }

  const handleEntryChange = (id) => {
    // Sprawdzam czy element istnieje w stanie
    const isSelected = providerState.selected.find(element => element === id)

    // Jak istnieje, to odfiltrowuje
    // Jak nie ma, to dodaje
    const newSelectedArray = isSelected
      ? providerState.selected.filter(elem => elem !== id)
      : [...providerState.selected, id]

    // Dodaje do stanu globalnego
    setProviderState({
      ...providerState,
      selected: newSelectedArray
    })

    localStorage.setItem('selected', JSON.stringify(newSelectedArray))
  }

  return (
    <GlobalContext.Provider value={{
      state: providerState,
      changeTheme,
      handleEntryChange
    }}>
      {children}
    </GlobalContext.Provider>
  )
}