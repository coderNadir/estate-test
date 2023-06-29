import { CTA } from '../CTA/cta';
import { Features } from '../features/features';
import { Footer } from '../footer/footer';
import { Gallery } from '../gallery/gallery';
import { SwipeGalery } from '../gallery/swiper';
import { Header } from '../header/header';
import { Map } from '../map/map';

export function Home() {
	return (
		<>
			<Header></Header>
			{/* <Gallery></Gallery> */}
			<SwipeGalery></SwipeGalery>
			<Features></Features>
			<Map></Map>
			<CTA></CTA>
			<Footer></Footer>
		</>
	);
}
