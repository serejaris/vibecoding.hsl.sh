export default function PlanSection() {
  return (
    <div>
      <h3 className="font-serif text-[22px] font-medium mb-4">Что будем делать на курсе?</h3>

      <div className="bg-[#fafafa] p-5 rounded-lg mb-4">
        <h4 className="font-serif text-lg font-medium mb-2">Урок 1 — Первый сайт за 45 минут</h4>
        <p className="mb-2 text-base leading-relaxed">Разберём, как работает ИИ в разработке (LLM → промпт → итерации).</p>
        <p className="mb-2 text-base leading-relaxed">С нуля завайбкодим сайт и в конце урока выложим его в интернет.</p>
        <p className="mb-0 text-base leading-relaxed"><strong>Результат:</strong> у каждого есть ссылка на свой сайт.</p>
      </div>

      <div className="bg-[#fafafa] p-5 rounded-lg mb-4">
        <h4 className="font-serif text-lg font-medium mb-2">Урок 2 — Инструменты вайбкодинга</h4>
        <p className="mb-2 text-base leading-relaxed">Познакомимся с основными инструментами, поставим Cursor и настроим рабочий процесс.</p>
        <p className="mb-2 text-base leading-relaxed">Сделаем Telegram-бота: команды, ответы, базовая логика.</p>
        <p className="mb-0 text-base leading-relaxed"><strong>Результат:</strong> бот запущен и отвечает на /start.</p>
      </div>

      <div className="bg-[#fafafa] p-5 rounded-lg mb-4">
        <h4 className="font-serif text-lg font-medium mb-2">Урок 3 — Данные и состояние</h4>
        <p className="mb-2 text-base leading-relaxed">Копнём глубже в устройство приложений: фронт ↔ сервер ↔ данные.</p>
        <p className="mb-2 text-base leading-relaxed">Познакомимся с базами данных и свяжем проект с БД (сохраняем и читаем записи).</p>
        <p className="mb-0 text-base leading-relaxed"><strong>Результат:</strong> данные не теряются, проект «помнит» пользователя.</p>
      </div>

      <div className="bg-[#fafafa] p-5 rounded-lg">
        <h4 className="font-serif text-lg font-medium mb-2">Урок 4 — Сборка и закрепление</h4>
        <p className="mb-2 text-base leading-relaxed">Повторим ключевые паттерны вайбкодинга: генерация → правки → тест → деплой.</p>
        <p className="mb-2 text-base leading-relaxed">Дополним фичами и отполируем: небольшие улучшения по UX/логике.</p>
        <p className="mb-0 text-base leading-relaxed"><strong>Результат:</strong> цельный мини-продукт с кодом и рабочими ссылками.</p>
      </div>
    </div>
  );
}


