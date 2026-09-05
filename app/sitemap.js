export const dynamic = "force-static";

export default function sitemap() {
    return [
        {
            url: 'https://www.vimalverma.in',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}