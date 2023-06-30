import { useState } from 'react';

export function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen((currNavState) => (currNavState = !currNavState));
	};

	return (
		<>
			<nav className="grid grid-cols-3 justify-between md:justify-around px-2 py-4 relative md:bg-[#ffffff42]">
				<img
					src="/images/icon-logo.png"
					alt="logo"
					className="h-12 md:ml-6 md:h-14"
				/>
				{/* social medial links */}
				<ul className="grid grid-cols-2 place-items-center italic text-gray-700">
					<li>
						<a
							href="https://t.me/nadiro0?start=213667083631"
							target="_blank"
							rel="noreferrer"
							className="flex place-items-center gap-2"
						>
							<img
								src="/images/icon-telegram.svg"
								alt="telegram icon"
								className="w-6 animate-pulse"
							/>
							{/* <span>Telegram</span> */}
						</a>
					</li>
					<li>
						<a
							href="https://api.whatsapp.com/send?phone=213667083631"
							target="_blank"
							rel="noreferrer"
							className="flex place-items-center gap-2"
						>
							<img
								src="/images/icon-whatsapp.svg"
								alt="whatsapp icon"
								className="w-6 animate-pulse"
							/>
							{/* <span>WhatsApp</span> */}
						</a>
					</li>
				</ul>
				{!isNavOpen && (
					<img
						src="/images/icon-burger-menu.svg"
						alt=""
						className="justify-self-end self-center h-8 text-white transition duration-300 ease-in-out md:hidden"
						onClick={() => toggleNav(isNavOpen)}
					/>
				)}
				<div
					className={`bg-[#e6E6e6] h-screen w-full z-10 justify-self-end opacity-90 absolute top-0 transition ease-in-out duration-500 md:bg-transparent md:h-fit md:w-fit md:mr-6 md:transform-none ${
						isNavOpen ? 'translate-x-1/2' : 'translate-x-full'
					}`}
				>
					<div class="h-full px-2 py-2 relative grid place-content-start">
						<img
							src="/images/icon-close.svg"
							alt="icon close nav bar"
							className={`text-white md:hidden h-6 ${
								isNavOpen ? 'animate-spin-right' : ''
							} ${!isNavOpen ? 'animate-spin-left' : ''}`}
							onClick={() => toggleNav(isNavOpen)}
						/>
						{/* <fa-icon
        [icon]="iconClose"
        size="2xl"
        class="text-white md:hidden"
        (click)="navService.toggleNav()"
      ></fa-icon> */}

						<ul className="font-roboto-slab mt-10 h-72 grid md:flex gap-2 place-content-start text-xl text-gray-700 capitalize font-semibold pointer-events-auto md:h-fit md:mt-[1.3rem] md:gap-10 md:hover:">
							<li
								className="px-2 transition-all duration-300 py-1 cursor-pointer hover:border-none hover:text-primary-color hover:rounded-sm md:border-b md:border-b-white hover:bg-white"
								// (click)="scrollService.scrollTo($event)"
								data-rooms="rooms-section"
							>
								contact
							</li>
							<li
								className="px-2 transition-all duration-300 py-1 cursor-pointer hover:border-none hover:text-primary-color hover:rounded-sm md:border-b md:border-b-white hover:bg-white"
								// (click)="scrollService.scrollTo($event)"
								data-map="map-section"
							>
								address
							</li>
							<li
								className="px-2 transition-all duration-300 py-1 cursor-pointer hover:border-none hover:text-primary-color hover:rounded-sm md:border-b md:border-b-white hover:bg-white"
								// (click)="scrollService.scrollTo($event)"
								data-reviews="reviews-section"
							>
								map
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
