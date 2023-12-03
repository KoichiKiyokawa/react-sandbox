import { useEffect, useState } from "react"

export const Button: React.FC = () => {
	const [hoge, setHoge] = useState(false)

	useEffect(() => {
		setHoge(true)
	}, [])

	return (
		<div>
			<img src="" alt="" />
			{hoge}
		</div>
	)
}
