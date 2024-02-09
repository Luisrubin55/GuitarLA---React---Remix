import {useLoaderData} from '@remix-run/react'
import {getPosts} from '~/models/posts.server'
import ListadoPost from '~/components/listado-post'

export function meta(){
    return[
        {title: 'GuitarLA - Nuestro blog'},
        {description: 'GuitarLA - Blog de musica y venta de guitarras'}
        
    ]
}

export async function loader() {
    const posts = await getPosts()
    return posts.data
}

const Blog = () => {
    const posts = useLoaderData()

    return (
        <ListadoPost posts={posts} />
    )
}

export default Blog
