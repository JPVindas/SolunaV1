import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Soluna Perfumería | Fragancias que dejan huella', description: 'Explora perfumes para hombre, mujer y unisex. Soluna Perfumería, Costa Rica.' };
export default function RootLayout({ children }: {children: React.ReactNode}) { return <html lang="es"><body>{children}</body></html>; }
