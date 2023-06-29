import 'react-phone-input-2/lib/style.css';

import { Nav } from '../nav/nav';
import { FormCTA } from '../form-cta/form-cta';

export function Header() {
	return (
		<header
			style={{
				color: '#e6E6e6',
				backgroundImage: `linear-gradient(
        to bottom,
        rgba(230, 230, 230, 0.6),
        rgba(230, 230, 230, 0.2)
      ), url('/images/backside-view.jpg')`,
			}}
			className="mb-24 w-full h-screen bg-cover bg-center overflow-x-hidden grid"
		>
			<div>
				<Nav></Nav>
			</div>
			{/* headet title */}
			<h1 className="text-3xl text-gray-900 font-bold place-self-center text-center">
				Discover Your Dream Estate
			</h1>
			<FormCTA></FormCTA>
		</header>
	);
}
