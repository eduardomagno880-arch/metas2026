import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardScreen = () => {
    const navigate = useNavigate();

    const activeIdentity = {
        name: "Atleta de Élite",
        level: 5,
        xp: 850,
        maxXp: 1000,
        linkedHabits: 2
    };

    // XP Bar Animation State
    const [xpProgress, setXpProgress] = useState(0);

    // Celebration State for Habit Completion
    const [celebratingHabitIndex, setCelebratingHabitIndex] = useState<number | null>(null);

    // FAB Visibility State (Smart Hide on Scroll)
    const [showFab, setShowFab] = useState(true);
    const lastScrollY = useRef(0);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        const currentScrollY = e.currentTarget.scrollTop;
        
        // Threshold to avoid jitter
        if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

        if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setShowFab(false);
        } else {
            setShowFab(true);
        }
        lastScrollY.current = currentScrollY;
    };

    useEffect(() => {
        // Animate progress bar on mount
        const timer = setTimeout(() => {
            setXpProgress((activeIdentity.xp / activeIdentity.maxXp) * 100);
        }, 100);
        return () => clearTimeout(timer);
    }, [activeIdentity.xp, activeIdentity.maxXp]);

    // Chart Data
    const weeklyData = [40, 55, 45, 70, 58, 85, 80];
    const maxVal = 100; 
    // Generate points for SVG: "x,y x,y ..." where x is 0-100 and y is 0-100 (inverted)
    const chartPoints = weeklyData.map((val, i) => {
        const x = (i / (weeklyData.length - 1)) * 100;
        const y = 100 - ((val / maxVal) * 80); // Leave some headroom
        return `${x},${y}`;
    }).join(' ');
    const areaPath = `0,100 ${chartPoints} 100,100`;

    // Milestones State: Initialize from localStorage + Defaults
    const [milestones, setMilestones] = useState(() => {
        const defaultMilestones = [
            { 
                id: 1, 
                title: 'Primer 5K Sin Parar', 
                reward: 'Desbloquea: Zapatillas Pro', 
                status: 'completed', 
                icon: 'directions_run' 
            },
            { 
                id: 2, 
                title: 'Rutina Mañana (21 Días)', 
                reward: '+500 XP Identidad', 
                status: 'active', 
                icon: 'wb_twilight' 
            },
            { 
                id: 3, 
                title: 'Correr Media Maratón', 
                reward: 'Insignia: Leyenda', 
                status: 'locked', 
                icon: 'military_tech' 
            },
        ];
        const savedGoals = JSON.parse(localStorage.getItem('datametas_goals') || '[]');
        return [...defaultMilestones, ...savedGoals];
    });

    const toggleMilestone = (id: number) => {
        setMilestones(prev => prev.map(m => {
            if (m.id === id && m.status !== 'locked') {
                return { ...m, status: m.status === 'completed' ? 'active' : 'completed' };
            }
            return m;
        }));
    };

    // Habits State: Initialize from localStorage + Defaults
    const [habits, setHabits] = useState(() => {
        const defaultHabits = [
            { 
                title: 'Entrenamiento Intervalos', 
                xp: '+50 XP', 
                color: 'rose', 
                icon: 'sprint', 
                done: true, 
                time: '06:00', 
                streak: 3,
                identity: 'Atleta de Élite',
                identityIcon: 'trophy',
                isMainIdentity: true
            },
            { 
                title: 'Hidratación 3L', 
                xp: '+20 XP', 
                color: 'blue', 
                icon: 'water_drop', 
                done: true, 
                time: 'Todo el día', 
                streak: 15,
                identity: 'Atleta de Élite',
                identityIcon: 'trophy',
                isMainIdentity: true
            },
            { 
                title: 'Leer "Atomic Habits"', 
                xp: '+35 XP', 
                color: 'amber', 
                icon: 'menu_book', 
                done: false, 
                time: '21:00', 
                streak: 12,
                identity: 'Intelectual',
                identityIcon: 'school',
                isMainIdentity: false
            },
            { 
                title: 'Meditación', 
                xp: '+15 XP', 
                color: 'teal', 
                icon: 'self_improvement', 
                done: false, 
                time: '22:30', 
                streak: 0,
                identity: null, // Unlinked
                isMainIdentity: false
            }
        ];
        const savedHabits = JSON.parse(localStorage.getItem('datametas_habits') || '[]');
        return [...defaultHabits, ...savedHabits];
    });

    const toggleHabit = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        const newHabits = [...habits];
        const wasDone = newHabits[index].done;
        newHabits[index].done = !wasDone;
        
        // Simple visual streak update logic
        if (!wasDone) {
            newHabits[index].streak += 1;
            // Trigger celebration
            setCelebratingHabitIndex(index);
            // Clear celebration after 2 seconds
            setTimeout(() => {
                setCelebratingHabitIndex(prev => prev === index ? null : prev);
            }, 2000);
        } else {
            newHabits[index].streak = Math.max(0, newHabits[index].streak - 1);
            setCelebratingHabitIndex(null);
        }

        setHabits(newHabits);
        localStorage.setItem('datametas_habits', JSON.stringify(newHabits));
    };

    const handleLinkIdentity = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        const newHabits = [...habits];
        // Simulating linking to a relevant identity
        newHabits[index].identity = 'Maestro Zen';
        newHabits[index].identityIcon = 'spa';
        newHabits[index].isMainIdentity = false;
        setHabits(newHabits);
    };

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col bg-surface-off overflow-x-hidden pb-24 font-display">
            {/* Header */}
            <header className="flex items-center px-6 pt-6 pb-4 justify-between sticky top-0 z-30 bg-surface-off/90 backdrop-blur-md">
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Oct 24 • Tuesday</span>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">
                        Hola, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Atleta</span>
                    </h2>
                </div>
                <div onClick={() => navigate('/profile')} className="relative group cursor-pointer transition-transform hover:scale-105 active:scale-95">
                    <div className="flex items-center justify-center p-0.5 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary shadow-lg shadow-brand-primary/20">
                        <div className="bg-white p-0.5 rounded-full">
                             <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuj1XGuxvi5KQbpep-vjnh829ESZ-DS9GicKy5h3qYOWmFpxb6y3766gxuOGzZDsmSEPBmoEduEAZK7ZS49WfyNA3YqoptF4vKiMzDDBHZp0FIchgNnjIyBUpiLcMW-EUk0YlyGiTNB8RFV7dz8olCPfnEcPLBpft4zTSZ5NXSTo72hcDvxNl8eUzJSM5T24MB45Js4vGVFRxixbYmHUm1GJdkXujF4RZWTCD1gcMFnrPCgyP1PZpGwtOCohb5eS70IP3jOZyIE_w")'}}></div>
                        </div>
                    </div>
                    <div className="absolute -bottom-1 -right-2 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md border-2 border-surface-off shadow-sm">LVL 5</div>
                </div>
            </header>

            <main 
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto pb-24 no-scrollbar px-6 flex flex-col gap-6"
            >
                
                {/* Identity Evolution Card */}
                <section className="relative w-full rounded-3xl p-6 overflow-hidden shadow-xl shadow-brand-primary/20 group cursor-default">
                    {/* Backgrounds */}
                    <div className="absolute inset-0 bg-slate-900 z-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-indigo-600 to-brand-secondary opacity-90 z-0"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 blur-[80px] rounded-full pointer-events-none -mr-20 -mt-20 mix-blend-overlay"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-accent opacity-30 blur-[60px] rounded-full pointer-events-none -ml-10 -mb-10"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-5">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="bg-white/20 backdrop-blur-md rounded-full p-1">
                                        <span className="material-symbols-outlined text-yellow-300 text-base filled block">trophy</span>
                                    </div>
                                    <span className="text-indigo-100 text-xs font-bold uppercase tracking-wider">Identidad Principal</span>
                                </div>
                                <h3 className="text-white text-2xl font-black tracking-tight leading-none">{activeIdentity.name}</h3>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2 flex flex-col items-center min-w-[3.5rem]">
                                <span className="text-[9px] font-bold text-indigo-200 uppercase tracking-wider mb-0.5">Nivel</span>
                                <span className="text-2xl font-black text-white leading-none tracking-tight">0{activeIdentity.level}</span>
                            </div>
                        </div>

                        {/* XP Progress */}
                        <div className="flex flex-col gap-2.5">
                            <div className="flex justify-between text-xs font-bold text-indigo-100/90 tracking-wide">
                                <span>Progreso</span>
                                <span>{activeIdentity.xp} / {activeIdentity.maxXp} XP</span>
                            </div>
                            <div className="h-5 w-full bg-slate-900/40 rounded-full p-1 backdrop-blur-sm border border-white/10 shadow-inner">
                                <div 
                                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.5)] relative overflow-hidden transition-all duration-1000 ease-out"
                                    style={{ width: `${xpProgress}%` }}
                                >
                                     <div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="text-indigo-200 text-xs font-medium flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-sm">link</span>
                                    <span>{activeIdentity.linkedHabits} hábitos vinculados</span>
                                </p>
                            </div>
                        </div>

                        {/* Historical Progress Chart (SVG Area Chart) */}
                        <div className="mt-1 pt-4 border-t border-white/10">
                             <div className="flex justify-between items-end mb-3">
                                <span className="text-[10px] font-bold text-indigo-200 uppercase tracking-wider">Trayectoria</span>
                                <span className="text-[10px] font-bold text-emerald-300 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs filled">trending_up</span>
                                    +120 XP
                                </span>
                             </div>
                             
                             <div className="h-20 w-full relative">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <polygon points={areaPath} fill="url(#chartGradient)" />
                                    <polyline 
                                        points={chartPoints} 
                                        fill="none" 
                                        stroke="white" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        vectorEffect="non-scaling-stroke" 
                                        className="drop-shadow-md opacity-90"
                                    />
                                </svg>

                                {/* Interactive Data Points */}
                                <div className="absolute inset-0 flex justify-between items-end z-20">
                                    {weeklyData.map((val, i) => (
                                        <div key={i} className="relative flex flex-col items-center group/point h-full justify-end">
                                            {/* Hitbox */}
                                            <div className="absolute bottom-0 w-8 h-full bg-transparent"></div>
                                            
                                            {/* Tooltip */}
                                            <div className="absolute -top-4 opacity-0 group-hover/point:opacity-100 transition-all duration-200 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-lg pointer-events-none transform translate-y-2 group-hover/point:translate-y-0">
                                                {val} XP
                                            </div>

                                            {/* Point Dot */}
                                            <div 
                                                className="w-2 h-2 rounded-full bg-white transition-all duration-300 opacity-0 group-hover/point:opacity-100 group-hover/point:scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                                style={{ marginBottom: `${(val / maxVal) * 80}%`, transform: `translateY(4px)` }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                             </div>

                             <div className="flex justify-between mt-2 px-1">
                                {['L','M','X','J','V','S','D'].map((d, i) => (
                                    <span key={i} className="text-[9px] font-bold text-indigo-200/60 w-4 text-center">{d}</span>
                                ))}
                             </div>
                        </div>
                    </div>
                </section>

                {/* Stats Row */}
                <section className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3 items-start hover:-translate-y-1 transition-transform duration-300">
                        <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-500 ring-4 ring-orange-50/50">
                            <span className="material-symbols-outlined text-2xl filled">local_fire_department</span>
                        </div>
                        <div>
                            <span className="text-3xl font-black text-slate-900 block mb-0.5">12</span>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Días en Racha</p>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3 items-start hover:-translate-y-1 transition-transform duration-300">
                        <div className="p-2.5 rounded-2xl bg-brand-accent/10 text-brand-accent ring-4 ring-brand-accent/5">
                            <span className="material-symbols-outlined text-2xl filled">diamond</span>
                        </div>
                        <div>
                            <span className="text-3xl font-black text-slate-900 block mb-0.5">94%</span>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Consistencia</p>
                        </div>
                    </div>
                </section>

                {/* Daily System (Quests) */}
                <section>
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            Sistema Diario
                            <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-glow">{habits.length}</span>
                        </h3>
                        <button className="text-slate-400 text-xs font-bold hover:text-brand-primary transition-colors flex items-center gap-1">
                            Ver Todo <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-3">
                        {habits.map((habit, i) => {
                            const isCelebrating = celebratingHabitIndex === i;
                            
                            return (
                                <div key={i} onClick={() => navigate('/habit-detail')} className={`relative overflow-hidden group flex flex-col bg-white p-4 rounded-2xl border transition-all duration-300 active:scale-[0.98] cursor-pointer ${habit.done ? 'border-slate-100 opacity-75' : 'border-slate-100 shadow-soft hover:shadow-lg hover:border-brand-primary/20 hover:-translate-y-0.5'}`}>
                                    
                                    <div className="flex items-center gap-4">
                                        {/* Icon Box */}
                                        <div className={`flex shrink-0 items-center justify-center size-14 rounded-2xl transition-all duration-300 ${habit.done ? 'bg-slate-100 text-slate-400' : `bg-${habit.color}-50 text-${habit.color}-500 shadow-sm`} ${isCelebrating ? 'scale-110 rotate-3' : 'group-hover:scale-110'}`}>
                                            <span className="material-symbols-outlined text-2xl filled">{habit.icon}</span>
                                        </div>
                                        
                                        <div className="flex-1 min-w-0 py-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className={`font-bold text-base truncate leading-tight ${habit.done ? 'text-slate-500 line-through decoration-2 decoration-slate-300' : 'text-slate-900'}`}>{habit.title}</h4>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {/* Streak Badge - Animated on Celebration */}
                                                <span className={`inline-flex items-center gap-0.5 text-[10px] font-black uppercase tracking-wide px-1.5 py-0.5 rounded border transition-all duration-500 ${isCelebrating ? 'scale-125 bg-yellow-100 text-yellow-600 border-yellow-300 shadow-[0_0_10px_rgba(234,179,8,0.4)]' : (habit.done ? 'text-slate-400 bg-slate-50 border-slate-100' : 'text-orange-500 bg-orange-50 border-orange-100')}`}>
                                                    <span className={`material-symbols-outlined text-[10px] filled ${isCelebrating ? 'animate-bounce' : ''}`}>local_fire_department</span>
                                                    {habit.streak} días
                                                </span>
                                                
                                                <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                                                    {habit.time}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Checkbox / Action */}
                                        <div 
                                            onClick={(e) => toggleHabit(i, e)}
                                            className={`relative size-8 shrink-0 rounded-full border-[3px] flex items-center justify-center transition-all duration-300 cursor-pointer ${habit.done ? 'bg-green-500 border-green-500 rotate-0' : 'border-slate-200 bg-slate-50 rotate-90 group-hover:border-brand-primary group-hover:rotate-0'}`}
                                        >
                                            {habit.done ? (
                                                <span className="material-symbols-outlined text-white text-lg font-bold">check</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-slate-300 text-lg group-hover:text-brand-primary transition-colors">circle</span>
                                            )}
                                            
                                            {/* Celebration Particles */}
                                            {isCelebrating && (
                                                <div className="absolute inset-0 pointer-events-none">
                                                    <div className="absolute top-0 right-0 w-full h-full rounded-full border-4 border-yellow-400 animate-[ping_0.6s_ease-out_forwards]"></div>
                                                    {/* Simple Confetti positioned relative to checkbox */}
                                                    <div className="absolute -top-6 -right-4 text-xl animate-[bounce_1s_infinite]">🎉</div>
                                                    <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-brand-primary rounded-full animate-ping"></div>
                                                    <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping delay-75"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Identity Association Badge (The "Visual Connection") */}
                                    <div className="mt-3 pt-3 border-t border-slate-50 flex items-center justify-between">
                                        {habit.identity ? (
                                            <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${habit.isMainIdentity ? 'bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/10' : 'bg-slate-50 border border-slate-100'}`}>
                                                <span className={`material-symbols-outlined text-xs ${habit.isMainIdentity ? 'text-brand-primary filled' : 'text-slate-400'}`}>{habit.identityIcon}</span>
                                                <span className={`text-[10px] font-bold uppercase tracking-wide ${habit.isMainIdentity ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary' : 'text-slate-500'}`}>
                                                    {habit.identity}
                                                </span>
                                            </div>
                                        ) : (
                                            <button 
                                                onClick={(e) => handleLinkIdentity(i, e)}
                                                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-dashed border-slate-300 text-slate-500 hover:text-brand-primary hover:border-brand-primary hover:bg-brand-primary/5 transition-all group/link"
                                            >
                                                <span className="material-symbols-outlined text-sm group-hover/link:scale-110 transition-transform">fingerprint</span>
                                                <span className="text-[10px] font-bold uppercase tracking-wide">Vincular Identidad</span>
                                            </button>
                                        )}

                                        {habit.isMainIdentity && !habit.done && (
                                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[10px] filled">trending_up</span>
                                                Impacto Alto
                                            </span>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Hitos Clave Section */}
                <section>
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            Hitos de Transformación
                        </h3>
                        <button 
                            onClick={() => navigate('/create-goal')}
                            className="text-brand-primary text-xs font-bold hover:text-brand-secondary transition-colors flex items-center gap-1 bg-brand-primary/5 px-2 py-1 rounded-lg border border-brand-primary/10"
                        >
                            <span className="material-symbols-outlined text-sm font-bold">add</span>
                            Añadir
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 relative">
                        {/* Timeline Connector Line */}
                        <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-200 z-0"></div>

                        {milestones.map((milestone) => {
                            const isCompleted = milestone.status === 'completed';
                            const isActive = milestone.status === 'active';
                            const isLocked = milestone.status === 'locked';

                            return (
                                <div 
                                    key={milestone.id} 
                                    onClick={() => !isLocked && toggleMilestone(milestone.id)}
                                    className={`relative z-10 flex items-center gap-4 bg-white p-4 rounded-2xl border transition-all duration-300 ${isActive ? 'border-brand-primary ring-1 ring-brand-primary/20 shadow-md scale-[1.01]' : isCompleted ? 'border-slate-100 opacity-80' : 'border-slate-100 opacity-60 grayscale'} ${!isLocked ? 'cursor-pointer active:scale-[0.98]' : 'cursor-not-allowed'}`}
                                >
                                    {/* Icon Indicator */}
                                    <div className={`flex shrink-0 items-center justify-center size-14 rounded-full border-4 border-white shadow-sm z-10 transition-colors duration-300 ${isCompleted ? 'bg-green-500 text-white' : isActive ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-300'}`}>
                                        <span className="material-symbols-outlined text-2xl">{isCompleted ? 'check' : isLocked ? 'lock' : milestone.icon}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className={`font-bold text-base truncate ${isCompleted ? 'text-slate-500 line-through decoration-slate-300' : 'text-slate-900'}`}>{milestone.title}</h4>
                                            {isCompleted && <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Completado</span>}
                                        </div>
                                        <p className={`text-xs font-medium flex items-center gap-1.5 ${isActive ? 'text-brand-secondary' : 'text-slate-400'}`}>
                                            <span className="material-symbols-outlined text-sm filled">{isLocked ? 'lock' : 'redeem'}</span>
                                            {milestone.reward}
                                        </p>
                                    </div>
                                    
                                    {/* Active Checkbox Circle (Only if active) */}
                                    {isActive && (
                                        <div className="size-6 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-brand-primary transition-colors">
                                            <div className="size-3 rounded-full bg-transparent hover:bg-brand-primary/20"></div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
                
                {/* Visual Flair for Bottom */}
                <div className="flex items-center justify-center gap-2 py-4 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>

            </main>

            {/* Dashboard specific Floating Action Button - Extended & Smart Hide */}
            <button
                onClick={() => navigate('/create-habit')}
                className={`absolute bottom-[calc(6rem+env(safe-area-inset-bottom))] right-6 z-20 flex h-12 items-center gap-2 rounded-full bg-slate-900 pl-3 pr-5 text-white shadow-xl shadow-slate-900/20 transition-all duration-300 ease-in-out active:scale-95 hover:bg-slate-800 ${
                    showFab ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
                }`}
            >
                <span className="material-symbols-outlined text-2xl">add</span>
                <span className="text-sm font-bold tracking-wide">Hábito</span>
            </button>
        </div>
    );
};

export default DashboardScreen;