import { useCallback } from 'react'

function useGetCode(urls) {
    const getData = useCallback(async () => {
        const resolvedApiPromises = await Promise.all(urls.map(url => fetch(url)))
        const codeSnippets = await Promise.all(resolvedApiPromises.map(resp => resp.text()))
        return new Promise((resolve, _) => resolve(codeSnippets))
    }, [])
    return getData
}

export default useGetCode