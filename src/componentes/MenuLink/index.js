import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink({children, to}){
    
    const localização = useLocation()
    
    return (
        <Link
            className={`
            ${styles.link}
            ${localização.pathname === to ? styles.linkDestacado : ''}`} to={to}>{children}
        </Link>
    )
}