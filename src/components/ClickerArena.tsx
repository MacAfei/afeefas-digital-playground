import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Zap, Target, Timer, Trophy, Activity, Wifi, Monitor } from 'lucide-react';

interface Player {
  id: string;
  name: string;
  clicks: number;
  lastClick: Date;
}

const ClickerArena = () => {
  const [clicks, setClicks] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [isGameActive, setIsGameActive] = useState(false);
  const [timeToMidnight, setTimeToMidnight] = useState('');
  const [leaderboard, setLeaderboard] = useState<Player[]>([]);
  const [clickAnimation, setClickAnimation] = useState(false);
  const [currentRank, setCurrentRank] = useState(0);
  const [backgroundClicks, setBackgroundClicks] = useState(0);
  const [digitalLifeMode, setDigitalLifeMode] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null);
  const backgroundClickRef = useRef<number>(0);

  // Calculate time until midnight
  const calculateTimeToMidnight = useCallback(() => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const diff = midnight.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeToMidnight(calculateTimeToMidnight());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeToMidnight]);

  // Mock leaderboard data (in real app, this would come from Supabase)
  useEffect(() => {
    const mockLeaderboard: Player[] = [
      { id: '1', name: 'ClickMaster', clicks: 15420, lastClick: new Date() },
      { id: '2', name: 'TapTitan', clicks: 12890, lastClick: new Date() },
      { id: '3', name: 'SpeedDemon', clicks: 11230, lastClick: new Date() },
      { id: '4', name: 'FingerFury', clicks: 9870, lastClick: new Date() },
      { id: '5', name: 'ClickQueen', clicks: 8940, lastClick: new Date() },
    ];
    setLeaderboard(mockLeaderboard);
  }, []);

  // Digital Life Mode - simulates background clicking
  useEffect(() => {
    if (!digitalLifeMode || !isGameActive) return;

    const simulateDigitalLife = () => {
      // Simulate various digital activities
      const activities = [
        { name: 'Google Search', clicks: Math.floor(Math.random() * 3) + 1 },
        { name: 'Gaming Session', clicks: Math.floor(Math.random() * 8) + 2 },
        { name: 'File Navigation', clicks: Math.floor(Math.random() * 4) + 1 },
        { name: 'Web Browsing', clicks: Math.floor(Math.random() * 6) + 1 },
        { name: 'Email Check', clicks: Math.floor(Math.random() * 3) + 1 }
      ];

      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      const newClicks = randomActivity.clicks;
      
      setBackgroundClicks(prev => prev + newClicks);
      setClicks(prev => prev + newClicks);
      
      // Random interval between 3-8 seconds
      setTimeout(simulateDigitalLife, Math.random() * 5000 + 3000);
    };

    const timeout = setTimeout(simulateDigitalLife, 2000);
    return () => clearTimeout(timeout);
  }, [digitalLifeMode, isGameActive]);

  // Global click detection when tab is active
  useEffect(() => {
    if (!isGameActive) return;

    const handleGlobalClick = (e: MouseEvent) => {
      if (digitalLifeMode) {
        backgroundClickRef.current++;
        setClicks(prev => prev + 1);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [isGameActive, digitalLifeMode]);

  // Update current player rank
  useEffect(() => {
    if (isGameActive && clicks > 0) {
      const rank = leaderboard.filter(player => player.clicks > clicks).length + 1;
      setCurrentRank(rank);
    }
  }, [clicks, leaderboard, isGameActive]);

  const handleClick = () => {
    if (!isGameActive) return;
    
    setClicks(prev => prev + 1);
    setClickAnimation(true);
    setTimeout(() => setClickAnimation(false), 100);
  };

  const startGame = () => {
    if (playerName.trim()) {
      setIsGameActive(true);
      setClicks(0);
      setBackgroundClicks(0);
      setSessionStartTime(new Date());
    }
  };

  const toggleDigitalLifeMode = () => {
    setDigitalLifeMode(!digitalLifeMode);
  };

  const resetGame = () => {
    setIsGameActive(false);
    setClicks(0);
    setPlayerName('');
    setCurrentRank(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-secondary rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            CLICKER ARENA
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
            A ruthless, no-mercy arena that awakens every single day. Your only weapon? That finger of yours. 
            Every click is a strike. Every tap is a battle cry. The clock is your greatest enemy.
          </p>
          
          {/* Countdown Timer */}
          <Card className="inline-block p-6 mb-6 bg-gradient-to-r from-destructive/10 to-primary/10 border-primary/20">
            <div className="flex items-center gap-4">
              <Timer className="w-8 h-8 text-primary animate-pulse" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">TIME UNTIL RESET</p>
                <p className="text-3xl font-mono font-bold text-primary">{timeToMidnight}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2">
            {!isGameActive ? (
              <Card className="p-8 text-center bg-gradient-to-br from-card to-primary/5 border-primary/20">
                <h2 className="text-3xl font-bold mb-6 text-primary">Enter the Arena</h2>
                <div className="max-w-md mx-auto space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your warrior name..."
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full p-4 rounded-lg border border-primary/20 bg-background/50 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
                    onKeyPress={(e) => e.key === 'Enter' && startGame()}
                  />
                  <Button 
                    onClick={startGame}
                    disabled={!playerName.trim()}
                    size="lg"
                    className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25"
                  >
                    <Zap className="w-6 h-6 mr-2" />
                    BEGIN THE BATTLE
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="p-4 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                    <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-primary">{clicks}</p>
                    <p className="text-sm text-muted-foreground">Clicks</p>
                  </Card>
                  <Card className="p-4 text-center bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <p className="text-2xl font-bold text-accent">#{currentRank}</p>
                    <p className="text-sm text-muted-foreground">Rank</p>
                  </Card>
                  <Card className="p-4 text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                    <Zap className="w-8 h-8 mx-auto mb-2 text-secondary-foreground" />
                    <p className="text-2xl font-bold">{Math.round((clicks / (Date.now() / 1000)) * 60) || 0}</p>
                    <p className="text-sm text-muted-foreground">CPM</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Timer className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-2xl font-bold">{timeToMidnight.split(':')[0]}h</p>
                    <p className="text-sm text-muted-foreground">Left</p>
                  </Card>
                </div>

                {/* Digital Life Mode Toggle */}
                <Card className="p-4 mb-6 bg-gradient-to-r from-destructive/5 to-orange-500/5 border-orange-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-6 h-6 text-orange-500" />
                      <div>
                        <h3 className="font-bold text-orange-500">DIGITAL LIFE MODE</h3>
                        <p className="text-sm text-muted-foreground">
                          {digitalLifeMode 
                            ? "Your entire digital existence is being tracked" 
                            : "Only manual clicks count"
                          }
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={toggleDigitalLifeMode}
                      variant={digitalLifeMode ? "destructive" : "outline"}
                      size="sm"
                      className={digitalLifeMode ? "animate-pulse" : ""}
                    >
                      {digitalLifeMode ? (
                        <>
                          <Wifi className="w-4 h-4 mr-2" />
                          CONNECTED
                        </>
                      ) : (
                        <>
                          <Activity className="w-4 h-4 mr-2" />
                          ACTIVATE
                        </>
                      )}
                    </Button>
                  </div>
                  {digitalLifeMode && (
                    <div className="mt-3 text-xs text-orange-400">
                      🔥 Background clicks: {backgroundClicks} | Every action on this page counts!
                    </div>
                  )}
                </Card>

                {/* Click Button */}
                <div className="text-center">
                  <Button
                    onClick={handleClick}
                    size="lg"
                    className={`w-64 h-64 rounded-full text-2xl font-bold bg-gradient-to-br from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 shadow-2xl shadow-primary/30 transition-all duration-100 ${
                      clickAnimation ? 'scale-95 shadow-3xl shadow-primary/50' : 'scale-100 hover:scale-105'
                    } ${digitalLifeMode ? 'ring-4 ring-orange-500/50 ring-pulse' : ''}`}
                  >
                    <div className="text-center">
                      <Zap className="w-12 h-12 mx-auto mb-2" />
                      {digitalLifeMode ? 'DOMINATE!' : 'CLICK!'}
                    </div>
                  </Button>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {digitalLifeMode 
                      ? `Every move you make is a weapon, ${playerName}!`
                      : `Click as fast as you can, warrior ${playerName}!`
                    }
                  </p>
                  {digitalLifeMode && (
                    <p className="mt-2 text-sm text-orange-400 animate-pulse">
                      🌐 Your digital life is now part of the battle
                    </p>
                  )}
                </div>

                <div className="text-center">
                  <Button onClick={resetGame} variant="outline" size="lg">
                    Retreat from Battle
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Leaderboard */}
          <div>
            <Card className="p-6 bg-gradient-to-br from-card to-accent/5 border-accent/20">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                <Crown className="w-6 h-6 text-yellow-500" />
                TODAY'S RULERS
              </h3>
              <div className="space-y-3">
                {leaderboard.map((player, index) => (
                  <div 
                    key={player.id} 
                    className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                      index === 0 
                        ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 border border-yellow-500/30' 
                        : index === 1
                        ? 'bg-gradient-to-r from-gray-400/20 to-gray-300/10 border border-gray-400/30'
                        : index === 2
                        ? 'bg-gradient-to-r from-amber-600/20 to-amber-500/10 border border-amber-600/30'
                        : 'bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant={index < 3 ? 'default' : 'secondary'} className="w-8 h-8 rounded-full flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <div>
                        <p className="font-bold">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.clicks.toLocaleString()} clicks</p>
                      </div>
                    </div>
                    {index === 0 && <Crown className="w-5 h-5 text-yellow-500" />}
                  </div>
                ))}
                
                {isGameActive && currentRank > 5 && (
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">
                          {currentRank}
                        </Badge>
                        <div>
                          <p className="font-bold text-primary">{playerName} (You)</p>
                          <p className="text-sm text-muted-foreground">{clicks.toLocaleString()} clicks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickerArena;