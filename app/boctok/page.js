'use client';

import PaccbetLayout from '../components/PaccbetLayout';
import PaccbetHeader from '../components/PaccbetHeader';
import IntroSection from '../components/sections/IntroSection';
import GreetingSection from '../components/sections/GreetingSection';
import PlanSection from '../components/sections/PlanSection';
import AuthorSection from '../components/sections/AuthorSection';
import ErasSection from '../components/sections/ErasSection';
import ToolsSection from '../components/sections/ToolsSection';
import CollapsibleSection from '../components/CollapsibleSection';
import useCollapsibleSections from '../hooks/useCollapsibleSections';
import IdeaGenerator from '../components/IdeaGenerator';

export default function PaccbetPage() {
    // Initialize collapsible sections with all sections closed by default (chatbot style)
    const { getSectionState, toggleSection } = useCollapsibleSections({
        hello: true,
        plan: false,
        intro: false,
        author: false,
        eras: false,
        practice: false,
        tools: false,
        publish: false,
        homework: false,
        'idea-gen': false,
    });

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <PaccbetLayout>
                <PaccbetHeader />
                <CollapsibleSection
                    id="hello"
                    title="👋"
                    isOpen={getSectionState('hello')}
                    onToggle={toggleSection}
                >
                    <GreetingSection />
                </CollapsibleSection>
                <CollapsibleSection
                    id="plan"
                    title="🗺️"
                    isOpen={getSectionState('plan')}
                    onToggle={toggleSection}
                >
                    <PlanSection />
                </CollapsibleSection>

                <CollapsibleSection
                    id="intro"
                    title="Что такое вайб-кодинг?"
                    isOpen={getSectionState('intro')}
                    onToggle={toggleSection}
                >
                    <IntroSection hideHeading bare />
                </CollapsibleSection>
                <CollapsibleSection
                    id="author"
                    title="Автор концепции"
                    isOpen={getSectionState('author')}
                    onToggle={toggleSection}
                >
                    <AuthorSection hideHeading bare />
                </CollapsibleSection>

                <CollapsibleSection
                    id="eras"
                    title="Три эры программирования"
                    isOpen={getSectionState('eras')}
                    onToggle={toggleSection}
                >
                    <ErasSection hideHeading bare />
                </CollapsibleSection>

                <CollapsibleSection
                    id="practice"
                    title="Как это работает на практике"
                    isOpen={getSectionState('practice')}
                    onToggle={toggleSection}
                >
                    <p className="mb-4 text-base leading-relaxed">
                        Раньше, чтобы научить дизайнера создать простой сайт, требовался час только на то, чтобы вывести текст на экран.
                        Нужно было изучать HTML, CSS, JavaScript, понимать синтаксис.
                    </p>
                    <p className="mb-4 text-base leading-relaxed">Сейчас достаточно написать промпт:</p>
                    <div className="bg-[#f5f5f5] p-4 rounded-lg font-mono my-4 overflow-x-auto text-sm">
                        "Сделай мне приложение для учета потребления воды, которую я пью в течение дня. Сделай его в одном HTML файле"
                    </div>
                    <p className="mb-4 text-base leading-relaxed">
                        И через 5-10 минут получить полностью работающее приложение с интерфейсом, логикой и стилями.
                    </p>
                    <img
                        src="/paccbet/screenshot.png"
                        alt="Трекер воды - пример приложения созданного через вайб-кодинг"
                        className="max-w-full h-auto my-5 rounded-lg border border-[#eee]"
                    />
                    <p className="mt-2.5 mb-5 text-sm text-[#666]">
                        <a
                            href="https://claude.ai/public/artifacts/d4db97ce-6ea3-4540-a3f5-bed8f0b40d55"
                            target="_blank"
                            className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200"
                        >
                            → Посмотреть интерактивную версию в Claude
                        </a>
                    </p>
                </CollapsibleSection>

                <CollapsibleSection
                    id="idea-gen"
                    title="Генератор идей (промптов)"
                    isOpen={getSectionState('idea-gen')}
                    onToggle={toggleSection}
                >
                    <p className="mb-4 text-base leading-relaxed">
                        Введите тему — получите промпты, которые можно вставить в любую LLM систему.
                    </p>
                    <IdeaGenerator />
                </CollapsibleSection>

                <CollapsibleSection
                    id="tools"
                    title="Основные инструменты"
                    isOpen={getSectionState('tools')}
                    onToggle={toggleSection}
                >
                    <ToolsSection />
                </CollapsibleSection>

                <CollapsibleSection
                    id="publish"
                    title="Публикация результата в интернет"
                    isOpen={getSectionState('publish')}
                    onToggle={toggleSection}
                >
                    <div className="bg-[#f9f9f9] p-5 rounded-lg my-5">
                        <p className="mb-4 text-base leading-relaxed">
                            Netlify Drop — бесплатный хостинг, который позволяет быстро опубликовать HTML-файл.
                        </p>
                        <ol className="pl-5 list-decimal">
                            <li className="mb-2.5 text-base">
                                Скачайте HTML из генератора (кнопка <em>Download</em>).
                            </li>
                            <li className="mb-2.5 text-base">
                                Переименуйте файл в <code>index.html</code>.
                            </li>
                            <li className="mb-2.5 text-base">
                                Поместите файл в новую папку и перетащите её на{' '}
                                <a
                                    href="https://app.netlify.com/drop"
                                    target="_blank"
                                    className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200"
                                >
                                    Netlify Drop
                                </a>
                                .
                            </li>
                            <li className="mb-2.5 text-base">
                                Получите ссылку и сохраните её — это адрес вашего сайта.
                            </li>
                        </ol>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection
                    id="homework"
                    title="Домашнее задание"
                    isOpen={getSectionState('homework')}
                    onToggle={toggleSection}
                >
                    <div className="bg-[#f9f9f9] p-5 rounded-lg my-5">
                        <h3 className="font-serif text-xl font-medium mb-4">
                            Задача: создать и опубликовать простой сайт с помощью AI
                        </h3>

                        <h4 className="font-serif text-lg font-medium mb-3 mt-5">Этап 1. Создание сайта</h4>
                        <ol className="pl-5 list-decimal">
                            <li className="mb-2.5 text-base">
                                Используйте любой AI-инструмент (Claude, ChatGPT, Gemini, AI.dev).
                            </li>
                            <li className="mb-2.5 text-base">
                                <strong>Важно:</strong> завершайте промпт фразой «в формате HTML одним файлом».
                            </li>
                            <li className="mb-2.5 text-base">
                                В качестве материалов можно применять PDF, тексты или ваши данные.
                            </li>
                        </ol>

                        <h4 className="font-serif text-lg font-medium mb-3 mt-5">Этап 2. Публикация сайта</h4>
                        <p className="mb-4 text-base leading-relaxed">
                            Следуйте шагам из секции «Публикация результата в интернет» и получите ссылку на сайт.
                        </p>

                        <h4 className="font-serif text-lg font-medium mb-3 mt-5">Идеи для проектов</h4>
                        <ul className="list-none pl-0">
                            <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
                                Landing page для школы изучения языка
                            </li>
                            <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
                                Трекер калорий или воды
                            </li>
                            <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
                                Калькулятор чего-либо
                            </li>
                            <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
                                Summary книги в виде сайта
                            </li>
                            <li className="pl-5 relative mb-2.5 text-base before:content-['—'] before:absolute before:left-0 before:text-[#999]">
                                История чего-нибудь (например, истории Рубика)
                            </li>
                        </ul>
                        <p className="mt-5 text-base leading-relaxed">
                            Пришлите ссылку на опубликованный сайт в качестве результата.
                        </p>
                    </div>
                </CollapsibleSection>
            </PaccbetLayout>

            <style jsx global>{`
        .nav-item {
          display: block;
          padding: 5px 8px;
          margin-bottom: 1px;
          text-decoration: none;
          color: #666;
          font-size: 12px;
          font-family: 'Courier New', Consolas, monospace;
          border-left: 3px solid transparent;
          transition: all 0.2s ease;
          line-height: 1.4;
        }
        
        .nav-item:hover {
          color: #333;
          background: #f0f0f0;
        }
        
        .nav-item.active {
          color: #333;
          font-weight: 600;
          border-left-color: #333;
          background: #f0f0f0;
        }
        
        .sidebar.active {
          transform: translateX(0);
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          user-select: text;
        }
        
        h1, h2, h3, h4 {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        /* Ensure text selection works properly */
        p, div, span, li, h3, h4, h5, h6, a {
          user-select: text !important;
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
        }
        
        /* Allow text selection in content areas */
        .main-content p,
        .main-content div,
        .main-content span,
        .main-content li,
        .main-content a {
          user-select: text !important;
          -webkit-user-select: text !important;
        }
        
        /* Ensure proper pointer events */
        .main-content {
          pointer-events: auto;
        }
        
        /* Force hide preloader on this page */
        .preloader-overlay {
          display: none !important;
        }
      `}</style>
        </>
    );
}


