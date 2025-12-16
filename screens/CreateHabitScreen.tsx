import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateHabitScreen = () => {
    const navigate = useNavigate();
    
    // Form States
    const [identity, setIdentity] = useState('');
    const [selectedIdentityIcon, setSelectedIdentityIcon] = useState('fingerprint');
    const [habitName, setHabitName] = useState('');
    const [time, setTime] = useState('07:00');
    const [place, setPlace] = useState('');
    
    // Reminder States
    const [reminderEnabled, setReminderEnabled] = useState(false);
    const [selectedDays, setSelectedDays] = useState(['L', 'M', 'X', 'J', 'V']);

    const identityIcons = [
        'fingerprint', 'face', 'psychology', 'diamond', 'fitness_center', 
        'school', 'spa', 'work', 'palette', 'flight', 'local_fire_department', 
        'star', 'balance', 'eco', 'music_note'
    ];

    const days = [
        { id: 'L', label: 'L' },
        { id: 'M', label: 'M' },
        { id: 'X', label: 'M' },
        { id: 'J', label: 'J' },
        { id: 'V', label: 'V' },
        { id: 'S', label: 'S' },
        { id: 'D', label: 'D' },
    ];

    const toggleDay = (id: string) => {
        if (selectedDays.includes(id)) {
            setSelectedDays(selectedDays.filter(d => d !== id));
        } else {
            setSelectedDays([...selectedDays, id]);
        }
    };

    const handleCreate = () => {
        if (!habitName) return;

        const newHabit = {
            title: habitName,
            xp: '+20 XP',
            color: 'indigo', // Default color for custom habits
            icon: 'star',   // Default icon for custom habits
            done: false,
            time: time,
            streak: 0,
            identity: identity || null,
            identityIcon: identity ? selectedIdentityIcon : null,
            isMainIdentity: false
        };

        // Save to localStorage
        const existingHabits = JSON.parse(localStorage.getItem('datametas_habits') || '[]');
        localStorage.setItem('datametas_habits', JSON.stringify([...existingHabits, newHabit]));

        navigate('/dashboard');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark h-full flex flex-col relative">
            <div className="sticky top-0 z-50 flex items-center bg-white/95 dark:bg-[#112217]/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-transparent dark:border-[#326744]/30 transition-all duration-300">
                <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Nuevo Hábito</h2>
            </div>
            
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto pb-32 no-scrollbar">
                <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
                    <div className="h-1.5 w-8 rounded-full bg-brand-primary shadow-sm"></div>
                    <div className="h-1.5 w-2 rounded-full bg-brand-secondary/30"></div>
                    <div className="h-1.5 w-2 rounded-full bg-brand-accent/30"></div>
                </div>

                <div className="px-4 pb-2 pt-2">
                    <h2 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight text-left">Define tu identidad</h2>
                    <p className="text-slate-500 dark:text-[#92c9a4] text-sm mt-1 mb-4">Los cambios duraderos empiezan por quién eres, no solo por lo que haces.</p>
                </div>

                <div className="flex flex-col gap-6 px-4 py-2">
                    {/* Identity Section */}
                    <div className="flex flex-col flex-1 group gap-3">
                        <label className="flex flex-col gap-2">
                            <p className="text-slate-700 dark:text-white text-base font-medium leading-normal flex items-center gap-2">
                                <span className="flex items-center justify-center size-8 rounded-full bg-brand-secondary/10 text-brand-secondary">
                                    <span className="material-symbols-outlined text-xl">face</span>
                                </span>
                                ¿En quién te quieres convertir?
                            </p>
                            <input 
                                value={identity}
                                onChange={(e) => setIdentity(e.target.value)}
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-brand-secondary/30 border border-slate-200 dark:border-[#326744] bg-slate-50 dark:bg-[#193322] focus:border-brand-secondary focus:bg-white h-14 placeholder:text-slate-400 dark:placeholder:text-[#5a8065] p-[15px] text-base font-normal leading-normal transition-all" 
                                placeholder="Ej. Un corredor, un lector..."
                            />
                        </label>

                        {/* Identity Icon Selector */}
                        <div className="pl-1">
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Icono de Identidad</p>
                             <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 -ml-1 pl-1">
                                {identityIcons.map((icon) => (
                                    <button
                                        key={icon}
                                        onClick={() => setSelectedIdentityIcon(icon)}
                                        className={`flex-shrink-0 size-11 rounded-xl flex items-center justify-center transition-all border ${
                                            selectedIdentityIcon === icon 
                                            ? 'bg-brand-secondary text-white border-brand-secondary shadow-lg shadow-brand-secondary/25 scale-105' 
                                            : 'bg-white dark:bg-[#193322] border-slate-200 dark:border-[#326744] text-slate-400 hover:border-brand-secondary/50 hover:text-brand-secondary'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined text-xl">{icon}</span>
                                    </button>
                                ))}
                             </div>
                        </div>
                    </div>

                    <label className="flex flex-col flex-1 group">
                        <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2 flex items-center gap-2">
                            <span className="flex items-center justify-center size-8 rounded-full bg-brand-accent/10 text-brand-accent">
                                <span className="material-symbols-outlined text-xl">fitness_center</span>
                            </span>
                            ¿Cuál es el hábito?
                        </p>
                        <input 
                            value={habitName}
                            onChange={(e) => setHabitName(e.target.value)}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-brand-accent/30 border border-slate-200 dark:border-[#326744] bg-slate-50 dark:bg-[#193322] focus:border-brand-accent focus:bg-white h-14 placeholder:text-slate-400 dark:placeholder:text-[#5a8065] p-[15px] text-base font-normal leading-normal transition-all" 
                            placeholder="Ej. Correr 10 minutos"
                        />
                    </label>
                </div>

                <div className="h-px bg-slate-100 mx-4 my-6"></div>

                <div className="px-4 pb-2">
                    <h2 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight text-left mb-4 flex items-center gap-2">
                        <span className="flex items-center justify-center size-8 rounded-full bg-accent-purple/10 text-accent-purple">
                            <span className="material-symbols-outlined text-lg">event_note</span>
                        </span>
                        Intención de Implementación
                    </h2>
                    <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#326744] rounded-2xl p-5 shadow-sm ring-1 ring-slate-100 dark:ring-0">
                        <p className="text-slate-400 dark:text-[#92c9a4] text-xs mb-4 font-semibold uppercase tracking-wider flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">science</span>
                            La fórmula científica
                        </p>
                        <div className="flex flex-wrap items-center gap-2 text-lg leading-relaxed text-slate-900 dark:text-white font-medium">
                            <span className="text-slate-500">Yo haré</span>
                            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-semibold whitespace-nowrap max-w-[150px] truncate">
                                {habitName || '[mi hábito]'}
                            </span>
                            <span className="text-slate-500">a las</span>
                            <div className="relative group">
                                <input 
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="w-28 rounded-lg bg-slate-50 dark:bg-[#112217] border border-slate-200 dark:border-[#326744] text-slate-900 dark:text-white px-2 py-1.5 focus:ring-2 focus:ring-accent-purple/30 focus:border-accent-purple text-base font-semibold text-center" 
                                    type="time"
                                />
                            </div>
                            <span className="text-slate-500">en</span>
                            <input 
                                value={place}
                                onChange={(e) => setPlace(e.target.value)}
                                className="min-w-[140px] flex-1 rounded-lg bg-slate-50 dark:bg-[#112217] border border-slate-200 dark:border-[#326744] text-slate-900 dark:text-white px-3 py-1.5 placeholder:text-slate-400 dark:placeholder:text-[#5a8065] focus:ring-2 focus:ring-accent-orange/30 focus:border-accent-orange text-base font-semibold" 
                                placeholder="Lugar (ej. Cocina)" 
                                type="text"
                            />
                        </div>
                    </div>
                </div>

                {/* Smart Reminders Section */}
                <div className="px-4 pb-2 mt-6">
                     <h2 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight text-left mb-4 flex items-center gap-2">
                        <span className="flex items-center justify-center size-8 rounded-full bg-brand-primary/10 text-brand-primary">
                            <span className="material-symbols-outlined text-lg">notifications_active</span>
                        </span>
                        Recordatorios Inteligentes
                    </h2>
                    
                    <div className={`transition-all duration-300 border rounded-2xl p-5 shadow-sm overflow-hidden ${reminderEnabled ? 'bg-white border-brand-primary/30 ring-4 ring-brand-primary/5' : 'bg-slate-50 border-slate-200'}`}>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-slate-900 dark:text-slate-700">Activar Notificaciones</span>
                                <span className="text-xs text-slate-500">Recibe avisos para mantener tu racha</span>
                            </div>
                             {/* Custom Switch Toggle */}
                            <button 
                                onClick={() => setReminderEnabled(!reminderEnabled)}
                                className={`w-12 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${reminderEnabled ? 'bg-brand-primary' : 'bg-slate-300'}`}
                            >
                                <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${reminderEnabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
                            </button>
                        </div>

                        {reminderEnabled && (
                            <div className="animate-in fade-in slide-in-from-top-4 duration-300 pt-4 border-t border-slate-100 mt-4 space-y-4">
                                {/* Days Selection */}
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Frecuencia</p>
                                    <div className="flex justify-between gap-2">
                                        {days.map((day) => (
                                            <button 
                                                key={day.id}
                                                onClick={() => toggleDay(day.id)}
                                                className={`flex-1 aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                                                    selectedDays.includes(day.id) 
                                                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 scale-105' 
                                                    : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                                }`}
                                            >
                                                {day.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Mensaje de Poder</p>
                                    <div className="relative">
                                        <input 
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-10 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                                            placeholder="¡Es hora de construir tu identidad!"
                                            defaultValue={`¡Es hora de ser ${identity || 'mejor'}!`}
                                        />
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">edit_note</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Button Area with Safe Area Padding */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white via-white to-transparent pt-10 px-4 pb-[calc(1rem+env(safe-area-inset-bottom,20px))] z-40">
                <button 
                    onClick={handleCreate}
                    className={`w-full h-14 bg-gradient-to-r from-brand-primary to-brand-primary/90 hover:to-brand-primary active:scale-[0.98] transition-all rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 ring-1 ring-white/20 ${!habitName ? 'opacity-75 grayscale' : ''}`}
                >
                    <span className="text-white text-lg font-bold tracking-wide">Crear Hábito</span>
                    <span className="material-symbols-outlined text-white">arrow_forward</span>
                </button>
            </div>
        </div>
    );
};

export default CreateHabitScreen;