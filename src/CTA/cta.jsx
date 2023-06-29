export function CTA() {
	return (
		<section className="px-4 mb-24">
			<div className="bg-[#f0f0f0] px-4 py-6 shadow-lg grid gap-8 rounded-tl-2xl rounded-br-2xl">
				<div className="text-center">
					<h2 className="mb-2 text-4xl font-bold">
						Ready for the deal?
					</h2>
					<p className="text-gray-400">
						once you start a call one of our agent will reach you
						out in a moment!
					</p>
				</div>
				<div className="grid grid-cols-2 place-items-center">
					<p className="ml-16 text-4xl self-center font-bold">
						+9711234567
					</p>
					<a
						href="tel:+213456789"
						className="mr-4 animate-bounce p-2 shadow-lg rounded-full place-self-end bg-[#fafafa]"
					>
						<img
							src="images/icon-call.png"
							alt="icon to make a call with an agent"
							className=""
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
