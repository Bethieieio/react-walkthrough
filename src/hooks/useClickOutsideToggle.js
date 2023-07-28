import { useEffect, useState, useRef } from 'react'

const useClickOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false)
	const ref = useRef(null)
	useEffect(() => {
		const handleClickOutside = (event) => {
			console.log('ref', ref)
			if (ref.current && !ref.current.contains(event.target)) {
				setExpanded(false)
			}
		}
		document.addEventListener('mouseup', handleClickOutside)
		return () => {
			document.removeEventListener ('mouseup', handleClickOutside)}
	}, [ref]);


    return (
        { expanded, setExpanded, ref }
    )
}

export default useClickOutsideToggle