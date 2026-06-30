const LOCALE = 'es-AR';
const TIMEZONE = 'America/Argentina/Buenos_Aires';

const FULL_FORMAT: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: TIMEZONE,
};

const SHORT_FORMAT: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: TIMEZONE,
};

const MONTH_FORMAT: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric',
  timeZone: TIMEZONE,
};

const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: TIMEZONE,
};

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat(LOCALE, FULL_FORMAT).format(new Date(date));
}

export function formatDateShort(date: Date | string): string {
  return new Intl.DateTimeFormat(LOCALE, SHORT_FORMAT).format(new Date(date));
}

export function formatMonth(date: Date | string): string {
  return new Intl.DateTimeFormat(LOCALE, MONTH_FORMAT).format(new Date(date));
}

export function formatTime(date: Date | string): string {
  return new Intl.DateTimeFormat(LOCALE, TIME_FORMAT).format(new Date(date));
}

export function toISODate(date: Date | string): string {
  return new Date(date).toISOString().split('T')[0] ?? '';
}

export function isPast(date: Date | string): boolean {
  return new Date(date) < new Date();
}

export function isToday(date: Date | string): boolean {
  const d = new Date(date);
  const now = new Date();
  return (
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear()
  );
}
