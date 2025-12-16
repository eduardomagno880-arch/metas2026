import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGoalScreen = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [reward, setReward] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('flag');

    const icons = ['flag', 'star', 'trophy', 'mountain_flag', 'rocket_launch'];

    const handleCreate = () => {
        if (!title) return;

        const newGoal = {
            id: Date.now(),
            title: title,
            reward: reward || 'Satisfacción Personal',
            status: 'active',
            icon: selectedIcon
        };

        const existingGoals = JSON.parse(localStorage.getItem('datametas_goals') || '[]');
        localStorage.setItem('datametas_goals', JSON.stringify([...existingGoals, newGoal]));
        
        navigate('/dashboard');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col pb-10">
            {/* Header */}
            <div className="sticky top-0 z-50 flex items-center bg-white/95 dark:bg-[#112217]/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-transparent dark:border-[#326744]/30">
                <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Nueva Meta</h2>
            </div>

            <div className="flex flex-col gap-6 px-6 pt-6">
                {/* Title Input */}
                <div>
                    <label className="block text-slate-700 dark:text-white text-base font-bold mb-2">
                        ¿Cuál es tu próximo gran hito?
                    </label>
                    <input 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-[#193322] border border-slate-200 dark:border-[#326744] rounded-2xl px-5 py-4 text-lg font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary"
                        placeholder="Ej. Correr 10km"
                        autoFocus
                    />
                </div>

                {/* Reward Input */}
                <div>
                    <label className="block text-slate-700 dark:text-white text-base font-bold mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-brand-secondary">redeem</span>
                        Recompensa (Opcional)
                    </label>
                    <input 
                        value={reward}
                        onChange={(e) => setReward(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-[#193322] border border-slate-200 dark:border-[#326744] rounded-2xl px-5 py-4 text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary"
                        placeholder="Ej. Comprar zapatillas nuevas"
                    />
                </div>

                {/* Icon Selection */}
                <div>
                    <label className="block text-slate-700 dark:text-white text-base font-bold mb-3">
                        Elige un icono
                    </label>
                    <div className="flex gap-3 justify-between">
                        {icons.map((icon) => (
                            <button
                                key={icon}
                                onClick={() => setSelectedIcon(icon)}
                                className={`flex-1 aspect-square rounded-xl flex items-center justify-center transition-all ${
                                    selectedIcon === icon 
                                    ? 'bg-brand-secondary text-white shadow-lg shadow-brand-secondary/30 scale-105' 
                                    : 'bg-slate-50 border border-slate-200 text-slate-400 hover:bg-slate-100'
                                }`}
                            >
                                <span className="material-symbols-outlined text-2xl">{icon}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Preview Card */}
                <div className="mt-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-soft opacity-80">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 text-center">Vista Previa</p>
                    <div className="flex items-center gap-4">
                        <div className="flex shrink-0 items-center justify-center size-14 rounded-full border-4 border-slate-50 bg-brand-secondary text-white shadow-sm">
                            <span className="material-symbols-outlined text-2xl">{selectedIcon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-base truncate text-slate-900">{title || 'Título de la Meta'}</h4>
                            <p className="text-xs font-medium text-brand-secondary flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm filled">redeem</span>
                                {reward || 'Recompensa'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1"></div>

            <div className="p-4 bg-gradient-to-t from-white via-white to-transparent pt-10">
                <button 
                    onClick={handleCreate}
                    disabled={!title}
                    className={`w-full h-14 rounded-2xl flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/20 transition-all active:scale-[0.98] ${
                        title 
                        ? 'bg-gradient-to-r from-brand-secondary to-pink-600 text-white shadow-brand-secondary/25 hover:to-brand-secondary' 
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                >
                    <span className="text-lg font-bold tracking-wide">Guardar Meta</span>
                    <span className="material-symbols-outlined">check</span>
                </button>
            </div>
        </div>
    );
};

export default CreateGoalScreen;