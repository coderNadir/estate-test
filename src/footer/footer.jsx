import { FormCTA } from '../form-cta/form-cta';

export function Footer() {
	return (
		<footer className="p-4 grid place-items-center gap-8 bg-black text-white relative md:grid-cols-2">
			<img src="/images/icon-logo.png" alt="icon logo in the footer" />
			<ul className="grid gap-2 place-items-center cursor-pointer capitalize md:flex">
				<li className="border-b border-white pb-2">home</li>
				<li className="border-b border-white pb-2">developer</li>
				<li className="border-b border-white pb-2">case studies</li>
				<li className="border-b border-white pb-2">deals</li>
				<li className="border-b border-white pb-2">contact</li>
				<li className="border-b border-white pb-2">about us</li>
			</ul>
			<ul className="grid grid-cols-2 gap-2 place-items-center cursor-pointer capitalize">
				<li className="flex gap-2 items-center">
					<img
						src="images/icon-whatsapp.svg"
						alt=""
						className="w-8 p-1 rounded-full bg-[#fafafa]"
					/>
					<span>whatsApp</span>
				</li>
				<li className="flex gap-2 items-center">
					<img
						src="images/icon-telegram.svg"
						alt=""
						className="w-8 p-1 rounded-full bg-[#fafafa]"
					/>
					<span>telegram</span>
				</li>
			</ul>

			<FormCTA></FormCTA>

			<div className="h-2 bg-white w-full rounded-tl-2xl rounded-br-2xl md:col-span-full"></div>
		</footer>
	);
}
