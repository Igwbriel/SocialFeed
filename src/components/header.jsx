import styles from './header.module.css'

import igniteLogo from '../assets/Ignite-logo.svg'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo Ignite" />
            <strong> Ignite Feed </strong>
        </header>
        
    )
}