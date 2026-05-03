/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Product, Supplier } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Industrial Machinery',
    slug: 'industrial-machinery',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced manufacturing equipment and industrial tools made in the UAE.'
  },
  {
    id: '2',
    name: 'Renewable Energy',
    slug: 'renewable-energy',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    description: 'Leading solar and clean energy solutions developed in the region.'
  },
  {
    id: '3',
    name: 'Electronics & High Tech',
    slug: 'electronics',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    description: 'Innovative electronics and smart technology components.'
  },
  {
    id: '4',
    name: 'Petrochemicals',
    slug: 'petrochemicals',
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=800',
    description: 'High-quality chemical products and specialized industrial materials.'
  },
  {
    id: '5',
    name: 'Construction Materials',
    slug: 'construction',
    icon: 'Component',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    description: 'Sustainable and premium building materials for global projects.'
  },
  {
    id: '6',
    name: 'Agri-Tech & Food',
    slug: 'agritech',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
    description: 'Smart farming solutions and premium food manufacturing.'
  }
];

export const suppliers: Supplier[] = [
  {
    id: 's1',
    name: 'Emirates Global Aluminium (EGA)',
    logo: 'https://images.unsplash.com/photo-1599305090748-364e7956f17a?auto=format&fit=crop&q=80&w=200',
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200',
    location: 'Jebel Ali, Dubai',
    established: 1975,
    businessType: ['Manufacturer', 'Exporter'],
    employees: '5001 - 10000',
    rating: 4.9,
    description: 'EGA is the world\'s largest \'premium aluminium\' producer and the biggest industrial company in the United Arab Emirates outside oil and gas.',
    isVerified: true,
    certificates: ['ISO 9001', 'ISO 14001', 'ASI Performance Standard']
  },
  {
    id: 's2',
    name: 'Masdar Solar Solutions',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200',
    coverImage: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200',
    location: 'Masdar City, Abu Dhabi',
    established: 2006,
    businessType: ['Manufacturer', 'Service Provider'],
    employees: '1001 - 5000',
    rating: 4.8,
    description: 'A global leader in renewable energy and sustainable urban development.',
    isVerified: true,
    certificates: ['ISO 9001', 'LEED Platinum', 'GSAS']
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Ultra-Pure Primary Aluminium Billet',
    priceRange: '$2,400 - $2,800',
    minOrder: '20 Tons',
    category: '1',
    images: [
      'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800'
    ],
    supplierId: 's1',
    description: 'High-quality aluminium billets produced using advanced electrolysis technology. Superior surface finish and metallurgical properties.',
    specifications: {
      'Purity': '99.9%',
      'Standard': 'ASTM B221',
      'Diameter': '150mm - 300mm',
      'Alloy': '6000 Series'
    },
    isHot: true
  },
  {
    id: 'p2',
    name: 'Bifacial High-Efficiency Solar Panel',
    priceRange: '$0.18 - $0.22',
    minOrder: '500 Pieces',
    category: '2',
    images: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1466611653911-954ffea1127b?auto=format&fit=crop&q=80&w=800'
    ],
    supplierId: 's2',
    description: 'Next-generation PERC bifacial solar modules designed for extreme desert conditions. 25% more energy yield with ground reflection.',
    specifications: {
      'Power Output': '550W+',
      'Efficiency': '21.5%',
      'Weight': '28.5 kg',
      'Warranty': '25 Years Linear'
    },
    isHot: true
  }
];
