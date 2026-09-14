import type { Metadata } from 'next';
import './globals.css';
import './polish.css';
import './catalog.css';
import './collections.css';
import {LanguageProvider} from '@/components/language-provider';
import {PerfumeIntro} from '@/components/perfume-intro';
import {CartProvider} from '@/components/cart-provider';
export const metadata: Metadata = { title: 'Soluna Perfumería | Fragancias que dejan huella', description: 'Explora perfumes para hombre, mujer y unisex. Soluna Perfumería, Costa Rica.' };
export default function RootLayout({ children }: {children: React.ReactNode}) { return <html lang="es"><body><LanguageProvider><CartProvider><PerfumeIntro/>{children}</CartProvider></LanguageProvider></body></html>; }

