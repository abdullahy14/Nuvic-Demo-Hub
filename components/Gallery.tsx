import Image from 'next/image';

const images = [
  '/images/gallery-01.svg',
  '/images/gallery-02.svg',
  '/images/gallery-03.svg',
  '/images/gallery-04.svg',
  '/images/gallery-05.svg',
  '/images/gallery-06.svg'
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {images.map((src, idx) => (
        <figure key={src} className="surface-card surface-card-hover overflow-hidden p-1">
          <Image
            src={src}
            alt={`Nuvic Library sample ${idx + 1}`}
            width={500}
            height={400}
            className="h-44 w-full rounded-2xl object-cover md:h-56"
          />
        </figure>
      ))}
    </div>
  );
}
