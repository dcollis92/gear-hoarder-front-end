import styles from './Landing.module.css'
import Logo from '../../assets/logos/Gear Hoarder-white.png'



const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h1><img src={Logo} alt="" width='500px'/></h1>
    </main>
  )
}

export default Landing
