export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post } = await import(`@/content/${slug}.mdx`)

    return <Post />
}

//  used to prerender the provided routes at build time
export function generateStaticParams() {
    return [{ slug: 'welcome' }, { slug: 'about' }]
}

// Any other route not defined in generateStaticParams
// will result in a 404 error
export const dynamicParams = false