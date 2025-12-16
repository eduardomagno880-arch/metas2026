import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavButtonProps {
    to: string;
    icon: string;
    label: string;
    active?: boolean;
    filled?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ to, icon, label, active, filled }) => {
    const navigate = useNavigate();
    
    return (
        <button 
            onClick={() => navigate(to)}
            className={`flex flex-col items-center gap-1 p-2 w-12 group transition-colors ${active ? 'text-primary' : 'text-gray-400 hover:text-slate-900 dark:hover:text-white'}`}
        >
            <span className={`material-symbols-outlined text-2xl group-hover:scale-110 transition-transform ${filled ? 'filled' : ''}`}>
                {icon}
            </span>
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    );
};

const FloatingAddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div className="-mt-8 relative z-20">
        <button 
            onClick={onClick}
            className="size-14 rounded-full bg-primary text-white shadow-glow flex items-center justify-center hover:scale-105 transition-transform active:scale-95 border-4 border-white dark:border-background-dark"
        >
            <span className="material-symbols-outlined text-3xl font-bold">add</span>
        </button>
    </div>
);

const BottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;

    // We don't render bottom nav on create-habit screen to give more space, or if needed we can.
    // Based on the example, it's global except welcome.
    // However, create habit often takes full screen or uses its own actions.
    // Let's hide it on CreateHabitScreen as well to match typical UX patterns if desired, 
    // but the original code only hid it on '/'.
    
    if (path === '/') return null;
    // Optional: if (path === '/create-habit') return null;

    return (
        <nav className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 bg-white/95 dark:bg-card-dark/95 backdrop-blur-xl border-t border-slate-100 dark:border-white/5 pb-safe-area pt-2 px-6 shadow-[0_-5px_15px_rgba(0,0,0,0.02)] z-50 flex justify-between items-center">
            <NavButton to="/dashboard" icon="dashboard" label="Home" active={path === '/dashboard'} filled={path === '/dashboard'} />
            <NavButton to="/habit-detail" icon="task_alt" label="Habits" active={path === '/habit-detail'} />
            
            <FloatingAddButton onClick={() => navigate('/create-habit')} />
            
            <NavButton to="/achievements" icon="trophy" label="Logros" active={path === '/achievements'} />
            <NavButton to="/profile" icon="person" label="Perfil" active={path === '/profile'} />
        </nav>
    );
};

export default BottomNav;