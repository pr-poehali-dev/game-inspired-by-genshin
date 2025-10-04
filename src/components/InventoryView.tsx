import { useState } from 'react';
import Icon from './ui/icon';
import { Badge } from './ui/badge';

interface InventoryItem {
  id: number;
  name: string;
  type: 'Оружие' | 'Броня' | 'Артефакт' | 'Материал' | 'Зелье';
  rarity: number;
  quantity: number;
  icon: string;
  description: string;
  stats?: {
    name: string;
    value: string;
  }[];
}

const inventoryItems: InventoryItem[] = [
  {
    id: 1,
    name: 'Меч бури',
    type: 'Оружие',
    rarity: 5,
    quantity: 1,
    icon: 'Sword',
    description: 'Легендарный меч, наполненный силой ветра',
    stats: [
      { name: 'Атака', value: '+420' },
      { name: 'Крит. урон', value: '+38%' }
    ]
  },
  {
    id: 2,
    name: 'Королевская броня',
    type: 'Броня',
    rarity: 4,
    quantity: 1,
    icon: 'Shield',
    description: 'Прочная броня королевской гвардии',
    stats: [
      { name: 'Защита', value: '+380' },
      { name: 'HP', value: '+2500' }
    ]
  },
  {
    id: 3,
    name: 'Артефакт феникса',
    type: 'Артефакт',
    rarity: 5,
    quantity: 1,
    icon: 'Flame',
    description: 'Древний артефакт с силой возрождения',
    stats: [
      { name: 'Урон огня', value: '+45%' },
      { name: 'Восстановление HP', value: '+25%' }
    ]
  },
  {
    id: 4,
    name: 'Кристалл элементов',
    type: 'Материал',
    rarity: 3,
    quantity: 47,
    icon: 'Gem',
    description: 'Используется для улучшения персонажей'
  },
  {
    id: 5,
    name: 'Зелье здоровья',
    type: 'Зелье',
    rarity: 2,
    quantity: 23,
    icon: 'Heart',
    description: 'Восстанавливает 50% HP'
  },
  {
    id: 6,
    name: 'Зелье маны',
    type: 'Зелье',
    rarity: 2,
    quantity: 18,
    icon: 'Sparkles',
    description: 'Восстанавливает энергию для использования навыков'
  }
];

const typeColors = {
  'Оружие': 'bg-orange-500/20 text-orange-400 border-orange-500/50',
  'Броня': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  'Артефакт': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
  'Материал': 'bg-green-500/20 text-green-400 border-green-500/50',
  'Зелье': 'bg-pink-500/20 text-pink-400 border-pink-500/50'
};

export default function InventoryView() {
  const [selectedType, setSelectedType] = useState<string>('Все');
  const types = ['Все', 'Оружие', 'Броня', 'Артефакт', 'Материал', 'Зелье'];

  const filteredItems = selectedType === 'Все'
    ? inventoryItems
    : inventoryItems.filter(item => item.type === selectedType);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-vierant to-mystic-purple bg-clip-text text-transparent">
          Инвентарь
        </h2>
        <p className="text-muted-foreground">Управляй своими предметами и экипировкой</p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {types.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedType === type
                ? 'bg-gradient-to-r from-vierant to-mystic-purple text-white shadow-lg'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="bg-card rounded-2xl p-5 hover:bg-card/80 transition-all cursor-pointer border border-border hover:border-vierant/50 hover:shadow-lg animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-vierant/20 to-mystic-purple/20 flex items-center justify-center">
                <Icon name={item.icon as any} size={32} className="text-vierant" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-heading font-bold text-lg">{item.name}</h3>
                  {item.quantity > 1 && (
                    <Badge variant="secondary" className="ml-2">×{item.quantity}</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={`text-xs border ${typeColors[item.type]}`}>
                    {item.type}
                  </Badge>
                  <div className="flex gap-0.5">
                    {Array.from({ length: item.rarity }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-golden fill-golden" size={12} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

            {item.stats && (
              <div className="space-y-2 pt-3 border-t border-border">
                {item.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{stat.name}</span>
                    <span className="font-bold text-vierant">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
