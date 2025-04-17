// types.ts
import { StaticImageData } from "next/image";

export interface TagItem {
  id: number;
  tag: string;
}

export interface ChallengeItem {
  id: number;
  challengeDetail: string;
}

export interface ResultItem {
  id: number;
  resultDetail: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  src: StaticImageData;
  description?: string;
  tags?: readonly TagItem[];
  h1?: string;
  year?: number;
  platform?: string;
  href?: string;
  challenge?: readonly ChallengeItem[];
  results?: readonly ResultItem[];
}
