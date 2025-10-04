import { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterDetails from './CharacterDetails';

export interface Character {
  id: number;
  name: string;
  element: 'Вода' | 'Огонь' | 'Свет' | 'Тьма' | 'Ветер';
  class: 'Воин' | 'Маг' | 'Лучник' | 'Целитель';
  level: number;
  maxLevel: number;
  rarity: number;
  image: string;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  skills: {
    name: string;
    level: number;
    maxLevel: number;
    description: string;
  }[];
}

const characters: Character[] = [
  {
    id: 1,
    name: 'Аквария',
    element: 'Вода',
    class: 'Маг',
    level: 45,
    maxLevel: 90,
    rarity: 5,
    image: '/img/3a33df1a-91b7-4698-8a8c-fb6c8a80c85e.jpg',
    hp: 8500,
    maxHp: 12000,
    attack: 1250,
    defense: 680,
    skills: [
      { name: 'Водный шторм', level: 6, maxLevel: 10, description: 'Наносит урон водой всем врагам' },
      { name: 'Исцеляющий поток', level: 5, maxLevel: 10, description: 'Восстанавливает HP союзникам' },
      { name: 'Ледяной щит', level: 4, maxLevel: 10, description: 'Создаёт защитный барьер' }
    ]
  },
  {
    id: 2,
    name: 'Пироксис',
    element: 'Огонь',
    class: 'Воин',
    level: 50,
    maxLevel: 90,
    rarity: 5,
    image: '/img/4d4e9589-79ee-4016-ab1f-1f6385245d3c.jpg',
    hp: 10200,
    maxHp: 15000,
    attack: 1580,
    defense: 720,
    skills: [
      { name: 'Огненный меч', level: 7, maxLevel: 10, description: 'Мощная атака огнём' },
      { name: 'Взрыв пламени', level: 6, maxLevel: 10, description: 'AOE урон по области' },
      { name: 'Ярость феникса', level: 5, maxLevel: 10, description: 'Увеличивает атаку команды' }
    ]
  },
  {
    id: 3,
    name: 'Люмина',
    element: 'Свет',
    class: 'Целитель',
    level: 42,
    maxLevel: 90,
    rarity: 4,
    image: '/img/63fcb379-e0ac-46e1-896a-938ca2f1fcd7.jpg',
    hp: 7800,
    maxHp: 11000,
    attack: 980,
    defense: 850,
    skills: [
      { name: 'Святой свет', level: 5, maxLevel: 10, description: 'Массовое исцеление' },
      { name: 'Благословение', level: 6, maxLevel: 10, description: 'Баф защиты команды' },
      { name: 'Воскрешение', level: 3, maxLevel: 10, description: 'Возвращает павшего союзника' }
    ]
  }
];

export default function CharactersView() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-vierant to-mystic-purple bg-clip-text text-transparent">
          Мои персонажи
        </h2>
        <p className="text-muted-foreground">Выберите персонажа для просмотра деталей и прокачки</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {characters.map((character, index) => (
          <div
            key={character.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CharacterCard
              character={character}
              onClick={() => setSelectedCharacter(character)}
              isSelected={selectedCharacter?.id === character.id}
            />
          </div>
        ))}
      </div>

      {selectedCharacter && (
        <CharacterDetails
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
