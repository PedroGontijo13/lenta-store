import Image from 'next/image';
import bannerImg from '../public/banner.png';

export default function Banner() {
    return (
        <div className="relative h-96">
            <Image
                src={bannerImg}
                alt="Banner"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <div className="absolute inset-0 flex items-center justify-start p-5">
                <p className="text-white text-4xl text-black font-medium">Find the Best Products <br></br>
                    with <span className='text-orange-400'>Reliability</span></p>
            </div>
        </div>
    );
}
