const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const connectDB = require('../database');
const Category = require('../models/Category');
const Product = require('../models/Product');
const User = require('../models/User');

const categories = [
  { name: 'Premium Dry Fish', nameBn: 'প্রিমিয়াম শুঁটকি', slug: 'premium-dry-fish', sortOrder: 1, image: 'https://placehold.co/200x200?text=Dry+Fish' },
  { name: 'Raw Fish', nameBn: 'কাঁচা মাছ', slug: 'raw-fish', sortOrder: 2, image: 'https://placehold.co/200x200?text=Raw+Fish' },
  { name: 'Balachao', nameBn: 'বালাচাও', slug: 'balachao', sortOrder: 3, image: 'https://placehold.co/200x200?text=Balachao' },
  { name: 'Fish Chips', nameBn: 'ফিশ চিপস', slug: 'fish-chips', sortOrder: 4, image: 'https://placehold.co/200x200?text=Fish+Chips' },
  { name: 'Combo Package', nameBn: 'কম্বো প্যাকেজ', slug: 'combo-package', sortOrder: 5, image: 'https://placehold.co/200x200?text=Combo' },
  { name: 'Recipe Book', nameBn: 'রেসিপি বই', slug: 'recipe-book', sortOrder: 6, image: 'https://placehold.co/200x200?text=Recipe' },
  { name: 'Dry Fish Gift Box', nameBn: 'গিফট বক্স', slug: 'gift-box', sortOrder: 7, image: 'https://placehold.co/200x200?text=Gift+Box' },
];

const seedDB = async () => {
  await connectDB();
  await Category.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();

  const createdCategories = await Category.insertMany(categories);
  const dryFishCat = createdCategories[0]._id;
  const comboCat = createdCategories[4]._id;

  const adminUser = await User.create({
    name: 'Admin',
    email: 'admin@shutkiz.com',
    password: 'admin123',
    role: 'admin',
  });

  const products = [
    {
      name: 'Loitta Shutki (Premium)',
      nameBn: 'লইট্যা শুঁটকি (প্রিমিয়াম)',
      slug: 'loitta-shutki-premium',
      description: 'Sun-dried Bombay duck from Cox\'s Bazar. Washed, cleaned, and hygienically packed. No artificial preservatives.',
      images: ['https://placehold.co/600x600/e8d5b7/5c3d11?text=Loitta+Shutki'],
      category: dryFishCat,
      price: 850,
      discountPrice: 720,
      unit: 'kg',
      stock: 100,
      isFeatured: true,
      rating: 4.5,
      numReviews: 24,
      origin: "Cox's Bazar, Bangladesh",
      nutritionInfo: { protein: '45g', fat: '2g', calories: '200kcal', omega3: '800mg' },
      tags: ['loitta', 'shutki', 'premium', 'dry fish'],
    },
    {
      name: 'Rupchanda Shutki',
      nameBn: 'রুপচাঁদা শুঁটকি',
      slug: 'rupchanda-shutki',
      description: 'Premium quality Pomfret dry fish. Rich in protein and omega-3 fatty acids. Perfect for traditional Bangladeshi recipes.',
      images: ['https://placehold.co/600x600/d4c5a0/5c3d11?text=Rupchanda'],
      category: dryFishCat,
      price: 1200,
      discountPrice: 980,
      unit: 'kg',
      stock: 60,
      isFeatured: true,
      rating: 4.8,
      numReviews: 36,
      origin: "Cox's Bazar, Bangladesh",
      tags: ['rupchanda', 'pomfret', 'premium'],
    },
    {
      name: 'Churi Shutki',
      nameBn: 'চুরি শুঁটকি',
      slug: 'churi-shutki',
      description: 'Traditional Hairtail fish, sun-dried and packed fresh. Best for bhuna and curry.',
      images: ['https://placehold.co/600x600/c8b896/5c3d11?text=Churi+Shutki'],
      category: dryFishCat,
      price: 650,
      unit: 'kg',
      stock: 80,
      isFeatured: true,
      rating: 4.3,
      numReviews: 18,
      tags: ['churi', 'hairtail'],
    },
    {
      name: 'Shutkiz Combo Pack - Small',
      nameBn: 'শুটকিজ কম্বো প্যাক - স্মল',
      slug: 'combo-pack-small',
      description: 'A perfect assortment: 250g Loitta + 250g Churi + 200g Balachao. Try before you commit to bulk.',
      images: ['https://placehold.co/600x600/f0e6d3/5c3d11?text=Combo+Pack'],
      category: comboCat,
      price: 1400,
      discountPrice: 1150,
      unit: 'pack',
      stock: 40,
      isFeatured: true,
      rating: 4.9,
      numReviews: 52,
      tags: ['combo', 'gift', 'sampler'],
    },
    {
      name: 'Ilish Shutki',
      nameBn: 'ইলিশ শুঁটকি',
      slug: 'ilish-shutki',
      description: 'Rare sun-dried Hilsa — Bangladesh\'s national fish preserved the traditional way. A premium delicacy.',
      images: ['https://placehold.co/600x600/e0d0b0/5c3d11?text=Ilish+Shutki'],
      category: dryFishCat,
      price: 2200,
      discountPrice: 1899,
      unit: 'kg',
      stock: 25,
      isFeatured: true,
      rating: 4.7,
      numReviews: 14,
      tags: ['ilish', 'hilsa', 'rare', 'premium'],
    },
    {
      name: 'Prawn Shutki (Chingri)',
      nameBn: 'চিংড়ি শুঁটকি',
      slug: 'prawn-shutki-chingri',
      description: 'Dried small prawns from the Bay of Bengal. Adds deep umami flavour to dal, bhaji, and curries.',
      images: ['https://placehold.co/600x600/dcc8a0/5c3d11?text=Chingri+Shutki'],
      category: dryFishCat,
      price: 1600,
      discountPrice: 1380,
      unit: 'kg',
      stock: 45,
      isFeatured: false,
      rating: 4.4,
      numReviews: 29,
      tags: ['prawn', 'chingri', 'shrimp'],
    },
  ];

  await Product.insertMany(products);
  console.log('✅ Database seeded successfully');
  console.log(`Admin: admin@shutkiz.com / admin123`);
  process.exit(0);
};

seedDB().catch(err => { console.error(err); process.exit(1); });