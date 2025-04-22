import Link from "next/link";
import { format } from "date-fns";
import styles from "./PostCard.module.css";

type Props = {
  title: string;
  slug: string;
  date: Date;
  /** Optional cover image URL */
  imageUrl?: string;
};

export default function PostCard({ title, slug, date, imageUrl }: Props) {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${slug}`} className={styles.link}>
        {imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt='' className={styles.cover} />
        )}

        <div className={styles.body}>
          <h2 className={styles.title}>{title}</h2>
          <time dateTime={date.toISOString()} className={styles.date}>
            {format(date, "MMM d, yyyy")}
          </time>
        </div>
      </Link>
    </article>
  );
}
