import { TestItem } from './types';

export const TESTS: TestItem[] = [
  {
    id: '1',
    name: 'صورة دم كاملة (CBC)',
    price: 85,
    time: '4 ساعات',
    category: 'دم',
    icon: 'Activity',
  },
  {
    id: '2',
    name: 'تحليل السكر التراكمي (HbA1c)',
    price: 120,
    time: '6 ساعات',
    category: 'سكر',
    icon: 'Droplets',
  },
  {
    id: '3',
    name: 'فيتامين د (Vitamin D)',
    price: 250,
    time: '24 ساعة',
    category: 'فيتامينات',
    icon: 'Sun',
  },
  {
    id: '4',
    name: 'وظائف الغدة الدرقية (TSH)',
    price: 150,
    time: '12 ساعة',
    category: 'هرمونات',
    icon: 'FlaskConical',
  },
  {
    id: '5',
    name: 'بروفيل الدهون (Lipid Profile)',
    price: 180,
    time: 'يتطلب صيام 12 ساعة',
    category: 'دهون',
    icon: 'TrendingUp',
  },
];
