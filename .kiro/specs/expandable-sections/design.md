# Design Document

## Overview

Данный дизайн описывает реализацию функциональности раскрывающихся секций для страницы paccbet. Решение основано на существующем компоненте AccordionItem, но адаптировано под специфику и стиль страницы paccbet с использованием минималистичного дизайна и плавных анимаций.

## Architecture

### Component Structure
```
PaccbetPage
├── PaccbetLayout (существующий)
├── PaccbetHeader (существующий)
├── CollapsibleSection (новый компонент)
│   ├── SectionHeader (интерактивный заголовок)
│   └── SectionContent (сворачиваемый контент)
└── Existing sections (IntroSection, AuthorSection, ErasSection)
```

### State Management
- Локальное состояние React для управления открытыми/закрытыми секциями
- localStorage для персистентности состояния между сессиями
- Custom hook `useCollapsibleSections` для централизованного управления состоянием

## Components and Interfaces

### CollapsibleSection Component
```jsx
interface CollapsibleSectionProps {
  id: string;              // Уникальный идентификатор секции
  title: string;           // Заголовок секции
  children: React.ReactNode; // Содержимое секции
  defaultOpen?: boolean;   // Состояние по умолчанию
  className?: string;      // Дополнительные CSS классы
}
```

### useCollapsibleSections Hook
```jsx
interface SectionState {
  [sectionId: string]: boolean; // true = открыта, false = закрыта
}

interface UseCollapsibleSectionsReturn {
  sectionStates: SectionState;
  toggleSection: (sectionId: string) => void;
  setSectionState: (sectionId: string, isOpen: boolean) => void;
}
```

## Data Models

### Section State Model
```typescript
type SectionId = 'practice' | 'revolution' | 'homework' | 'concepts' | 'comparison' | 'temperature' | 'application' | 'materials' | 'evolution' | 'companies' | 'ecosystem' | 'feedback' | 'technical' | 'future';

interface SectionState {
  [K in SectionId]?: boolean;
}
```

### LocalStorage Schema
```json
{
  "paccbet-sections-state": {
    "practice": true,
    "revolution": false,
    "homework": true
  }
}
```

## Design System Integration

### Visual Design
- **Заголовки секций**: Используют существующий стиль `font-serif text-[28px] font-medium`
- **Индикаторы состояния**: Простые Unicode символы (▼ для открытой, ▶ для закрытой секции)
- **Цветовая схема**: Соответствует существующему дизайну страницы paccbet
  - Основной текст: `#333`
  - Вторичный текст: `#666`
  - Фон hover: `#f0f0f0`
  - Границы: `#eee`

### Typography
- Заголовки: `'Playfair Display', Georgia, serif`
- Основной текст: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Размеры соответствуют существующим в дизайне

### Spacing and Layout
- Отступы между секциями: `mb-10` (40px)
- Внутренние отступы заголовков: `py-3` (12px vertical)
- Отступы контента: `pt-4` (16px top)

## Animation Specifications

### Collapse/Expand Animation
```css
.section-content {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.2s ease-in-out;
  overflow: hidden;
}

.section-header-icon {
  transition: transform 0.2s ease-in-out;
}
```

### States
- **Collapsed**: `max-height: 0`, `opacity: 0`
- **Expanded**: `max-height: auto` (вычисляется динамически), `opacity: 1`
- **Icon rotation**: `transform: rotate(90deg)` для открытой секции

## Error Handling

### LocalStorage Errors
- Graceful fallback при недоступности localStorage
- Обработка ошибок парсинга JSON
- Валидация структуры данных при восстановлении состояния

### Animation Errors
- Fallback на мгновенное переключение при ошибках анимации
- Предотвращение множественных кликов во время анимации

## Implementation Notes

### Development Approach
- Поэтапная реализация: сначала базовая функциональность, затем анимации и localStorage
- Использование существующих стилей и паттернов из проекта
- Минимальные изменения в существующем коде

## Accessibility Considerations

### ARIA Attributes
```jsx
<button
  aria-expanded={isOpen}
  aria-controls={`section-${id}-content`}
  aria-label={`${isOpen ? 'Свернуть' : 'Развернуть'} секцию: ${title}`}
>
```

### Keyboard Navigation
- Enter/Space для переключения состояния секции
- Tab navigation между заголовками секций
- Focus indicators для keyboard users

### Screen Reader Support
- Семантически корректная разметка с использованием `<section>`, `<h2>`, `<button>`
- Описательные aria-labels
- Объявление изменений состояния

## Performance Considerations

### Optimization Strategies
- Использование `React.memo` для предотвращения лишних ре-рендеров
- Debouncing для localStorage операций
- CSS transforms вместо layout-triggering свойств для анимаций

### Memory Management
- Cleanup эффектов при размонтировании компонента
- Оптимизация localStorage операций

## Mobile Responsiveness

### Touch Interactions
- Увеличенная область касания для заголовков (минимум 44px)
- Поддержка touch events
- Предотвращение случайных активаций

### Layout Adaptations
- Адаптивные размеры шрифтов
- Оптимизированные отступы для мобильных устройств
- Учет существующей мобильной навигации (sidebar)