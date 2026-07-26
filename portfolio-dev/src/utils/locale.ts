export function getLocaleFromRequest(request: Request): string {
  const acceptLanguage = request.headers.get('accept-language') ?? '';

  if (!acceptLanguage) {
    return 'es';
  }

  const preferredLanguage = acceptLanguage
    .split(',')
    .map((value) => value.trim().split(';')[0].toLowerCase())
    .find((value) => value.startsWith('en') || value.startsWith('es'));

  if (preferredLanguage?.startsWith('en')) {
    return 'en';
  }

  if (preferredLanguage?.startsWith('es')) {
    return 'es';
  }

  return 'es';
}
