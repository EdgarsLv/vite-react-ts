import { useState, useEffect } from 'react'

export default function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue === null ? defaultValue : JSON.parse(storedValue)
  })

  useEffect(() => {
    const listener = (e: { storageArea: Storage; key: string; newValue: any }) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue))
      }
    }
    window.addEventListener('storage', listener as any)

    return () => {
      window.removeEventListener('storage', listener as any)
    }
  }, [key, defaultValue])

  const setValueInLocalStorage = (newValue: (arg0: any) => any) => {
    setValue((currentValue: any) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue
      localStorage.setItem(key, JSON.stringify(result))
      return result
    })
  }

  return [value, setValueInLocalStorage]
}
