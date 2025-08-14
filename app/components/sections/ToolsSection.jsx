export default function ToolsSection() {
  return (
    <section id="tools" className="mb-10 scroll-mt-5">
      <h3 className="font-serif text-[22px] font-medium mb-2">Основные инструменты (модели)</h3>
      <p className="text-[14px] text-[#666] mb-4">
        Динамика: Gemini сильно прокачался за последний месяц; поле меняется очень быстро. Про Grok: силён в общении и tone of voice (часто используют в маркетинге), слабее в коде.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border-collapse text-[12px] font-mono">
          <thead>
            <tr className="bg-[#fafafa]">
              <th className="p-2 border border-[#eee] font-medium">Модель</th>
              <th className="p-2 border border-[#eee] font-medium">Провайдер</th>
              <th className="p-2 border border-[#eee] font-medium">Ссылка</th>
              <th className="p-2 border border-[#eee] font-medium">Стоимость</th>
              <th className="p-2 border border-[#eee] font-medium">Бесплатно?</th>
              <th className="p-2 border border-[#eee] font-medium">Вайбкодинг (заметки)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-[#eee]">GPT‑5</td>
              <td className="p-2 border border-[#eee]">OpenAI</td>
              <td className="p-2 border border-[#eee]"><a href="https://chat.openai.com/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">chat.openai.com</a></td>
              <td className="p-2 border border-[#eee]">ChatGPT Plus: $20/мес</td>
              <td className="p-2 border border-[#eee]">Да (ограничения)</td>
              <td className="p-2 border border-[#eee]">Лидер в коде и продакшн‑подсказках</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#eee]">Claude Opus 4.1</td>
              <td className="p-2 border border-[#eee]">Anthropic</td>
              <td className="p-2 border border-[#eee]"><a href="https://claude.ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">claude.ai</a></td>
              <td className="p-2 border border-[#eee]">Claude Pro: $20/мес</td>
              <td className="p-2 border border-[#eee]">Да (ограничения)</td>
              <td className="p-2 border border-[#eee]">Сильный reasoning, длинный контекст</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#eee]">Gemini 2.5 Pro</td>
              <td className="p-2 border border-[#eee]">Google</td>
              <td className="p-2 border border-[#eee]"><a href="https://one.google.com/ai" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">one.google.com/ai</a></td>
              <td className="p-2 border border-[#eee]">AI Premium: $19.99/мес</td>
              <td className="p-2 border border-[#eee]">Да (ограничения)</td>
              <td className="p-2 border border-[#eee]">Сильно прокачался; хорош в мультимодальности</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#eee]">Grok</td>
              <td className="p-2 border border-[#eee]">xAI</td>
              <td className="p-2 border border-[#eee]"><a href="https://x.ai/grok" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">x.ai/grok</a></td>
              <td className="p-2 border border-[#eee]">X Premium+: от ~$16/мес</td>
              <td className="p-2 border border-[#eee]">Нет</td>
              <td className="p-2 border border-[#eee]">Tone of voice, маркетинг; слабее в коде</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#eee]">Kimi</td>
              <td className="p-2 border border-[#eee]">Moonshot AI</td>
              <td className="p-2 border border-[#eee]"><a href="https://kimi.moonshot.cn/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">kimi.moonshot.cn</a></td>
              <td className="p-2 border border-[#eee]">Аккаунт: бесплатно; API: PAYG</td>
              <td className="p-2 border border-[#eee]">Да</td>
              <td className="p-2 border border-[#eee]">Фокус на китайском; базовый код</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#eee]">DeepSeek (R1 / Distill)</td>
              <td className="p-2 border border-[#eee]">DeepSeek</td>
              <td className="p-2 border border-[#eee]"><a href="https://www.deepseek.com/en" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">deepseek.com</a></td>
              <td className="p-2 border border-[#eee]">Чат: бесплатно; API: PAYG</td>
              <td className="p-2 border border-[#eee]">Да</td>
              <td className="p-2 border border-[#eee]">Силен в рассуждениях; черновой код</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#eee]">Qwen / Qwen‑Coder</td>
              <td className="p-2 border border-[#eee]">Alibaba</td>
              <td className="p-2 border border-[#eee]"><a href="https://chat.qwen.ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">chat.qwen.ai</a></td>
              <td className="p-2 border border-[#eee]">Чат: бесплатно; API через Alibaba Cloud</td>
              <td className="p-2 border border-[#eee]">Да</td>
              <td className="p-2 border border-[#eee]">Сильные coder‑варианты</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
}


