import { useState } from "react"

export const useName = (name) => {
	const [currentName, setCurrentName] = useState(name);

	return { currentName, setCurrentName }
}