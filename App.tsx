import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import CreateHabitScreen from './screens/CreateHabitScreen';
import HabitDetailScreen from './screens/HabitDetailScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';

const AppContent = () => {
  const location = useLocation();
  const isWelcomeScreen = location.pathname === '/';
  
  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-white shadow-2xl overflow-hidden relative">
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/create-habit" element={<CreateHabitScreen />} />
        <Route path="/habit-detail" element={<HabitDetailScreen />} />
        <Route path="/achievements" element={<AchievementsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
      {!isWelcomeScreen && <BottomNav />}
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;