import { CTA } from '../CTA/cta';
import { Features } from '../features/features';
import { Footer } from '../footer/footer';
import { Gallery } from '../gallery/gallery';
import { SwipeGalery } from '../gallery/swiper';
import { Header } from '../header/header';
import { Map } from '../map/map';
import { RegisterEmail } from '../register-email/register-email';

export function Home() {
	return (
		<div className="font-[Belanosima]">
			<Header></Header>
			{/* <Gallery></Gallery> */}
			<SwipeGalery></SwipeGalery>
			<Features></Features>
			<CTA></CTA>
			<Map></Map>
			<RegisterEmail></RegisterEmail>
			<Footer></Footer>
		</div>
	);
}
