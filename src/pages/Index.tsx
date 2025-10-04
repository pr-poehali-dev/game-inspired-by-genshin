import { useState } from 'react';
import CharactersView from '../components/CharactersView';
import InventoryView from '../components/InventoryView';
import ProfileView from '../components/ProfileView';
import Icon from '../components/ui/icon';

type View = 'characters' | 'inventory' | 'profile';

export default function Index() {
  const [currentView, setCurrentView] = useState<View>('characters');

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-navy via-background to-deep-navy">
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-3xl font-heading font-bold bg-gradient-to-r from-vierant via-mystic-purple to-bright-pink bg-clip-text text-transparent">
              ELEMENTAL ADVENTURE
            </h1>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentView('characters')}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  currentView === 'characters'
                    ? 'bg-gradient-to-r from-vierant to-mystic-purple text-white shadow-lg shadow-vierant/50'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Icon name="Users" className="inline mr-2" size={18} />
                Персонажи
              </button>
              <button
                onClick={() => setCurrentView('inventory')}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  currentView === 'inventory'
                    ? 'bg-gradient-to-r from-vierant to-mystic-purple text-white shadow-lg shadow-vierant/50'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Icon name="Package" className="inline mr-2" size={18} />
                Инвентарь
              </button>
              <button
                onClick={() => setCurrentView('profile')}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  currentView === 'profile'
                    ? 'bg-gradient-to-r from-vierant to-mystic-purple text-white shadow-lg shadow-vierant/50'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Icon name="User" className="inline mr-2" size={18} />
                Профиль
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-8">
        {currentView === 'characters' && <CharactersView />}
        {currentView === 'inventory' && <InventoryView />}
        {currentView === 'profile' && <ProfileView />}
      </div>
    </div>
  );
}
