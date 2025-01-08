import { LoaderCircle } from 'lucide-react'
import { StyledLoader } from './styles'

export function Loader() {
	return (
		<StyledLoader>
			<LoaderCircle className="spinner" />
		</StyledLoader>
	)
}
