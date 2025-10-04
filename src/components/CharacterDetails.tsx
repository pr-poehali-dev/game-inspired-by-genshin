import { Character } from './CharactersView';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import Icon from './ui/icon';

interface CharacterDetailsProps {
  character: Character;
  onClose: () => void;
}

export default function CharacterDetails({ character, onClose }: CharacterDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border p-6 flex justify-between items-center z-10">
          <h2 className="text-3xl font-heading font-bold bg-gradient-to-r from-vierant to-mystic-purple bg-clip-text text-transparent">
            {character.name}
          </h2>
          <Button onClick={onClose} variant="ghost" size="icon" className="rounded-full">
            <Icon name="X" size={24} />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold mb-4">Характеристики</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Здоровье</span>
                      <span className="font-bold">{character.hp} / {character.maxHp}</span>
                    </div>
                    <Progress value={(character.hp / character.maxHp) * 100} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-muted/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Sword" className="text-orange-400" size={20} />
                        <span className="text-sm text-muted-foreground">Атака</span>
                      </div>
                      <p className="text-2xl font-bold">{character.attack}</p>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Shield" className="text-blue-400" size={20} />
                        <span className="text-sm text-muted-foreground">Защита</span>
                      </div>
                      <p className="text-2xl font-bold">{character.defense}</p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Уровень</span>
                      <span className="font-bold text-vierant">{character.level} / {character.maxLevel}</span>
                    </div>
                    <Progress value={(character.level / character.maxLevel) * 100} className="h-2 mb-3" />
                    <Button className="w-full bg-gradient-to-r from-vierant to-mystic-purple hover:opacity-90">
                      <Icon name="ArrowUp" className="mr-2" size={18} />
                      Повысить уровень
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Навыки</h3>
            <div className="grid gap-4">
              {character.skills.map((skill, index) => (
                <div key={index} className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-vierant bg-vierant/10 px-3 py-1 rounded-full">
                      Ур. {skill.level}/{skill.maxLevel}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Progress value={(skill.level / skill.maxLevel) * 100} className="h-2 flex-1" />
                    <Button size="sm" variant="outline" className="border-vierant text-vierant hover:bg-vierant hover:text-white">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
