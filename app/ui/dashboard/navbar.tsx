// import React from 'react';

// export default function Navbar() {
//     return (
//         <header className="flex justify-between items-center p-6 bg-white shadow-md">
//             <h1 className="text-xl font-semibold text-gray-800">TOKOLIKU</h1>
//             <nav className="space-x-6">
//                 <a href="#" className="text-gray-600 hover:text-gray-800">Tentang Kami</a>
//                 <a href="#" className="text-gray-600 hover:text-gray-800">Kontak</a>
//             </nav>
//         </header>
//     );
// }


const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-xl font-semibold text-gray-800">TOKOLIKU</h1>
        <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">Tentang Kami</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Kontak</a>
        </nav>
    </header>
  );
};

export default Navbar;