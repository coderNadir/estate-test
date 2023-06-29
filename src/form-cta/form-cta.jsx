import PhoneInput from 'react-phone-input-2';

export function FormCTA() {
	return (
		<>
			{/* form */}
			<div className="bg-gray-100 w-3/4 mb-4 opacity-80 px-4 py-2 grid place-items-center h-auto shadow-2xl place-self-center self-end rounded-tl-2xl rounded-br-2xl overflow-hidden">
				<form action="" className=" w-3/4">
					<div className="">
						<label
							htmlFor="phone"
							className="text-gray-700 ml-1 font-semibold mb-2 inline-block"
						>
							Phone
						</label>

						<div className="mb-4">
							<PhoneInput
								id="phone"
								country={'ae'}
								containerClass="border border-l-0 rounded-xl text-gray-900 focus:ring-1 focus:ring-black"
								inputClass="px-2 md:w-[32rem]"
								containerStyle={{ width: '100%' }}
								inputStyle={{ width: '100%' }}
							/>
						</div>
					</div>
					<button
						className="w-full font-semibold bg-black text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl grid grid-cols-2 gap-2  place-items-center"
						onClick={(e) => {
							e.preventDefault();
						}}
					>
						<span className="place-self-end self-center">
							submit
						</span>
						<img
							src="/images/icon-right-arrow.png"
							alt=""
							className="w-6 mt-1 ml-4 place-self-start"
						/>
					</button>
				</form>
			</div>
		</>
	);
}
