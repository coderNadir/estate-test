import { useState } from 'react';
import Modal from 'react-modal';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper';

const images = [
	{
		src: '/images/outside-view.jpg',
		alt: 'outside view estate',
	},
	{
		src: '/images/room-1.jpg',
		alt: 'first room',
	},
	{
		src: '/images/room-2.jpg',
		alt: 'second room',
	},
	{
		src: '/images/room-3.jpg',
		alt: 'second room',
	},
	{
		src: '/images/room-4.jpg',
		alt: 'second room',
	},
	{
		src: '/images/kitchen.jpg',
		alt: 'third room',
	},
	{
		src: '/images/backside-view.jpg',
		alt: 'third room',
	},
];

export function SwipeGalery() {
	const [selectedImage, setSelectedImage] = useState(null);

	const openModal = (imgSrc) => {
		setSelectedImage(imgSrc);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	return (
		<section id="gallery" className="mb-24 w-full h-full ">
			<div className="px-4 md:w-8/12 w-full h-auto m-auto">
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className="mySwiper h-[50vh] md:h-[80vh]"
				>
					{images.map((data) => {
						return (
							<SwiperSlide>
								<div
									style={{
										backgroundImage: `url('${data.src}')`,
									}}
									className="rounded-tl-2xl rounded-br-2xl w-full h-full bg-cover bg-center"
									onClick={() => openModal(data.src)}
								></div>
							</SwiperSlide>
						);
					})}
				</Swiper>

				{/* modal */}
				<Modal
					isOpen={selectedImage !== null}
					onRequestClose={closeModal}
					contentLabel="Enlarged Image"
					className=" shadow-2xl ring-1 ring-white"
					style={{
						overlay: {
							position: 'fixed',
							zIndex: 1020,
							top: 0,
							left: 0,
							width: '100vw',
							height: '100vh',
							background: 'rgba(230, 230, 230, 0.75)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						},
						content: {
							background: 'transparent',
							width: '45rem',
							maxWidth: 'calc(100vw - 2rem)',
							maxHeight: 'calc(100vh - 2rem)',
							overflowY: 'auto',
							position: 'relative',
							// border: '1px solid #ccc',
							// borderRadius: '0.3rem',
							borderBottomRightRadius: '1rem',
							borderTopLeftRadius: '1rem',
							border: 'none',
						},
					}}
				>
					<img src={selectedImage} alt="Enlarged" />
					{/* <button onClick={closeModal}>X</button> */}
				</Modal>
			</div>
		</section>
	);
}
