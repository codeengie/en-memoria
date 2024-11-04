import localFont from 'next/font/local';
import './globals.scss';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
});

export const metadata = {
	title: 'EnMemoria',
	description:
		'EnMemoria is a customizable digital photo frame application built with Next.js, designed to run on a Raspberry Pi 5 with a touch screen. This application allows users to display a rotating gallery of images stored locally on the Raspberry Pi, transforming it into a beautiful and interactive photo display.'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
