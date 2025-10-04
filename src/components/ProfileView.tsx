import Icon from './ui/icon';
import { Progress } from './ui/progress';
import { Button } from './ui/button';

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  completed: boolean;
  progress: number;
  maxProgress: number;
}

const achievements: Achievement[] = [
  {
    id: 1,
    name: 'Первые шаги',
    description: 'Получите первого персонажа',
    icon: 'Trophy',
    completed: true,
    progress: 1,
    maxProgress: 1
  },
  {
    id: 2,
    name: 'Коллекционер',
    description: 'Соберите 10 персонажей',
    icon: 'Users',
    completed: false,
    progress: 3,
    maxProgress: 10
  },
  {
    id: 3,
    name: 'Мастер боя',
    description: 'Победите 100 врагов',
    icon: 'Sword',
    completed: false,
    progress: 67,
    maxProgress: 100
  },
  {
    id: 4,
    name: 'Легенда',
    description: 'Достигните 50 уровня с любым персонажем',
    icon: 'Star',
    completed: true,
    progress: 50,
    maxProgress: 50
  }
];

export default function ProfileView() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-vierant to-mystic-purple bg-clip-text text-transparent">
          Профиль игрока
        </h2>
        <p className="text-muted-foreground">Твоя статистика и достижения</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-vierant to-mystic-purple p-1 mb-4">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <Icon name="User" size={64} className="text-vierant" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-1">Путешественник</h3>
              <p className="text-muted-foreground">ID: #TRV-42069</p>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Ранг</span>
                  <span className="font-bold text-vierant">45</span>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">6500 / 10000 XP</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <Icon name="Users" className="mx-auto mb-2 text-vierant" size={24} />
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground">Персонажей</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <Icon name="Trophy" className="mx-auto mb-2 text-golden" size={24} />
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-xs text-muted-foreground">Достижений</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-card rounded-2xl p-6 border border-border mb-6">
            <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
              <Icon name="BarChart" className="text-vierant" size={24} />
              Статистика
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Swords" className="text-orange-400" size={20} />
                  <span className="text-sm text-muted-foreground">Побед в боях</span>
                </div>
                <p className="text-3xl font-bold">127</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Clock" className="text-blue-400" size={20} />
                  <span className="text-sm text-muted-foreground">Время игры</span>
                </div>
                <p className="text-3xl font-bold">24ч</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Target" className="text-purple-400" size={20} />
                  <span className="text-sm text-muted-foreground">Квестов</span>
                </div>
                <p className="text-3xl font-bold">45</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
              <Icon name="Trophy" className="text-golden" size={24} />
              Достижения
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`bg-muted/50 rounded-xl p-4 transition-all hover:bg-muted/70 animate-fade-in ${
                    achievement.completed ? 'border-2 border-golden/50' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      achievement.completed
                        ? 'bg-golden/20'
                        : 'bg-muted'
                    }`}>
                      <Icon
                        name={achievement.icon as any}
                        size={24}
                        className={achievement.completed ? 'text-golden' : 'text-muted-foreground'}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-bold">{achievement.name}</h4>
                        {achievement.completed && (
                          <Icon name="CheckCircle" className="text-golden" size={20} />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      {!achievement.completed && (
                        <div className="flex items-center gap-3">
                          <Progress
                            value={(achievement.progress / achievement.maxProgress) * 100}
                            className="h-2 flex-1"
                          />
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {achievement.progress}/{achievement.maxProgress}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 border border-border">
        <h3 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
          <Icon name="Award" className="text-vierant" size={24} />
          Рейтинг
        </h3>
        <div className="space-y-3">
          {[
            { rank: 1, name: 'DragonSlayer', level: 78, score: 15420 },
            { rank: 2, name: 'MysticMage', level: 72, score: 14850 },
            { rank: 3, name: 'StormBreaker', level: 69, score: 13990 },
            { rank: 4, name: 'Путешественник', level: 45, score: 6500, isPlayer: true },
            { rank: 5, name: 'ShadowHunter', level: 43, score: 6120 }
          ].map((player, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                player.isPlayer
                  ? 'bg-gradient-to-r from-vierant/20 to-mystic-purple/20 border-2 border-vierant'
                  : 'bg-muted/50 hover:bg-muted/70'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                player.rank <= 3 ? 'bg-golden text-background' : 'bg-muted text-foreground'
              }`}>
                {player.rank}
              </div>
              <div className="flex-1">
                <p className="font-bold">{player.name}</p>
                <p className="text-sm text-muted-foreground">Уровень {player.level}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-vierant">{player.score.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">очков</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
