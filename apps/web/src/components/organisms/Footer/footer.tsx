import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const Footer = () => {
	return (
		<footer className="border-t-4 border-toreaBay-800 py-6">
			<div className="container">
				<div className="grid grid-cols-5 gap-6 justify-center items-start">
					<div className="space-y-4">
						<h4 className="text-base font-bold">Hubungi Kami</h4>
						<ul className="flex flex-col gap-2">
							<li className="py-2">
								<IconMapPin className="w-6 h-6" />
								Jakarta, Indonesia
							</li>
							<li className="py-2">
								<a
									href="tel:02150867089"
									className="link link-hover hover:link-primary text-sm font-normal text-stormGray flex gap-2"
								>
									<IconPhone className="w-6 h-6" />
									02150867089
								</a>
							</li>
							<li className="py-2">
								<a
									href="mailto:example@gmail.com"
									className="link link-hover hover:link-primary text-sm font-normal text-stormGray flex gap-2"
								>
									<IconMail className="w-6 h-6" />
									example@gmail.com
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h4 className="text-base font-bold">Informasi</h4>
						<ul className="flex flex-col gap-2">
							<li className="py-2">
								<a
									href="#"
									className="link link-hover hover:link-primary text-sm font-normal text-stormGray"
								>
									Hubungi Kami
								</a>
							</li>
							<li className="py-2">
								<a
									href="#"
									className="link link-hover hover:link-primary text-sm font-normal text-stormGray"
								>
									Kebijakan Privacy
								</a>
							</li>
							<li className="py-2">
								<a
									href="#"
									className="link link-hover hover:link-primary text-sm font-normal text-stormGray"
								>
									FAQ
								</a>
							</li>
							<li className="py-2">
								<a
									href="#"
									className="link link-hover hover:link-primary text-sm font-normal text-stormGray"
								>
									List Order
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h4 className="text-base font-bold">Metode Pembayaran</h4>
						<ul className="grid grid-cols-3 gap-2  justify-center items-center">
							<li>
								<a href="#">
									<img
										src="/images/bank-bri.png"
										alt="BRI"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="/images/bank-permata.png"
										alt="Permata"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="/images/bank-mandiri.png"
										alt="Mandiri"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="/images/bank-bri.png"
										alt="BRI"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="/images/bank-permata.png"
										alt="Permata"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="/images/bank-mandiri.png"
										alt="Mandiri"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h4 className="text-base font-bold">Pengiriman</h4>
						<ul className="grid grid-cols-3 gap-2  justify-center items-center">
							<li>
								<a href="#">
									<img
										src="/images/sap-delivery.png"
										alt="SAP"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="/images/sentral-cargo.png"
										alt="Sentral Cargo"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="/images/jne-delivery.png"
										alt="JNE"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="/images/jnt-delivery.png"
										alt="JNT"
										className="w-full object-cover object-center"
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h4 className="text-base font-bold">Ikuti KamI</h4>
						<ul className="flex flex-row gap-2">
							<li>
								<a href="#">
									<img
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAvtJREFUaEPtmktME1EUhv9zB7UgtCi003ThQgUVF0bjwkfcmLjRpdGFOx+JidGwUPtwgyS+KCYm6tIQd0YW7HRNjCS6MLACArhTYlswMLXl0c49ZgaNhDQzLXZgmsxNZrqYMzP/d+6cc256LuHPCHalG8VCfSfAF5hkO0HU/73mhl+GXCAWEyD0S9/i80x36Jehi4xTa0JrVyTeA9jjBrG2GhhTkvlspjcwSabnF30jNSP+H90k9PxhUmPaPQAPbandaZAgNaqNgHDInfqsVRHzMIVic/lNDtgsM2bNgCQ0A+ZR1mCmvPEJcVnW1TJiLkKItywxsLUgB789C/xc++hd8bkdy6xEwHyUCa+tXr2hAFJikCCvpXubv5bjj9ZoLqKQ/t0tAH0pX9N1dFOxHPFmencNAPNQS73/9Gg3LZcr3kUArEuJA0bRqUS8ewCY3qSSTZcqFe8aAGY6n042DZQLELk/3VC32LDNsC9IJSyJRzcviJnllgKCpVLlalHhRLaDpf4ALM6A0FgurFk7nKwDzJxJJwMhK0Gh+NxuYvGlkgK2+nmOAkjwWKYn0GEFoMazL8B8sxKvbxgAA5/TPf5j1jMw/4GYTrkSAMCnVI//uCVATBsnYJ8HsF4P2NznzYCdYx3NQjUSA1wQxCUDlUjkph/7x628GI5lDxLpvlI2OugKMd1wtBIz83I6GTBLf7WHGtP6AFyuZYAhACdqFiAU1WaI0FKTAJHbWqteh4zdZ/nfWcipGAgltJMk8bFmAdSodhWEVxsC4BMcLvWivCwUZ5LBrJWInV2z/sYlRVlrs8RKF8CdjgN4SwlvNersX4veatQLYjsPeFnIy0JeFrKMAi+N2iURp5t8js7ASpPP2TarowBmm1WNagkQHtlN1TqvOwtAiK9sNVjwDYOwd50irW5zDIAYEyzzR8zNHsG7821C0DsAbVWGcATAEK8LPpd5EpgyAYyh3vmxHUrDLWK+KIn3V6l7XzUAY7sNoIwJ4n4u5l+mnoZzhu7f6nnyi1c6gw0AAAAASUVORK5CYII="
										alt="Facebook"
										className="w-6 h-6"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABLlJREFUaEPtWm9sU1UU/933XvvadekYkDHcH2eGyia4xWxjLIqICdE4MJi4GEz8ExI1JltCgkH9MBW/GINGp2BcTNw+qGgiSAQy+ED8O6bMONlEDDMbMHEBgrRdu/a1fVfO26ZQ6N6966Br3Enafti5557fOeee+7u7l2FcFrVw3fD6n+acrQfDEjB4Jv42I345guDo4wr/yOXztvY3sQj5xeirsD1UwBDbC6BiRjhr4wQD7zHhqB96POtPRpGP5AR+yBTnJ7ARCKfPW8uK23xNnLG3MyHyiT5y8EZW1O6n6NdkIgAAXayozR8AQ3ZGAuAYoQzwjHR+3OlZAOnO3mwG/ncZyHYwLMxiCMY4hkMcZootRKqEiHdMdb7qPBUbK3Qsz1ehWgQGODvK8Wl/FNv7DIxExyzrKrDuJgd2DkRhxO3zKwyg1KtgQ7kTL3aF7a0maDxZ5sRLVTqUcccTDfT7TLzTa2DZAhWrizTsGYyi+UeLq9mKMIBNlTqabnfig6MGXu2OCGdiVaGGD1e5x1ijgPxyLo5HDozCrQHnwvb5Fgbw3t1uPHCjZrmweyCKzYciCMUmn4CcPvigB6U5ioDrwPkIx97BGMrnKmg/FsUXA1HbccIA3l/pxv3FYwBI/vCb2PR9GD+dTV6o5bkKOtbIHyve7IngrSOGrfOkIAzg+Tt0PLvEeZlRij9lY1uvgd8vmFdMWF+iYfsKt5AjpEQd6YWuMD45bh/5CaPCAMpyFexPEk0Ccmg4bi2+r07HMTQyBoYyRpkTFZ/BsXTHiKi6pScMgJS31rnQsMhhOwEtvkG/iTiH1VlE5UTAxF27gqLqcgDWlmj49W8TzVU67in4by1IzWaj3H0mjoc6QlImhTPQutKN+4o1+A0Or1O0KUr5gn0nYnjm61GpQcIAnljsxJYaXcq4rPKW7oi1z8iIMADiMN+s82C+69pEn5y+d3cQx31XdrPJAAkDICMrbhjbVR1i+5JMIHE6yFH7uVwHku5CNIDI2Bt1LhRmTy+K13+O4N1eufKZEgDaXUu8Ctbf7MCdC7WkBE0m/NQYlu8MImDYc59Eu1IlRINvm6tgX71HmJyJAGk5YmBrjxj7TBkAGXilWgdR5OmQkwETq78M2RLDZHNJZ8Cqu4u8pZlAXGytyTi+CLioCTTsD01KCO3sTAnAhNHFuQo2lDlRMU/FLXMUKTBU7Zs7w9jRL07crgYmJQBkMD+L4bVaF+jgIirEOl8+HEHbMfmuMy1rgIxQxB+71YmHSzW4NfHNjQ7zG78Lo+NkTBTvpHpCGSBGWZOnYp6LIc+toCpPtSIvK53DcTzXGcapcbotOz6lEqINrHGpjrp8VarWadLDZ+LY1mfg4ND0RP1SIEIZuHRAgUcBUevqBSoq56tX5UZ0tv3tvIlv/4rhwKkY6L8O10qkASQ64tEY5uj0AQJR4EKEW5T7eknKAK6Xo9O6kaXb6ZTWwExy3mIFszc0aU5JRl/ycQ5/5l+zFrb7GhlYS5orYUrTWxfd1iOPHH8XB6uckpU0DaKnBtlu77J/H3soiO7JFBCXPfaYCGD5Z9zpH/U/xcAeBbee28ys23u6lQd6TcY/9rq9rUcbmHWY+AcKitrUQ/rb/QAAAABJRU5ErkJggg=="
										alt="Twitter"
										className="w-6 h-6"
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<img
										src="data:image/png;base64,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"
										alt="Instagram"
										className="w-6 h-6"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<span className="divider" />
				<div>
					<p className="text-sm text-center font-normal text-stormGray">
						Copyright <span className="font-bold text-lg">©️</span> 2024 by{" "}
						<a href="#" className="font-semibold text-primary">
							Mercatoria
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
