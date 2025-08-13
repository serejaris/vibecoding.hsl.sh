import ImageSlider from './ImageSlider';

export default function PaccbetHeader() {
  const images = [
    {
      src: "/paccbet/extreme-y2k-aesthetic--converted-industrial-loft-a.jpg",
      alt: "Вайб-кодинг иллюстрация - индустриальный лофт"
    },
    {
      src: "/paccbet/extreme-y2k-aesthetic--hacker-lair--books-messy---.jpg",
      alt: "Вайб-кодинг иллюстрация - хакерское логово"
    }
  ];

  return (
    <header className="py-10 text-center border-b border-[#eee] mb-10">
      <h1 className="font-serif text-[42px] font-normal mb-4 tracking-tight max-md:text-[32px]">
        Вайб-кодинг
      </h1>
      <p className="text-lg text-[#666] font-light">
        Новая эра создания программ через общение с искусственным интеллектом
      </p>
      <p className="mt-5 text-[#999] text-sm">
        Лекция 1/4 от 13 августа 2025 года
      </p>
      <p className="mt-2.5 text-sm">
        <a 
          href="https://t.me/c/2632807135/77/78" 
          target="_blank" 
          className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200"
        >
          Чат потока BOCTOK →
        </a>
      </p>
      
      <div className="my-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pl-10">
        <ImageSlider images={images} />
      </div>
      
      <p className="mt-0 mb-0 text-[#999] text-xs text-left">
        Изображения сгенерированы в{' '}
        <a 
          href="https://www.recraft.ai/invite/K3u2eA0GiT" 
          target="_blank" 
          className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200"
        >
          recraft.ai
        </a>
      </p>
    </header>
  );
}