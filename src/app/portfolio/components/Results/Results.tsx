import styles from "./Results.module.css";

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

export default function Results({ project }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <h3 className={styles.heading}>Results</h3>
        </div>
        <div>
          {project.results.map((x) => (
            <p key={x.id} className={styles.copy}>
              {x.resultDetail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
