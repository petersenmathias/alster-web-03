// place files you want to import through the `$lib` alias in this folder.
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function storyBlokSrcSet(src?: string | null): string {
	if (!src || !src.length || !/\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(src)) return '';
	const sizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

	return `${sizes
		.map((size) => {
			return `${src}/m/${size}x0 ${size}w`;
		})
		.join(', ')}`;
}
