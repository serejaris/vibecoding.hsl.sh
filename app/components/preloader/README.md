# Preloader System

Система прелоадера для предотвращения резкой смены шрифтов и обеспечения плавной загрузки контента.

## Компоненты

### Основные компоненты

- **PreloaderProvider** - React Context провайдер для управления состоянием
- **Preloader** - Основной компонент прелоадера с анимациями
- **useResourceLoader** - Хук для отслеживания загрузки ресурсов
- **FontLoader** - Компонент для оптимизации загрузки шрифтов

### Оптимизация и обработка ошибок

- **PreloaderErrorBoundary** - Error boundary для обработки ошибок
- **AccessibilityOptimizer** - Оптимизация для доступности и производительности

### Компоненты для разработки

- **PreloaderDebug** - Отладочная информация (только в development)
- **PageTest** - Тестирование на разных страницах
- **NetworkTest** - Симуляция медленного интернета

## Использование

Прелоадер автоматически интегрирован в `app/layout.js`:

```jsx
import { PreloaderProvider, Preloader } from './components/preloader';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <PreloaderProvider>
          <Preloader />
          {children}
        </PreloaderProvider>
      </body>
    </html>
  );
}
```

## Функции

### ✅ Отслеживание ресурсов
- Загрузка системных шрифтов Apple
- Загрузка изображений на странице
- Расчет общего прогресса

### ✅ Анимации
- Пульсирующий логотип в стиле Apple
- Плавный спиннер загрузки
- Прогресс-бар с градиентом
- Плавное исчезновение

### ✅ Обработка ошибок
- Timeout защита (5 секунд)
- Graceful degradation при ошибках
- Error boundary для критических ошибок
- Fallback для офлайн режима

### ✅ Доступность
- Поддержка prefers-reduced-motion
- ARIA атрибуты для screen readers
- Семантическая разметка
- Клавиатурная навигация

### ✅ Производительность
- Оптимизированные анимации через requestAnimationFrame
- Debounced обновления прогресса
- Cleanup event listeners и timers
- Memory leak prevention

### ✅ SEO
- Structured data для состояния загрузки
- Сохранение meta тегов
- Индексируемый контент

## Настройки

### CSS переменные (globals.css)
```css
--color-apple-black: #1d1d1f;
--color-apple-gray: #6e6e73;
--color-apple-light-gray: #f5f5f7;
--color-apple-blue: #0071e3;
--font-family-apple: -apple-system, BlinkMacSystemFont, ...;
```

### Таймауты
- Основной timeout: 5 секунд
- Анимация исчезновения: 600ms
- Задержка перед скрытием: 300ms

## Тестирование

В development режиме доступны компоненты для тестирования:

- **PreloaderDebug** - показывает состояние в реальном времени
- **PageTest** - тестирует работу на разных страницах
- **NetworkTest** - симулирует медленное соединение

## Совместимость

- ✅ Next.js 15+ App Router
- ✅ React 19+
- ✅ Современные браузеры с Font Loading API
- ✅ Fallback для старых браузеров
- ✅ SSR совместимость
- ✅ Mobile responsive
- ✅ Accessibility compliant