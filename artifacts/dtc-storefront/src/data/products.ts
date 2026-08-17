export type Category = 'fashion' | 'cosmetics';

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: Category;
  priceBDT: number;
  compareAtPriceBDT?: number;
  description: string;
  image: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  sizes?: string[];
  colors?: string[];
  stock: number;
  details: string[];
};

const art = (bg: string, ink: string, kind: 'dress' | 'scarf' | 'bottle' | 'compact' | 'oil' | 'blouse') =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 960"><rect width="800" height="960" fill="${bg}"/><circle cx="666" cy="150" r="180" fill="${ink}" opacity=".13"/><circle cx="92" cy="820" r="210" fill="${ink}" opacity=".08"/><path d="M0 710 Q220 560 420 710 T800 610 V960 H0Z" fill="${ink}" opacity=".11"/>${kind === 'dress' ? `<path d="M330 178 L470 178 L495 344 L650 790 Q400 875 150 790 L305 344Z" fill="${ink}" opacity=".84"/><path d="M330 178 Q400 245 470 178" fill="none" stroke="${bg}" stroke-width="14"/><path d="M252 575 Q400 620 548 575" stroke="${bg}" stroke-width="9" opacity=".7"/>` : kind === 'scarf' ? `<path d="M180 190 Q400 120 620 190 L570 800 Q400 850 230 800Z" fill="${ink}" opacity=".84"/><path d="M230 260 L570 720 M570 260 L230 720" stroke="${bg}" stroke-width="12" opacity=".62"/><path d="M235 350 Q400 410 565 350" fill="none" stroke="${bg}" stroke-width="9"/>` : kind === 'bottle' ? `<rect x="300" y="270" width="200" height="500" rx="38" fill="${ink}" opacity=".84"/><rect x="346" y="170" width="108" height="120" rx="18" fill="${ink}" opacity=".92"/><rect x="325" y="440" width="150" height="142" rx="8" fill="${bg}" opacity=".68"/><text x="400" y="524" text-anchor="middle" fill="${ink}" font-size="28" font-family="serif">NOORÉ</text>` : kind === 'compact' ? `<rect x="190" y="300" width="420" height="270" rx="135" fill="${ink}" opacity=".84"/><ellipse cx="400" cy="435" rx="125" ry="88" fill="${bg}" opacity=".6"/><path d="M260 285 Q400 130 540 285" fill="none" stroke="${ink}" stroke-width="22" opacity=".84"/>` : kind === 'oil' ? `<path d="M330 170 H470 L505 760 Q400 825 295 760Z" fill="${ink}" opacity=".84"/><path d="M330 170 H470 V285 H330Z" fill="${ink}" opacity=".95"/><path d="M333 440 H467 V610 H333Z" fill="${bg}" opacity=".65"/>` : `<path d="M240 280 L350 185 L400 270 L450 185 L560 280 L510 350 L485 790 H315 L290 350Z" fill="${ink}" opacity=".84"/><path d="M400 270 V790 M290 350 H510" stroke="${bg}" stroke-width="10" opacity=".72"/>`}</svg>`)}`;

export const products: Product[] = [
  { id: 'f1', slug: 'jamdani-day-dress', title: 'Jamdani Day Dress', category: 'fashion', priceBDT: 4850, compareAtPriceBDT: 5600, description: 'A quiet statement in soft cotton voile, finished with a hand-drawn Jamdani-inspired border.', image: art('#d7e0d6', '#275249', 'dress'), badge: 'New', rating: 4.8, reviewCount: 24, sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Moss', 'Cloud'], stock: 12, details: ['100% cotton voile', 'Relaxed, ankle-grazing silhouette', 'Made in Bangladesh', 'Cold wash, line dry'] },
  { id: 'f2', slug: 'sundarbans-silk-scarf', title: 'Sundarbans Silk Scarf', category: 'fashion', priceBDT: 2950, description: 'An airy silk square inspired by the shifting greens and golds of the mangrove tide.', image: art('#e6d6b8', '#9c6547', 'scarf'), badge: 'Limited', rating: 4.9, reviewCount: 17, sizes: ['One size'], colors: ['Tide', 'Marigold'], stock: 7, details: ['100% mulberry silk', '90 x 90 cm', 'Hand-rolled edge', 'Dry clean recommended'] },
  { id: 'f3', slug: 'linen-quiet-blouse', title: 'Quiet Linen Blouse', category: 'fashion', priceBDT: 3650, description: 'Clean lines, a generous sleeve and just enough texture for slow mornings and late dinners.', image: art('#ead7cf', '#904e51', 'blouse'), rating: 4.7, reviewCount: 31, sizes: ['S', 'M', 'L', 'XL'], colors: ['Rosewood', 'Sage'], stock: 18, details: ['European linen blend', 'Pearl button closure', 'Designed for a relaxed fit', 'Made in Bangladesh'] },
  { id: 'f4', slug: 'noor-cotton-kurta', title: 'Noor Cotton Kurta', category: 'fashion', priceBDT: 4250, description: 'An everyday kurta with a sculptural neckline and the ease of your favourite well-worn piece.', image: art('#d9ded2', '#5c6d50', 'dress'), rating: 4.6, reviewCount: 12, sizes: ['XS', 'S', 'M', 'L'], colors: ['Olive', 'Ivory'], stock: 9, details: ['Textured cotton', 'Side slits for movement', 'Hidden pocket', 'Hand wash'] },
  { id: 'c1', slug: 'rosewater-cloud-mist', title: 'Rosewater Cloud Mist', category: 'cosmetics', priceBDT: 1450, description: 'A cool, fine mist of rosewater and aloe for a small reset, wherever the day takes you.', image: art('#e8d1c8', '#9d5d62', 'bottle'), badge: 'Bestseller', rating: 4.9, reviewCount: 62, stock: 34, details: ['100 ml glass bottle', 'Rosewater, aloe vera, glycerin', 'Alcohol-free', 'Made in small batches'] },
  { id: 'c2', slug: 'kohl-black-eye-ritual', title: 'Kohl Black Eye Ritual', category: 'cosmetics', priceBDT: 990, compareAtPriceBDT: 1200, description: 'A soft, buildable kohl pencil for a gentle line or a full evening gaze.', image: art('#ded8cb', '#353d32', 'compact'), badge: 'Cult favourite', rating: 4.7, reviewCount: 48, stock: 26, details: ['Long-wear, smudgeable formula', 'Mineral pigments', 'Includes sharpener', 'Cruelty-free'] },
  { id: 'c3', slug: 'marigold-hair-oil', title: 'Marigold Hair Oil', category: 'cosmetics', priceBDT: 1750, description: 'A warm, fragrant blend of amla, marigold and sesame for a slower Sunday ritual.', image: art('#e5d5af', '#927346', 'oil'), rating: 4.8, reviewCount: 36, stock: 21, details: ['100 ml amber glass', 'Amla, sesame and marigold oils', 'No mineral oil', 'Use as a pre-wash treatment'] },
  { id: 'c4', slug: 'terracotta-lip-veil', title: 'Terracotta Lip Veil', category: 'cosmetics', priceBDT: 1250, description: 'A sheer wash of terracotta that looks like your lips, only more rested.', image: art('#e2c4b4', '#9a5147', 'compact'), badge: 'New', rating: 4.8, reviewCount: 28, stock: 15, details: ['Nourishing balm texture', 'Sheer terracotta tint', 'Jojoba and shea butter', '8 g recyclable tube'] },
];

export const getProduct = (slug?: string) => products.find((product) => product.slug === slug);
export const formatBDT = (value: number) => `৳${value.toLocaleString('en-BD')}`;