import styles from "./Problem.module.css";
// import Button from "@/components/Button/Button";
import LayoutWrapper from "@/components/LayoutWrapper";

const Problem = () => {
  const data = [
    {
      title: "Slow Page Loading Times",
      description:
        "A slow website frustrates customers and leads to abandoned carts, costing you sales and damaging your brand's reputation.",
    },
    {
      title: "Bad Mobile Phone Experience",
      description:
        "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices.",
    },
    {
      title: "Complicated Checkout Process",
      description:
        "A confusing or lengthy checkout process causes potential buyers to abandon their carts, leaving revenue on the table.",
    },
    {
      title: "Low Search Engine Visibility",
      description:
        "Without proper optimization, your website fails to rank on search engines, making it hard for potential customers to find you online.",
    },
    {
      title: "Poor Inventory Management",
      description:
        "Managing products, stock levels, and updates can become overwhelming, leading to mistakes and unhappy customers.",
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.problemContainer}>
            <h2 className={styles.heading}>
              Problems <br /> we solve
            </h2>
          </div>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.index}>0{index + 1}</span>
              <div>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.description}>{x.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className={styles.btnContainer}>
          <Button text='learn more about us' href='/about' btnType='black' />
        </div> */}
      </LayoutWrapper>
    </section>
  );
};

export default Problem;
