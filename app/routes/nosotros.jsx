import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
    return[
        {title: 'GuitarLA - Sobre Nosotros'},
        {description: 'Venta de guitarras, blog de musica'}
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

const Nosotros = () => {

    return (
        <main className='contenedor nosotros'>
            <h2 className='heading'>Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="imegen nosotros" />
                <div>
                    <p>Morbi id posuere est. Sed sed massa a massa scelerisque malesuada a sit amet tellus. Fusce facilisis gravida lectus, at viverra tortor pretium ac. Nullam ornare nulla nisl, vitae aliquet libero ultrices non. Praesent laoreet pellentesque ex in gravida. </p>
                    <p>Morbi id posuere est. Sed sed massa a massa scelerisque malesuada a sit amet tellus. Fusce facilisis gravida lectus, at viverra tortor pretium ac. Nullam ornare nulla nisl, vitae aliquet libero ultrices non. Praesent laoreet pellentesque ex in gravida.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros
