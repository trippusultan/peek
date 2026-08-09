// frontend-patterns: async data-fetching hook (useQuery)
import { useCallback, useEffect, useState } from 'react'

export function useQuery(key, fetcher, options = {}) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const refetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetcher()
      setData(result)
      options.onSuccess?.(result)
    } catch (err) {
      setError(err)
      options.onError?.(err)
    } finally {
      setLoading(false)
    }
  }, [fetcher, options])

  useEffect(() => {
    if (options.enabled !== false) refetch()
  }, [key, refetch, options.enabled])

  return { data, error, loading, refetch }
}
