import LayoutWrapper from '../LayoutWrapper'
import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section className={styles.container}>
        <LayoutWrapper>
            <div className={styles.content}>
                <h2 className={styles.heading}>
                    Pricing
                </h2>
            </div>
        </LayoutWrapper>
    </section>
  )
}