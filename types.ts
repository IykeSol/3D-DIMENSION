
export type OrganType = 'heart' | 'brain' | 'lungs' | 'liver' | 'lymph';

export interface OrganStat {
  value: string;
  label: string;
}

export interface OrganData {
  id: OrganType;
  name: string;
  file: string;
  title: string;
  description: string;
  stats: OrganStat[];
}

export interface OrganList {
  id: OrganType;
  name: string;
}
