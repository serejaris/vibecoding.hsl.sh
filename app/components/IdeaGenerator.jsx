'use client';

export default function IdeaGenerator() {
    return (
        <div className="rounded-lg overflow-hidden border border-[#eee] bg-white">
            <iframe
                src="https://ai-idea-gen.vercel.app/"
                title="Генератор идей (промптов)"
                className="w-full"
                style={{ height: '720px', border: '0' }}
            />
            <div className="p-3 text-center text-sm text-[#666] border-t border-[#eee]">
                Если виджет не загрузился, откройте по ссылке:
                {' '}
                <a
                    href="https://ai-idea-gen.vercel.app/"
                    target="_blank"
                    className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200"
                >
                    ai-idea-gen.vercel.app
                </a>
            </div>
        </div>
    );
}


