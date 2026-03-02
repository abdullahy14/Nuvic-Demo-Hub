import Image from 'next/image';

const images = [
  'https://imgproxy.gamma.app/resize/quality%3A80/resizing_type%3Afit/height%3A400/https%3A//cdn.gamma.app/xw2tgw0mnr1o7mv/0eae23989faa46f9a1d212ab396a68bd/original/Images-Libirary_01.png',
  'https://imgproxy.gamma.app/resize/quality%3A80/resizing_type%3Afit/height%3A400/https%3A//cdn.gamma.app/xw2tgw0mnr1o7mv/6cd2f17075e04ad4ae1fbfd7a68c4e4a/original/Images-Libirary_02.png',
  'https://imgproxy.gamma.app/resize/quality%3A80/resizing_type%3Afit/height%3A400/https%3A//cdn.gamma.app/xw2tgw0mnr1o7mv/768d865f9e8a4342aa59ff11ee7b2149/original/Images-Libirary_03.png',
  'https://imgproxy.gamma.app/resize/quality%3A80/resizing_type%3Afit/height%3A400/https%3A//cdn.gamma.app/xw2tgw0mnr1o7mv/04091d1688a342dab1b4456f7dfc3f08/original/Images-Libirary_04.png',
  'https://imgproxy.gamma.app/resize/quality%3A80/resizing_type%3Afit/height%3A400/https%3A//cdn.gamma.app/xw2tgw0mnr1o7mv/f106954d276d4dee9d1173897b22229f/original/Images-Libirary_05.png',
  'https://imgproxy.gamma.app/resize/quality%3A80/resizing_type%3Afit/height%3A400/https%3A//cdn.gamma.app/xw2tgw0mnr1o7mv/d80c2eec72354e569e6b8add725e3790/original/Images-Libirary_06.png'
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
