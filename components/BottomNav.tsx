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
            className={`flex flex-col items-center gap-1 p-2 w-14 group transition-colors ${active ? 'text-brand-primary' : 'text-slate-400 hover:text-slate-600 dark:hover:text-white'}`}
        >
            <span className={`material-symbols-outlined text-[26px] group-hover:scale-110 transition-transform duration-300 ${filled ? 'filled' : ''} ${active ? 'drop-shadow-sm' : ''}`}>
                {icon}
            </span>
            <span className="text-[10px] font-semibold tracking-wide">{label}</span>
        </button>
    );
};

const FloatingAddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div className="-mt-12 relative z-20">
        <button 
            onClick={onClick}
            className="size-16 rounded-full bg-primary text-white shadow-[0_8px_20px_rgba(19,236,91,0.4)] flex items-center justify-center hover:scale-105 transition-transform active:scale-95 border-[6px] border-white dark:border-background-dark ring-1 ring-slate-100 dark:ring-white/5"
        >
            <span className="material-symbols-outlined text-[32px] font-bold">add</span>
        </button>
    </div>
);

const BottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;

    if (path === '/') return null;

    // Use pb-safe (defined in index.html) or explicit padding calc for safe areas
    return (
        <nav className="absolute bottom-0 w-full left-0 right-0 bg-white/90 dark:bg-card-dark/95 backdrop-blur-xl border-t border-slate-100 dark:border-white/5 pb-[env(safe-area-inset-bottom,20px)] pt-2 px-6 shadow-[0_-5px_20px_rgba(0,0,0,0.03)] z-50 flex justify-between items-end h-[calc(60px+env(safe-area-inset-bottom,20px))]">
            <NavButton to="/dashboard" icon="dashboard" label="Inicio" active={path === '/dashboard'} filled={path === '/dashboard'} />
            <NavButton to="/habit-detail" icon="task_alt" label="Hábitos" active={path === '/habit-detail'} />
            
            <FloatingAddButton onClick={() => navigate('/create-habit')} />
            
            <NavButton to="/achievements" icon="trophy" label="Logros" active={path === '/achievements'} />
            <NavButton to="/profile" icon="person" label="Perfil" active={path === '/profile'} />
        </nav>
    );
};

export default BottomNav;