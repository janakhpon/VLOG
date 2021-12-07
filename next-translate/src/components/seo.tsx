import Head from 'next/head'
import { metadata as siteMeta } from 'config'

export type SEOProps = {
    title?: string
    description?: string
    image?: string
    url?: string
}

const SEO = ({ title, description, image, url }: SEOProps) => {
    const pageTitle = title
        ? `${title} | ${siteMeta.siteName}`
        : siteMeta.siteName
    const pageDescription = description ? description : siteMeta.description
    const pageImage = image ? image : siteMeta.siteImage
    const pageUrl = url ? url : siteMeta.siteUrl

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            {/* OpenGraph | Facebook */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content={'website'} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:locale" content="en_IE" />
            <meta property="og:site_name" content={pageTitle} />
            <meta property="og:image" content={pageImage} />
            {/* <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/> */}
            {/* Twitter */}
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content={siteMeta.author.twitter} />
            <meta property="twitter:creator" content={siteMeta.author.twitter} />
            <meta name="twitter:image" content={pageImage} />
            {/* <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="600"/> */}
            {/* Root */}
            <link rel="canonical" href={pageUrl} />
        </Head>
    )
}

export default SEO
