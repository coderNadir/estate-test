export function RegisterEmail() {
	return (
		<section className="mb-24 p-4">
			<div className="p-4 m-auto grid gap-8 shadow-2xl bg-gradient-to-r from-gray-800 to-gray-900 rounded-tl-2xl rounded-br-2xl md:w-2/3 md:p-14 ">
				<div>
					<h2 className="text-2xl font-extrabold text-white">
						Want to be notified about the next launch?
					</h2>
					<p className="text-gray-400">
						Sign up for our newsletter to get notified about our
						next launch to higher your chances for the best deal
					</p>
				</div>

				<div className=" grid gap-2">
					<input
						type="text"
						placeholder="Enter your email"
						className="px-4 py-2 rounded-lg"
					/>
					<button className="px-4 py-2 rounded-lg ring-1 ring-black bg-white text-black font-medium transition-all duration-300 hover:bg-black hover:text-white hover:ring-1 hover:ring-white">
						Notify me
					</button>
					<p className="text-gray-400">
						We will never sell your data, unsubscribe anytime.
					</p>
				</div>
			</div>
		</section>
	);
}
