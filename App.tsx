import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import CreateHabitScreen from './screens/CreateHabitScreen';
import CreateGoalScreen from './screens/CreateGoalScreen';
import HabitDetailScreen from './screens/HabitDetailScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';

const AppContent = () => {
  const location = useLocation();
  const isWelcomeScreen = location.pathname === '/';
  
  return (
    // Changed min-h-screen to h-[100dvh] to prevent address bar issues on mobile
    <div className="w-full max-w-md mx-auto h-[100dvh] bg-white shadow-2xl overflow-hidden relative flex flex-col">
      <div className="flex-1 overflow-hidden w-full relative">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/create-habit" element={<CreateHabitScreen />} />
          <Route path="/create-goal" element={<CreateGoalScreen />} />
          <Route path="/habit-detail" element={<HabitDetailScreen />} />
          <Route path="/achievements" element={<AchievementsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
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