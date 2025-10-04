import { useState } from 'react';
import Icon from './ui/icon';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface Quest {
  id: number;
  title: string;
  description: string;
  type: 'Основной' | 'Побочный' | 'Ежедневный' | 'События';
  status: 'active' | 'completed' | 'locked';
  progress: number;
  maxProgress: number;
  rewards: {
    type: string;
    amount: number;
    icon: string;
  }[];
  difficulty: 'Легко' | 'Средне' | 'Сложно' | 'Эпик';
  element?: string;
}

const quests: Quest[] = [
  {
    id: 1,
    title: 'Испытание воды',
    description: 'Победите 10 водных элементалей в Заливе туманов',
    type: 'Основной',
    status: 'active',
    progress: 7,
    maxProgress: 10,
    difficulty: 'Средне',
    element: 'Вода',
    rewards: [
      { type: 'Опыт', amount: 500, icon: 'Star' },
      { type: 'Золото', amount: 1000, icon: 'Coins' },
      { type: 'Кристаллы', amount: 50, icon: 'Gem' }
    ]
  },
  {
    id: 2,
    title: 'Огненное испытание',
    description: 'Зажгите все древние факелы в Пещере пламени',
    type: 'Основной',
    status: 'active',
    progress: 3,
    maxProgress: 5,
    difficulty: 'Сложно',
    element: 'Огонь',
    rewards: [
      { type: 'Опыт', amount: 800, icon: 'Star' },
      { type: 'Золото', amount: 1500, icon: 'Coins' },
      { type: 'Редкий артефакт', amount: 1, icon: 'Trophy' }
    ]
  },
  {
    id: 3,
    title: 'Собиратель трав',
    description: 'Соберите 20 целебных трав в Зелёной долине',
    type: 'Побочный',
    status: 'active',
    progress: 14,
    maxProgress: 20,
    difficulty: 'Легко',
    rewards: [
      { type: 'Опыт', amount: 200, icon: 'Star' },
      { type: 'Золото', amount: 500, icon: 'Coins' }
    ]
  },
  {
    id: 4,
    title: 'Ежедневная тренировка',
    description: 'Победите 5 врагов любого типа',
    type: 'Ежедневный',
    status: 'active',
    progress: 5,
    maxProgress: 5,
    difficulty: 'Легко',
    rewards: [
      { type: 'Опыт', amount: 100, icon: 'Star' },
      { type: 'Золото', amount: 200, icon: 'Coins' }
    ]
  },
  {
    id: 5,
    title: 'Легенда о драконе',
    description: 'Найдите и победите древнего дракона',
    type: 'События',
    status: 'locked',
    progress: 0,
    maxProgress: 1,
    difficulty: 'Эпик',
    rewards: [
      { type: 'Опыт', amount: 2000, icon: 'Star' },
      { type: 'Золото', amount: 5000, icon: 'Coins' },
      { type: 'Легендарное оружие', amount: 1, icon: 'Sword' },
      { type: 'Кристаллы', amount: 200, icon: 'Gem' }
    ]
  },
  {
    id: 6,
    title: 'Древние руины',
    description: 'Исследуйте забытый храм и найдите артефакт',
    type: 'Побочный',
    status: 'completed',
    progress: 1,
    maxProgress: 1,
    difficulty: 'Средне',
    rewards: [
      { type: 'Опыт', amount: 400, icon: 'Star' },
      { type: 'Артефакт', amount: 1, icon: 'Sparkles' }
    ]
  }
];

const typeColors = {
  'Основной': 'bg-orange-500/20 text-orange-400 border-orange-500/50',
  'Побочный': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  'Ежедневный': 'bg-green-500/20 text-green-400 border-green-500/50',
  'События': 'bg-purple-500/20 text-purple-400 border-purple-500/50'
};

const difficultyColors = {
  'Легко': 'text-green-400',
  'Средне': 'text-yellow-400',
  'Сложно': 'text-orange-400',
  'Эпик': 'text-purple-400'
};

export default function QuestsView() {
  const [selectedType, setSelectedType] = useState<string>('Все');
  const types = ['Все', 'Основной', 'Побочный', 'Ежедневный', 'События'];

  const filteredQuests = selectedType === 'Все'
    ? quests
    : quests.filter(quest => quest.type === selectedType);

  const activeQuests = quests.filter(q => q.status === 'active').length;
  const completedQuests = quests.filter(q => q.status === 'completed').length;

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-vierant to-mystic-purple bg-clip-text text-transparent">
          Квесты и задания
        </h2>
        <p className="text-muted-foreground">Выполняй задания и получай награды</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-vierant/20 flex items-center justify-center">
              <Icon name="Target" className="text-vierant" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">{activeQuests}</p>
              <p className="text-sm text-muted-foreground">Активных</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-golden/20 flex items-center justify-center">
              <Icon name="CheckCircle" className="text-golden" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">{completedQuests}</p>
              <p className="text-sm text-muted-foreground">Выполнено</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-mystic-purple/20 flex items-center justify-center">
              <Icon name="Lock" className="text-mystic-purple" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold">{quests.filter(q => q.status === 'locked').length}</p>
              <p className="text-sm text-muted-foreground">Заблокировано</p>
            </div>
          </div>
        </div>
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

      <div className="space-y-4">
        {filteredQuests.map((quest, index) => (
          <div
            key={quest.id}
            className={`bg-card rounded-2xl p-6 border transition-all hover:shadow-lg animate-fade-in ${
              quest.status === 'completed'
                ? 'border-golden/50 bg-golden/5'
                : quest.status === 'locked'
                ? 'border-muted opacity-60'
                : 'border-border hover:border-vierant/50'
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                quest.status === 'completed'
                  ? 'bg-golden/20'
                  : quest.status === 'locked'
                  ? 'bg-muted/50'
                  : 'bg-gradient-to-br from-vierant/20 to-mystic-purple/20'
              }`}>
                <Icon
                  name={quest.status === 'locked' ? 'Lock' : quest.status === 'completed' ? 'CheckCircle' : 'Target'}
                  size={32}
                  className={quest.status === 'completed' ? 'text-golden' : 'text-vierant'}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-1">{quest.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`text-xs border ${typeColors[quest.type]}`}>
                        {quest.type}
                      </Badge>
                      <span className={`text-xs font-semibold ${difficultyColors[quest.difficulty]}`}>
                        {quest.difficulty}
                      </span>
                    </div>
                  </div>
                  {quest.status === 'completed' && (
                    <Icon name="CheckCircle" className="text-golden" size={24} />
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{quest.description}</p>

                {quest.status !== 'locked' && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Прогресс</span>
                      <span className="text-sm font-semibold">
                        {quest.progress}/{quest.maxProgress}
                      </span>
                    </div>
                    <Progress
                      value={(quest.progress / quest.maxProgress) * 100}
                      className="h-2"
                    />
                  </div>
                )}

                <div className="bg-muted/30 rounded-xl p-4 mb-4">
                  <p className="text-sm font-semibold mb-3 text-muted-foreground">Награды:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {quest.rewards.map((reward, i) => (
                      <div key={i} className="flex items-center gap-2 bg-background/50 rounded-lg p-2">
                        <Icon name={reward.icon as any} className="text-golden" size={20} />
                        <div>
                          <p className="text-xs text-muted-foreground">{reward.type}</p>
                          <p className="text-sm font-bold">{reward.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  {quest.status === 'active' && quest.progress === quest.maxProgress && (
                    <Button className="bg-gradient-to-r from-vierant to-mystic-purple hover:opacity-90">
                      <Icon name="Gift" className="mr-2" size={18} />
                      Получить награду
                    </Button>
                  )}
                  {quest.status === 'active' && quest.progress < quest.maxProgress && (
                    <Button variant="outline" className="border-vierant text-vierant hover:bg-vierant hover:text-white">
                      <Icon name="MapPin" className="mr-2" size={18} />
                      Показать на карте
                    </Button>
                  )}
                  {quest.status === 'locked' && (
                    <Button variant="ghost" disabled className="text-muted-foreground">
                      <Icon name="Lock" className="mr-2" size={18} />
                      Заблокировано
                    </Button>
                  )}
                  {quest.status === 'completed' && (
                    <Button variant="ghost" disabled className="text-golden">
                      <Icon name="CheckCircle" className="mr-2" size={18} />
                      Выполнено
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
