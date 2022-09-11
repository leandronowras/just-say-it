import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.header}>
      <div className={styles.logo}>
        <a>logo</a>
      </div>
      <div className={styles.userData}>
        <a href="/">public</a>
        |   
        <a href="/"> company</a>
        <a href="/">user</a>
      </div>
     </div>
     <div className={styles.options}>
      <div className={styles.optionsButtons}>
        <button>stories</button>
        <button>let it go</button>
      </div>
     </div>
     <div className={styles.search}>
        <form onsubmit="event.preventDefault();" role="search">
          <input id="search" type="search" placeholder="Search..." autofocus required />
        </form>
     </div>
     <div className={styles.posts}>

     </div>
    </div>
  )
}
