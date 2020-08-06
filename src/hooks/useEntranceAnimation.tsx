import { useState, useLayoutEffect, RefObject } from 'react'

export const useEntranceAnimation = (element: RefObject<HTMLElement>) => {

    const [shoudldShow, setShoudShow] = useState(false)

    const onScroll = () => {
        if (element.current !== null) {
            const { top } = element.current.getBoundingClientRect()
            if (top < 300)
                setShoudShow(true)
            else
                setShoudShow(false)
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return shoudldShow

}