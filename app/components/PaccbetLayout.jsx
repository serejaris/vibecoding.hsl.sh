'use client';

export default function PaccbetLayout({ children }) {
  return (
    <div className="flex">
      <div className="main-content w-full min-h-screen">
        <div className="container max-w-[800px] mx-auto p-5">
          {children}
        </div>
      </div>
    </div>
  );
}