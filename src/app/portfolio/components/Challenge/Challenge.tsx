import styles from "./Challenge.module.css";
interface TagItem {
  id: number;
  tag: string;
}

interface ChallengeItem {
  id: number;
  challengeDetail: string;
}

interface ResultItem {
  id: number;
  resultDetail: string;
}

interface Props {
  project: {
    title: string;
    description?: string;
    tags?: readonly TagItem[];
    h1: string;
    year: number;
    platform: string;
    href: string;
    challenge: readonly ChallengeItem[];
    results: readonly ResultItem[];
  };
}

export default function Challenge({ project }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <h3 className={styles.heading}>Challenge</h3>
        </div>
        <div>
          {project.challenge.map((x) => (
            <p key={x.id} className={styles.copy}>
              {x.challengeDetail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
