export function Features() {
	return (
		<section id="features" className="px-4 mb-24">
			<ul className="grid gap-16 md:grid-cols-3">
				<li className="">
					<div className="bg-[#f0f0f0] h-full px-2 py-8 relative grid place-items-center rounded-tl-2xl rounded-br-2xl shadow-xl">
						<img
							src="/images/icon-luxury.png"
							alt="luxury property"
							className="absolute -top-10 h-16 p-2 rounded-full bg-[#fafafa] ring-1 ring-gray-400 shadow-xl"
						/>
						<h3 className="p-4 font-bold text-xl">
							Luxurious Properties
						</h3>
						<p className="text-center text-gray-400">
							Explore our exquisite collection of luxurious
							estates, meticulously crafted with opulent features
							and impeccable design. Experience the epitome of
							elegance and indulge in the finest living spaces.
						</p>
					</div>
				</li>
				<li className="">
					<div className="bg-[#f0f0f0] h-full px-2 py-8 relative grid place-items-center rounded-tl-2xl rounded-br-2xl shadow-xl">
						<img
							src="/images/icon-location.png"
							alt="prime location"
							className="absolute -top-10 h-16 p-2 rounded-full bg-[#fafafa] ring-1 ring-gray-400 shadow-xl"
						/>
						<h3 className="p-4 font-bold text-xl">
							Prime Locations
						</h3>
						<p className="text-center text-gray-400">
							Discover prestigious estates situated in prime
							locations, offering breathtaking views and
							convenient proximity to renowned amenities, vibrant
							city centers, and picturesque natural landscapes.
						</p>
					</div>
				</li>
				<li className="">
					<div className="bg-[#f0f0f0] h-full px-2 py-8 relative grid place-items-center rounded-tl-2xl rounded-br-2xl shadow-xl">
						<img
							src="/images/icon-secure.png"
							alt="secure investement"
							className="absolute -top-10 h-16 p-2 rounded-full bg-[#fafafa] ring-1 ring-gray-400 shadow-xl"
						/>
						<h3 className="p-4 font-bold text-xl">
							Secure Investment
						</h3>
						<p className="text-center text-gray-400">
							Invest with confidence in our estates, backed by a
							reputation of trust and integrity. Rest assured that
							your investment is safeguarded, providing you with
							peace of mind for the future.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
}
