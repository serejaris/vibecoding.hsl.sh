export default function GreetingSection() {
  return (
    <div className="bg-[#fafafa] p-6 rounded-xl my-6 text-left">
      <ul className="list-none pl-0 text-base">
        <li className="pl-5 relative mb-2.5 before:content-['—'] before:absolute before:left-0 before:text-[#999]">
          YouTube: <a href="https://www.youtube.com/@serejaris" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">youtube.com/@serejaris</a>
        </li>
        <li className="pl-5 relative mb-2.5 before:content-['—'] before:absolute before:left-0 before:text-[#999]">
          Телеграм‑канал: <a href="https://t.me/ris_ai" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">t.me/ris_ai</a>
        </li>
        <li className="pl-5 relative mb-0 before:content-['—'] before:absolute before:left-0 before:text-[#999]">
          Сообщество вайбкодеров: <a href="https://t.me/vibecod3rs" target="_blank" className="text-[#666] no-underline border-b border-[#ddd] hover:text-[#333] hover:border-[#333] transition-all duration-200">t.me/vibecod3rs</a>
        </li>
      </ul>
    </div>
  );
}


