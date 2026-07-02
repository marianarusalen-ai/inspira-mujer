import { SITE } from './site';
import type { SeoProps } from '@/types';

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) return SITE.name;
  return `${pageTitle} | ${SITE.name}`;
}

export function buildCanonical(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalizedPath}`;
}

export function resolveSeo(props: Partial<SeoProps>): SeoProps {
  const resolved: SeoProps = {
    title: buildTitle(props.title),
    description: props.description ?? SITE.tagline,
    canonical: props.canonical ?? buildCanonical('/'),
    ogType: props.ogType ?? 'website',
    noIndex: props.noIndex ?? false,
  };
  resolved.ogImage = `${SITE.url}${props.ogImage ?? SITE.defaultOgImage}`;
  if (props.ogImageAlt !== undefined) resolved.ogImageAlt = props.ogImageAlt;
  return resolved;
}
