module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Belanosima: ['Belanosima', 'sans-serif'],
			},
			keyframes: {
				'bg-positions': {
					'0%': {
						'background-position': 'center',
					},
					'35%': {
						'background-position': 'left',
					},
					'75%': {
						'background-position': 'right',
					},
					'100%': {
						'background-position': 'center',
					},
				},
				'spin-right': {
					'0%': { transform: 'rotate(0)' },
					'100%': { transform: 'rotate(180deg)' },
				},
				'spin-left': {
					'0%': { transform: 'rotate(0)' },
					'100%': { transform: 'rotate(-180deg)' },
				},
				inline: {
					'0%, 100%': {
						transform: 'translateX(-25%)',
						'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
					},
					'50%': {
						transform: 'none',
						'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
					},
					// '0%': { transform: 'translateX(0)' },
					// '20%': { transform: 'translateX(4px)' },
					// '40%': { transform: 'translateX(-4px)' },
					// '60%': { transform: 'translateX(4px)' },
					// '80%': { transform: 'translateX(-4px)' },
					// '100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				'bg-positions': 'bg-positions 60s ease-in-out infinite',
				'spin-right': 'spin-right 300ms linear',
				'spin-left': 'spin-left 300ms linear',
				inline: 'inline 1s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
