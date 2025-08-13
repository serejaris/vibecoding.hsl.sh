export default function ToolsSection() {
  return (
    <section id="tools" className="mb-10 scroll-mt-5">
      <h3 className="font-serif text-[22px] font-medium mb-4">Провайдеры LLM / API (актуальные)</h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#fafafa]">
              <th className="p-3 border border-[#eee] font-medium">Провайдер</th>
              <th className="p-3 border border-[#eee] font-medium">Что дают</th>
              <th className="p-3 border border-[#eee] font-medium">Ссылка</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-[#eee]">OpenAI Platform</td>
              <td className="p-3 border border-[#eee]">GPT‑4o / o‑series, Realtime, Assistants, fine‑tuning</td>
              <td className="p-3 border border-[#eee]"><a href="https://platform.openai.com/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">platform.openai.com</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Anthropic (Claude)</td>
              <td className="p-3 border border-[#eee]">Claude 3.x/3.5, безопасный reasoning, длинный контекст</td>
              <td className="p-3 border border-[#eee]"><a href="https://console.anthropic.com/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">console.anthropic.com</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Google AI Studio / Vertex AI</td>
              <td className="p-3 border border-[#eee]">Gemini 2.0, мультимодальность, агенты, инструменты разработчика</td>
              <td className="p-3 border border-[#eee]"><a href="https://aistudio.google.com/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">aistudio.google.com</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">xAI (Grok)</td>
              <td className="p-3 border border-[#eee]">Доступ к Grok‑семейству с актуальными данными X</td>
              <td className="p-3 border border-[#eee]"><a href="https://x.ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">x.ai</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Mistral</td>
              <td className="p-3 border border-[#eee]">Mistral Large / Mixtral API, быстрые и экономичные</td>
              <td className="p-3 border border-[#eee]"><a href="https://console.mistral.ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">console.mistral.ai</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">DeepSeek</td>
              <td className="p-3 border border-[#eee]">R1 / R1‑Distill и другие модели через API</td>
              <td className="p-3 border border-[#eee]"><a href="https://platform.deepseek.com/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">platform.deepseek.com</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Alibaba Qwen</td>
              <td className="p-3 border border-[#eee]">Qwen‑семейство, coder/vision‑варианты</td>
              <td className="p-3 border border-[#eee]"><a href="https://qwenlm.ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">qwenlm.ai</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Cohere</td>
              <td className="p-3 border border-[#eee]">Command/Embed, ориентировано на enterprise</td>
              <td className="p-3 border border-[#eee]"><a href="https://cohere.com/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">cohere.com</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Perplexity API</td>
              <td className="p-3 border border-[#eee]">Поисковая LLM‑интеграция и ответы с цитатами</td>
              <td className="p-3 border border-[#eee]"><a href="https://docs.perplexity.ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">docs.perplexity.ai</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-serif text-[22px] font-medium mb-4">Инфраструктура и агрегаторы</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#fafafa]">
              <th className="p-3 border border-[#eee] font-medium">Платформа</th>
              <th className="p-3 border border-[#eee] font-medium">Что дают</th>
              <th className="p-3 border border-[#eee] font-medium">Ссылка</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-[#eee]">AWS Bedrock</td>
              <td className="p-3 border border-[#eee]">Доступ к моделям (Anthropic, Meta, Mistral, Cohere и др.) в AWS</td>
              <td className="p-3 border border-[#eee]"><a href="https://aws.amazon.com/bedrock/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">aws.amazon.com/bedrock</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Azure OpenAI Service</td>
              <td className="p-3 border border-[#eee]">OpenAI‑модели и безопасность/комплаенс Azure</td>
              <td className="p-3 border border-[#eee]"><a href="https://azure.microsoft.com/products/ai-services/openai-service" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">azure.microsoft.com</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Google Vertex AI</td>
              <td className="p-3 border border-[#eee]">Gemini и сторонние модели в GCP</td>
              <td className="p-3 border border-[#eee]"><a href="https://cloud.google.com/vertex-ai" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">cloud.google.com/vertex-ai</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">GroqCloud</td>
              <td className="p-3 border border-[#eee]">Сверхбыстрый инференс для открытых моделей (Llama, DeepSeek и др.)</td>
              <td className="p-3 border border-[#eee]"><a href="https://console.groq.com/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">console.groq.com</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">OpenRouter</td>
              <td className="p-3 border border-[#eee]">Единый API к множеству провайдеров и моделей</td>
              <td className="p-3 border border-[#eee]"><a href="https://openrouter.ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">openrouter.ai</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Together AI</td>
              <td className="p-3 border border-[#eee]">Хостинг и тренировка открытых моделей, единый API</td>
              <td className="p-3 border border-[#eee]"><a href="https://www.together.ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">together.ai</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Fireworks AI</td>
              <td className="p-3 border border-[#eee]">Высокая производительность инференса, open‑weights</td>
              <td className="p-3 border border-[#eee]"><a href="https://fireworks.ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">fireworks.ai</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Cloudflare Workers AI</td>
              <td className="p-3 border border-[#eee]">Инференс на edge‑сети, простое развёртывание</td>
              <td className="p-3 border border-[#eee]"><a href="https://developers.cloudflare.com/workers-ai/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">developers.cloudflare.com</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Hugging Face Inference</td>
              <td className="p-3 border border-[#eee]">Endpoints / TGI для продакшена</td>
              <td className="p-3 border border-[#eee]"><a href="https://huggingface.co/inference-endpoints" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">huggingface.co</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">Replicate</td>
              <td className="p-3 border border-[#eee]">API и хостинг моделей как сервис</td>
              <td className="p-3 border border-[#eee]"><a href="https://replicate.com/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">replicate.com</a></td>
            </tr>
            <tr>
              <td className="p-3 border border-[#eee]">NVIDIA NIM</td>
              <td className="p-3 border border-[#eee]">Контейнеры‑микросервисы ИИ (local/облако)</td>
              <td className="p-3 border border-[#eee]"><a href="https://www.nvidia.com/en-us/ai/solutions/nim/" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">nvidia.com</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}


