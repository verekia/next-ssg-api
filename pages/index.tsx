import { useEffect, useState } from 'react'

export default function Home() {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setName(data.name))
  }, [])

  return <div>{name}</div>
}
