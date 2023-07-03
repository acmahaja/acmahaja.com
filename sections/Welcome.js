import styles from "@/styles/sections/Welcome.module.css";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";


export default function Welcome() {
  return (
    <article id="Welcome" className={styles.Welcome}>
      <Navbar color={'Dark'}/>
      <Breadcrumb color={'Dark'} section={'Welcome'}/>
    </article>
  );
}
