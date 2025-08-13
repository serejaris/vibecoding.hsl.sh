export default function AuthorSection({ hideHeading = false, bare = false }) {
  const Content = (
    <div className="bg-[#fafafa] p-6 rounded-xl my-6">
        <h3 className="font-serif text-xl font-medium mb-4">Андрей Карпати</h3>
        <p className="mb-4 text-base leading-relaxed">
          Создатель термина "вайб-кодинг" — это не просто исследователь, а один из ключевых людей в мире искусственного интеллекта:
        </p>
        
        <ul className="list-none pl-0">
          <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
            Сооснователь OpenAI
          </li>
          <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
            Бывший глава отдела искусственного интеллекта в Tesla
          </li>
          <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
            Отвечал за разработку компьютерного зрения в автомобилях Tesla
          </li>
          <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
            Страстный фанат темы образования
          </li>
          <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
            Автор легендарных лекций по AI на YouTube
          </li>
        </ul>
        
        <p className="mb-4 text-base leading-relaxed">
          Его лекцию о вайб-кодинге сравнивают по значимости с презентациями Стива Джобса по влиянию на индустрию.
        </p>
        
        <h3 className="font-serif text-xl font-medium mb-4 mt-8">Легендарная лекция Андрея Карпати</h3>
        <p className="mb-4 text-sm text-[#666]">
          Та самая лекция, которая изменила подход к программированию. Преподаватель упоминал: 
          "Его лекция... Я сейчас ее запишу и потом на Карпати Андрей... там много сравнивают кто по значимости с лекцией Стива Джобса, по ее влиянию."
        </p>
        <div className="relative pb-[56.25%] h-0 overflow-hidden my-5 rounded-lg">
          <iframe 
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/LCEmiRjPEtQ?si=YWqCPtby1BBivK4H" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-[#666]">
          Видео можно смотреть с автоматическим переводом на русский язык в{' '}
          <a
            href="https://browser.yandex.com/"
            target="_blank"
            className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200"
          >
            Яндекс Браузере
          </a>
          .
        </p>
    </div>
  );

  if (bare) return Content;

  return (
    <section id="author" className="mb-10 scroll-mt-5">
      {!hideHeading && (
        <h2 className="font-serif text-[28px] font-medium mb-5 pt-5 max-md:text-2xl">
          Автор концепции
        </h2>
      )}
      {Content}
    </section>
  );
}