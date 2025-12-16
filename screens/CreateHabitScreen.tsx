import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateHabitScreen = () => {
    const navigate = useNavigate();
    const [darkMode] = useState(false);

    // Simulate toggling dark mode for this screen just to show capabilities, 
    // though the prompt implies a unified app. We'll stick to a generally light theme for consistency
    // but use the dark classes where provided in the source.
    
    return (
        <div className={`bg-background-light dark:bg-background-dark min-h-screen flex flex-col pb-28 ${darkMode ? 'dark' : ''}`}>
            <div className="sticky top-0 z-50 flex items-center bg-white/95 dark:bg-[#112217]/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-transparent dark:border-[#326744]/30 transition-all duration-300">
                <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Nuevo Hábito</h2>
            </div>
            
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
                <label className="flex flex-col flex-1 group">
                    <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2 flex items-center gap-2">
                        <span className="flex items-center justify-center size-8 rounded-full bg-brand-secondary/10 text-brand-secondary">
                            <span className="material-symbols-outlined text-xl">face</span>
                        </span>
                        ¿En quién te quieres convertir?
                    </p>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-brand-secondary/30 border border-slate-200 dark:border-[#326744] bg-slate-50 dark:bg-[#193322] focus:border-brand-secondary focus:bg-white h-14 placeholder:text-slate-400 dark:placeholder:text-[#5a8065] p-[15px] text-base font-normal leading-normal transition-all" placeholder="Ej. Un corredor, un lector..."/>
                </label>
                <label className="flex flex-col flex-1 group">
                    <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2 flex items-center gap-2">
                        <span className="flex items-center justify-center size-8 rounded-full bg-brand-accent/10 text-brand-accent">
                            <span className="material-symbols-outlined text-xl">fitness_center</span>
                        </span>
                        ¿Cuál es el hábito?
                    </p>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-brand-accent/30 border border-slate-200 dark:border-[#326744] bg-slate-50 dark:bg-[#193322] focus:border-brand-accent focus:bg-white h-14 placeholder:text-slate-400 dark:placeholder:text-[#5a8065] p-[15px] text-base font-normal leading-normal transition-all" placeholder="Ej. Correr 10 minutos"/>
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
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent font-semibold whitespace-nowrap">
                            [mi hábito]
                        </span>
                        <span className="text-slate-500">a las</span>
                        <div className="relative group">
                            <input className="w-28 rounded-lg bg-slate-50 dark:bg-[#112217] border border-slate-200 dark:border-[#326744] text-slate-900 dark:text-white px-2 py-1.5 focus:ring-2 focus:ring-accent-purple/30 focus:border-accent-purple text-base font-semibold text-center" type="time" defaultValue="07:00"/>
                        </div>
                        <span className="text-slate-500">en</span>
                        <input className="min-w-[140px] flex-1 rounded-lg bg-slate-50 dark:bg-[#112217] border border-slate-200 dark:border-[#326744] text-slate-900 dark:text-white px-3 py-1.5 placeholder:text-slate-400 dark:placeholder:text-[#5a8065] focus:ring-2 focus:ring-accent-orange/30 focus:border-accent-orange text-base font-semibold" placeholder="Lugar (ej. Cocina)" type="text"/>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full max-w-md mx-auto right-0 p-4 bg-gradient-to-t from-white via-white to-transparent z-40 pb-8 pt-10">
                <button onClick={() => navigate('/dashboard')} className="w-full h-14 bg-gradient-to-r from-brand-primary to-brand-primary/90 hover:to-brand-primary active:scale-[0.98] transition-all rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 ring-1 ring-white/20">
                    <span className="text-white text-lg font-bold tracking-wide">Crear Hábito</span>
                    <span className="material-symbols-outlined text-white">arrow_forward</span>
                </button>
            </div>
        </div>
    );
};

export default CreateHabitScreen;