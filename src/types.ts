export interface TestItem {
  id: string;
  name: string;
  price: number;
  time: string;
  category: string;
  icon: string;
}

export type ViewType = 'home' | 'tests' | 'appointments';
