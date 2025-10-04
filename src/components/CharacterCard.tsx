import { Character } from './CharactersView';
import Icon from './ui/icon';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
  isSelected: boolean;
}

const elementColors = {
  'Вода': 'from-blue-500 to-cyan-400',
  'Огонь': 'from-red-500 to-orange-400',
  'Свет': 'from-yellow-300 to-pink-300',
  'Тьма': 'from-purple-600 to-indigo-900',
  'Ветер': 'from-green-400 to-emerald-300'
};

const elementIcons = {
  'Вода': 'Droplet',
  'Огонь': 'Flame',
  'Свет': 'Sun',
  'Тьма': 'Moon',
  'Ветер': 'Wind'
};

export default function CharacterCard({ character, onClick, isSelected }: CharacterCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        isSelected ? 'ring-4 ring-vierant shadow-2xl shadow-vierant/50' : ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom right, var(--vierant), var(--mystic-purple))`
        }}
      />
      
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-full bg-gradient-to-r ${elementColors[character.element]} text-white text-sm font-semibold flex items-center gap-1.5 shadow-lg`}>
          <Icon name={elementIcons[character.element] as any} size={16} />
          {character.element}
        </div>
        
        <div className="absolute top-3 left-3 flex gap-1">
          {Array.from({ length: character.rarity }).map((_, i) => (
            <Icon key={i} name="Star" className="text-golden fill-golden" size={16} />
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-heading font-bold mb-1">{character.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{character.class}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Уровень</span>
            <span className="font-bold text-vierant">{character.level}/{character.maxLevel}</span>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-vierant to-mystic-purple rounded-full transition-all duration-500"
              style={{ width: `${(character.level / character.maxLevel) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="text-center">
              <Icon name="Heart" className="mx-auto mb-1 text-red-400" size={16} />
              <p className="text-xs text-muted-foreground">HP</p>
              <p className="text-sm font-semibold">{character.hp}</p>
            </div>
            <div className="text-center">
              <Icon name="Sword" className="mx-auto mb-1 text-orange-400" size={16} />
              <p className="text-xs text-muted-foreground">ATK</p>
              <p className="text-sm font-semibold">{character.attack}</p>
            </div>
            <div className="text-center">
              <Icon name="Shield" className="mx-auto mb-1 text-blue-400" size={16} />
              <p className="text-xs text-muted-foreground">DEF</p>
              <p className="text-sm font-semibold">{character.defense}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
