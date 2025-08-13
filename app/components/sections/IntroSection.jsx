export default function IntroSection({ hideHeading = false, bare = false }) {
  const Content = (
    <div className="section-content">
      <div className="bg-[#fafafa] p-5 rounded-lg mb-5">
        <p className="mb-2 font-serif text-lg">Год, когда английский стал языком программирования</p>
        <p className="mb-0 text-base leading-relaxed text-[#444]">
          В 2023 году исследователь в области искусственного интеллекта Андрей Карпати сделал провокационное заявление о том, что «самый популярный новый язык программирования — это английский». В 2025 году это уже не теоретическое предсказание, а практическая реальность.
        </p>
      </div>
      <p className="mb-4 text-base leading-relaxed">
        Вайбкодинг (vibe coding) — это метод программирования, при котором искусственный интеллект (ИИ), 
        чаще на базе больших языковых моделей (LLM), генерирует программный код на основе задачи, 
        сформулированной на естественном языке — то есть пользователь просто описывает, что хочет получить, 
        а ИИ пишет код самостоятельно.
      </p>
      
      <div className="border-l-[3px] border-[#333] pl-5 my-6 italic text-[#555]">
        <p>
          "Люди общаются с искусственным интеллектом и делают программы просто в раз, давая какое-то свое настроение, 
          вот слово вайб настроение, тем самым называют свайб."
        </p>
      </div>
      
      <p className="mb-4 text-base leading-relaxed">
        Термин появился в начале 2025 года и быстро набрал популярность среди разработчиков и людей без технического образования, 
        которые хотят создавать цифровые продукты.
      </p>
    </div>
  );

  if (bare) {
    return Content;
  }

  return (
    <section id="intro" className="mb-10 scroll-mt-5">
      {!hideHeading && (
        <h2 className="font-serif text-[28px] font-medium mb-5 pt-5 cursor-pointer flex items-center justify-between max-md:text-2xl">
          Что такое вайб-кодинг?
        </h2>
      )}
      {Content}
    </section>
  );
}