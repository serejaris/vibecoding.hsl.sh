# Design Document

## Overview

Дизайн прелоадера для предотвращения резкой смены шрифтов и обеспечения плавной загрузки контента. Прелоадер будет интегрирован в корневой layout компонент Next.js и будет показываться до полной загрузки всех критических ресурсов.

## Architecture

### Компонентная архитектура
```
RootLayout
├── PreloaderProvider (Context для управления состоянием)
├── Preloader (Компонент прелоадера)
└── PageContent (Основной контент страницы)
```

### Логика работы
1. **Инициализация**: При загрузке страницы прелоадер активируется автоматически
2. **Отслеживание ресурсов**: Система отслеживает загрузку шрифтов, изображений и других критических ресурсов
3. **Скрытие контента**: Основной контент скрыт до завершения загрузки
4. **Плавный переход**: После загрузки прелоадер исчезает с анимацией

## Components and Interfaces

### PreloaderProvider
```typescript
interface PreloaderContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  progress: number;
  setProgress: (progress: number) => void;
}
```

**Ответственность:**
- Управление глобальным состоянием загрузки
- Предоставление контекста для дочерних компонентов
- Отслеживание прогресса загрузки

### Preloader Component
```typescript
interface PreloaderProps {
  isVisible: boolean;
  progress: number;
  onComplete: () => void;
}
```

**Ответственность:**
- Отображение анимированного индикатора загрузки
- Показ прогресса загрузки (опционально)
- Плавное исчезновение после завершения

### ResourceLoader Hook
```typescript
interface UseResourceLoaderReturn {
  isLoaded: boolean;
  progress: number;
  loadedResources: string[];
  failedResources: string[];
}
```

**Ответственность:**
- Отслеживание загрузки шрифтов через Font Loading API
- Мониторинг загрузки изображений
- Расчет общего прогресса загрузки

## Data Models

### LoadingState
```typescript
type LoadingState = {
  fonts: {
    loaded: boolean;
    progress: number;
    resources: FontResource[];
  };
  images: {
    loaded: boolean;
    progress: number;
    resources: ImageResource[];
  };
  overall: {
    loaded: boolean;
    progress: number;
  };
}
```

### FontResource
```typescript
type FontResource = {
  family: string;
  weight?: string;
  style?: string;
  loaded: boolean;
  error?: string;
}
```

## Error Handling

### Стратегии обработки ошибок

1. **Timeout Protection**: Максимальное время ожидания 5 секунд
   - Если ресурсы не загружаются в течение 5 секунд, прелоадер автоматически исчезает
   - Контент показывается с fallback шрифтами

2. **Graceful Degradation**: Обработка недоступных ресурсов
   - Если шрифт не загружается, используется системный fallback
   - Если изображение не загружается, показывается placeholder или пропускается

3. **Error Logging**: Логирование ошибок для отладки
   - Ошибки загрузки ресурсов логируются в консоль (только в development)
   - Сбор метрик о неудачных загрузках

### Fallback механизмы
```css
/* Системные шрифты как fallback */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

## Testing Strategy

### Unit Tests
- **PreloaderProvider**: Тестирование управления состоянием
- **Preloader Component**: Тестирование рендеринга и анимаций
- **ResourceLoader Hook**: Тестирование логики загрузки ресурсов

### Integration Tests
- **Font Loading**: Тестирование загрузки различных шрифтов
- **Image Loading**: Тестирование загрузки изображений
- **Timeout Scenarios**: Тестирование поведения при таймауте

### E2E Tests
- **Full Page Load**: Тестирование полного цикла загрузки страницы
- **Navigation**: Тестирование прелоадера при переходах между страницами
- **Performance**: Измерение времени загрузки и влияния на производительность

## Visual Design

### Стиль прелоадера
- **Цветовая схема**: Использование существующих CSS переменных Apple-стиля
- **Анимация**: Плавная пульсирующая анимация в стиле Apple
- **Позиционирование**: Полноэкранный overlay с центрированным контентом

### Анимации
```css
/* Пульсирующая анимация логотипа */
@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

/* Плавное исчезновение прелоадера */
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

### Responsive Design
- **Mobile**: Адаптивный размер элементов для мобильных устройств
- **Desktop**: Оптимизированный размер для больших экранов
- **Accessibility**: Поддержка prefers-reduced-motion для пользователей с ограниченными возможностями

## Performance Considerations

### Оптимизация загрузки
- **Critical Resources**: Приоритизация загрузки критических ресурсов
- **Lazy Loading**: Отложенная загрузка некритических ресурсов
- **Resource Hints**: Использование preload и prefetch для оптимизации

### Memory Management
- **Cleanup**: Очистка event listeners и timers при размонтировании
- **Resource Disposal**: Освобождение ресурсов после завершения загрузки

## Integration Points

### Next.js Integration
- **App Router**: Интеграция с Next.js App Router архитектурой
- **Layout Component**: Встраивание в корневой layout.js
- **SSR Compatibility**: Обеспечение совместимости с Server-Side Rendering

### Existing Codebase
- **CSS Variables**: Использование существующих CSS переменных из globals.css
- **Component Structure**: Соответствие существующей структуре компонентов
- **Styling Approach**: Использование Tailwind CSS для стилизации