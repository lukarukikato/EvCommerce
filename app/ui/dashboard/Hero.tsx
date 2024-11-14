import Image from 'next/image';
import HeroImage from '../../../public/HeroImage.png'

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center text-center py-16 bg-white">
            <h2 className="text-4xl font-bold text-gray-800">
                TANPA LAPAK, <span className="text-yellow-500">UANGPUN JADI</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg">
                Platform untuk berjualan tanpa harus memiliki toko fisik. Mulai jualan sekarang dan nikmati kemudahan yang kami tawarkan.
            </p>
            <div className="mt-8">
                <Image src="HeroImage" alt="Illustration" width={300} height={200} className="max-w-xs" />
            </div>
        </section>
    );
  };
  
  export default Hero;