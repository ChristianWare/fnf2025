import styles from "./Description.module.css";

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

export default function Description({ project }: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Introduction</h3>
      <p className={styles.copy}>{project.description}</p>
    </div>
  );
}
