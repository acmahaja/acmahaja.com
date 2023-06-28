import styles from "@/styles/sections/Welcome.module.css";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";


export default function Welcome() {
  return (
    <article className={styles.Welcome}>
      <Navbar color={'Dark'}/>
      <section >
        <Breadcrumb color={'Dark'} count={4} section={1}/>

      </section>
    </article>
  );
}
