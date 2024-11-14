import Navbar from './ui/dashboard/navbar';
import Hero from './ui/dashboard/Hero';
import About from './ui/dashboard/About';
import Benefits from './ui/dashboard/Benefits.';
import CallToAction from './ui/dashboard/CallToAction';

interface Benefit {
    title: string;
    description: string;
}

const consumerBenefits: Benefit[] = [
    { title: "Mudah Bertransaksi", description: "Kemudahan dalam melakukan transaksi jual beli dengan metode pembayaran yang beragam." },
    { title: "Pengiriman Cepat", description: "Jaminan pengiriman barang dengan estimasi waktu yang cepat." },
    { title: "Barang Berkualitas", description: "Semua produk di Tokoliku telah melewati kontrol kualitas untuk kepuasan pelanggan." },
];

const sellerBenefits: Benefit[] = [
    { title: "Lebih Banyak Konsumen", description: "Akses ke jutaan calon pembeli di seluruh Indonesia." },
    { title: "Statistik Penjualan", description: "Pantau dan analisa penjualan produk Anda dengan mudah." },
    { title: "Kemudahan Promosi", description: "Banyak pilihan fitur promosi untuk meningkatkan penjualan produk." },
];

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Benefits type="consumer" benefits={consumerBenefits} />
            <Benefits type="seller" benefits={sellerBenefits} />
            <CallToAction />
        </div>
    );
}
// // pages/index.tsx
// 'use client'

// import React, { useState } from 'react';
// import NonLoginNavbar from '@/app/ui/dashboard/nav-non-login';
// import LoginNavbar from '@/app/ui/dashboard/nav-login';
// import Image from 'next/image';

// const HomePage: React.FC = () => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <>
//     <div className="bg-gray-50">
//             {/* Navbar */}
//             <header className="flex justify-between items-center p-6 bg-white shadow-md">
//                 <h1 className="text-xl font-semibold text-gray-800">TOKOLIKU</h1>
//                 <nav className="space-x-6">
//                     <a href="#" className="text-gray-600 hover:text-gray-800">Tentang Kami</a>
//                     <a href="#" className="text-gray-600 hover:text-gray-800">Kontak</a>
//                 </nav>
//             </header>

//             {/* Hero Section */}
//             <section className="flex flex-col items-center text-center py-16 bg-white">
//                 <h2 className="text-4xl font-bold text-gray-800">
//                     TANPA LAPAK, <span className="text-yellow-500">UANGPUN JADI</span>
//                 </h2>
//                 <p className="text-gray-600 mt-4 max-w-lg">
//                     Platform untuk berjualan tanpa harus memiliki toko fisik. Mulai jualan sekarang dan nikmati kemudahan yang kami tawarkan.
//                 </p>
//                 <div className="mt-8">
//                     <Image src="/your-image-url.png" alt="Illustration" width={300} height={200} className="max-w-xs" />
//                 </div>
//             </section>

//             {/* About Section */}
//             <section className="text-center py-16 bg-gray-100">
//                 <h3 className="text-2xl font-bold text-gray-800">APA ITU TOKOLIKU</h3>
//                 <p className="text-gray-600 max-w-lg mx-auto mt-4">
//                     Tokoliku adalah platform e-commerce yang memudahkan konsumen dan penjual dalam melakukan transaksi online.
//                 </p>
//             </section>

//             {/* Consumer Benefits Section */}
//             <section className="py-16 bg-white">
//                 <h4 className="text-xl font-semibold text-center text-gray-800">Sebagai seorang Konsumen, Kenapa Harus Tokoliku</h4>
//                 <div className="flex flex-wrap justify-center mt-8 gap-8">
//                     {consumerBenefits.map((benefit, index) => (
//                         <BenefitCard key={index} title={benefit.title} description={benefit.description} />
//                     ))}
//                 </div>
//             </section>

//             {/* Seller Benefits Section */}
//             <section className="py-16 bg-gray-100">
//                 <h4 className="text-xl font-semibold text-center text-gray-800">Sebagai seorang Penjual, Kenapa Harus Tokoliku</h4>
//                 <div className="flex flex-wrap justify-center mt-8 gap-8">
//                     {sellerBenefits.map((benefit, index) => (
//                         <BenefitCard key={index} title={benefit.title} description={benefit.description} />
//                     ))}
//                 </div>
//             </section>

//             {/* Call to Action Section */}
//             <section className="py-16 bg-white text-center">
//                 <h4 className="text-2xl font-bold text-gray-800">SUDAH SIAP MENCARI UANG DENGAN CARA MUDAH?</h4>
//                 <div className="flex justify-center gap-4 mt-8">
//                     <a href="#" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">Pilih</a>
//                     <a href="#" className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg">Daftar</a>
//                 </div>
//             </section>
//         </div>
//     </>
//   );
// };

// export default HomePage;

// function BenefitCard({ title, description }) {
//   return (
//       <div className="max-w-xs text-center">
//           <div className="bg-yellow-100 rounded-full p-4 mx-auto mb-4">
//               {/* Icon Placeholder */}
//           </div>
//           <h5 className="font-bold text-gray-800">{title}</h5>
//           <p className="text-gray-600 mt-2">{description}</p>
//       </div>
//   );
// }

// const consumerBenefits = [
//   { title: "Mudah Bertransaksi", description: "Kemudahan dalam melakukan transaksi jual beli dengan metode pembayaran yang beragam." },
//   { title: "Pengiriman Cepat", description: "Jaminan pengiriman barang dengan estimasi waktu yang cepat." },
//   { title: "Barang Berkualitas", description: "Semua produk di Tokoliku telah melewati kontrol kualitas untuk kepuasan pelanggan." },
// ];

// const sellerBenefits = [
//   { title: "Lebih Banyak Konsumen", description: "Akses ke jutaan calon pembeli di seluruh Indonesia." },
//   { title: "Statistik Penjualan", description: "Pantau dan analisa penjualan produk Anda dengan mudah." },
//   { title: "Kemudahan Promosi", description: "Banyak pilihan fitur promosi untuk meningkatkan penjualan produk." },
// ];
