import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoPost from '~/components/listado-post'
import Curso from '~/components/curso'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPost from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'


export function meta() {
    return[
        {title: 'GuitarLA - Inicio'},
        {description: 'Venta de guitarras, blog de musica'}
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesGuitarras
        },
        {
            rel: 'stylesheet',
            href: stylesPost
        },
        {
            rel: 'stylesheet',
            href: stylesCurso
        }
    ]
}

export async function loader() {

    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso()
    ])
    
    return {
        guitarras: guitarras.data,
        posts: posts.data,
        curso: curso.data
    }
}

const Index = () => {

    const { guitarras, posts, curso } = useLoaderData()

    return (
        <>
            <main className='contenedor'>
                <ListadoGuitarras guitarras={guitarras} />
            </main>

            <Curso curso={curso.attributes} />

            <section className='contenedor'>
                <ListadoPost posts={posts} />
            </section>
        </>
    )
}

export default Index
