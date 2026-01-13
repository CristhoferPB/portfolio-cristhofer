// components/SEO.js
import Head from 'next/head';

export default function SEO({ title, description, image, url, keywords = [] }) {
  const defaultTitle = 'Cristhofer Pastório | Product Designer & Vibe Coder';
  const defaultDescription = 'Portfólio de Cristhofer Pastório, unindo UX/UI, Product Design e front-end development.';
  const defaultImage = '/images/preview.png';
  const defaultUrl = 'https://cristhofer-pastorio.dev.br';
  const defaultKeywords = [
    'Product Designer',
    'UX/UI',
    'Vibe Coder',
    'Front-end Developer',
    'Design Systems',
    'Prototyping',
    'Portfólio de Design',
    'User Experience',
    'UI Design'
  ];

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={(keywords.length ? keywords : defaultKeywords).join(', ')} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
