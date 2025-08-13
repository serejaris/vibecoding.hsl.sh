export default function ErasSection({ hideHeading = false, bare = false }) {
  const Content = (
    <div className="my-6">
        <div className="flex items-start mb-5">
          <div className="font-semibold min-w-[90px] text-[#999] text-sm">1950-2020</div>
          <div className="flex-1 pl-5">
            <h3 className="font-serif text-xl font-medium mb-4">Первая эра: Традиционное программирование</h3>
            <p className="text-base leading-relaxed">
              Разработчик пишет код → компьютер превращает код в программу. Это то, что было последние 70 лет. 
              Требовалось глубокое знание синтаксиса, правил написания кода, понимание того, 
              "почему здесь угловые скобки, почему здесь точка".
            </p>
          </div>
        </div>
        
        <div className="flex items-start mb-5">
          <div className="font-semibold min-w-[90px] text-[#999] text-sm">2010-2023</div>
          <div className="flex-1 pl-5">
            <h3 className="font-serif text-xl font-medium mb-4">Вторая эра: Машинное обучение</h3>
            <p className="text-base leading-relaxed">
              Данные на вход → модель на выходе. Обученная система на большом количестве данных генерирует новый контент: 
              текст, изображения, видео. Примеры: GPT для текста, DALL-E для изображений, Sora для видео.
            </p>
          </div>
        </div>
        
        <div className="flex items-start mb-5 max-md:flex-col">
          <div className="font-semibold min-w-[90px] text-[#999] text-sm max-md:mb-2">2023-н.в.</div>
          <div className="flex-1 pl-5 max-md:pl-0">
            <h3 className="font-serif text-xl font-medium mb-4">Третья эра: Вайб-кодинг</h3>
            <p className="text-base leading-relaxed">
              Идея на естественном языке → готовая программа. Демократизация программирования: 
              не нужно знать синтаксис, не нужно учить правила написания кода. 
              Достаточно уметь объяснить, что ты хочешь получить.
            </p>
          </div>
        </div>
    </div>
  );

  if (bare) return Content;

  return (
    <section id="eras" className="mb-10 scroll-mt-5">
      {!hideHeading && (
        <h2 className="font-serif text-[28px] font-medium mb-5 pt-5 max-md:text-2xl">
          Три эры программирования
        </h2>
      )}
      {Content}
    </section>
  );
}