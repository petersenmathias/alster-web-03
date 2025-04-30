<script lang="ts">
	interface Props {
		title?: string;
		pageTitle?: string;
		metaTitle?: string;
		metaDescription?: string;
		siteUrl?: string;
	}

	const {
		title = 'Alster',
		pageTitle = '',
		metaTitle = 'Alster - Digital Product Development & Design - Internet Mastery',
		metaDescription = 'Twenty years of experience in crafting next-level digital products with innovative and powerful tailor-made teams. Grow your digital tomorrow with us.',
		siteUrl = 'https://alster.se'
	}: Props = $props();
</script>

<svelte:head>
	<meta charSet="utf-8" />

	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="stylesheet" href="https://use.typekit.net/zjl6sdq.css" />
	<link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
	<link rel="manifest" href="/meta/site.webmanifest" />

	<meta name="msapplication-TileColor" content="#0f1217" />
	<meta name="theme-color" content="#0f1217" />

	<title>{`${title} ${pageTitle.length ? `- ${pageTitle}` : ''}`}</title>

	<meta name="title" content={metaTitle} />
	<meta name="description" content={metaDescription} />

	<meta property="og:title" content={metaTitle} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={metaDescription || ''} />
	<meta property="og:image" content="/meta/alster_share.jpg" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metaTitle} />
	<meta name="twitter:description" content={metaDescription} />
	<meta name="twitter:image" content="/meta/alster_share.jpg" />

	<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
</svelte:head>
