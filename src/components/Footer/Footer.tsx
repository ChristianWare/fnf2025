import styles from "./Footer.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import SectionIntro from "../SectionIntro/SectionIntro";

const data = [
  {
    id: 1,
    title: "Shop",
    options: [
      {
        id: 1.1,
        option: "All Honey Varieties",
      },
      {
        id: 1.2,
        option: "Gift Boxes",
      },
      {
        id: 1.3,
        option: "Raw & Unfiltered",
      },
      {
        id: 1.4,
        option: "Accessories & Tools",
      },
      {
        id: 1.5,
        option: "Honey Recipe Booklets",
      },
    ],
  },
  {
    id: 2,
    title: "Discover",
    options: [
      {
        id: 2.1,
        option: "FAQ",
      },
      {
        id: 2.2,
        option: "Recipes",
      },
      {
        id: 2.3,
        option: "Our Story",
      },
      {
        id: 2.4,
        option: "Blog",
      },
    ],
  },
  {
    id: 3,
    title: "Connect",
    options: [
      {
        id: 3.1,
        option: "hello@goldendrips.com",
      },
      {
        id: 3.2,
        option: "Wholesale Inquiries",
      },
      {
        id: 3.3,
        option: "My Account",
      },
      {
        id: 3.4,
        option: "Careers",
      },
    ],
  },
];

const data2 = [
  {
    id: 4,
    title: "Privacy Policy",
  },
  {
    id: 5,
    title: "Terms & Conditions",
  },
  {
    id: 6,
    title: "Cookie Preferences",
  },
  {
    id: 7,
    title: "Legal Information",
  },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}>
            <SectionIntro
              title='Fonts & Footers'
              color='tan'
              dotColor='tanDot'
            />
          </div>
          <h3 className={styles.heading}>Your E-commerce Specialists</h3>
          <p className={styles.copy}>
            A surprise for your first order by subscribing to the newsletter
          </p>
          <div className={styles.email}>
            <span className={styles.span}>Email</span>
            <Arrow className={styles.icon} />
          </div>
          <p className={styles.privacy}>I accept the privacy policy</p>
        </div>
        <div className={styles.right}>
          {data.map((x) => (
            <div className={styles.optionSection} key={x.id}>
              <div className={styles.title}>{x.title}</div>
              <ul className={styles.optionList}>
                {x.options.map((y) => (
                  <li key={y.id} className={styles.option}>
                    {y.option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.data2Container}>
          {data2.map((x) => (
            <p key={x.id} className={styles.option}>
              {x.title}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
