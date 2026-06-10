interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SITE_NAME = 'Annisa Rahmania Putri';
const DEFAULT_DESCRIPTION = 'System Analyst & Web Developer — Portfolio Annisa Rahmania Putri';
const DEFAULT_IMAGE = '/og-image.png';

export function getSEO(props: SEOProps) {
  const title = props.title ? `${props.title} | ${SITE_NAME}` : SITE_NAME;
  const description = props.description || DEFAULT_DESCRIPTION;
  const image = props.image || DEFAULT_IMAGE;
  const url = props.url || 'https://example.com';

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
  };
}
