import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HabitDetailScreen = () => {
    const navigate = useNavigate();
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div className="relative flex flex-col w-full h-full min-h-screen pb-24 bg-background-light">
            <div className="sticky top-0 z-50 flex items-center bg-white/95 backdrop-blur p-4 justify-between border-b border-gray-100">
                <div onClick={() => navigate(-1)} className="cursor-pointer text-[#111418] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                    <span className="material-symbols-outlined text-2xl">arrow_back</span>
                </div>
                <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center truncate px-2">
                    Corredor Matutino
                </h2>
                <div className="flex items-center justify-end">
                    <button className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#111418]">
                        <span className="material-symbols-outlined text-2xl">settings</span>
                    </button>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center pt-8 pb-6 px-4">
                <div className="relative">
                    <div className="absolute inset-0 bg-orange-500/20 blur-[60px] rounded-full scale-150 opacity-40"></div>
                    <h1 className="relative text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-600 tracking-tighter text-6xl font-extrabold leading-tight text-center">
                        {isCompleted ? '15 Días' : '14 Días'}
                    </h1>
                </div>
                <div className="flex items-center gap-2 mt-2 opacity-100">
                    <span className="material-symbols-outlined text-orange-500 text-xl filled">local_fire_department</span>
                    <p className="text-orange-700 text-sm font-bold uppercase tracking-wider">Racha Actual</p>
                </div>
            </div>

            <div className="px-4 py-2 mb-6">
                <button 
                    onClick={() => setIsCompleted(!isCompleted)}
                    className={`group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-16 gap-3 transition-all duration-500 active:scale-[0.96] ${
                        isCompleted 
                        ? 'bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] ring-4 ring-emerald-500/20' 
                        : 'bg-[#13ec5b] text-[#052e16] shadow-[0_0_20px_rgba(19,236,91,0.3)] hover:shadow-[0_0_30px_rgba(19,236,91,0.5)]'
                    }`}
                >
                    {/* Background Pattern for Success */}
                    <div className={`absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] transition-opacity duration-500 ${isCompleted ? 'opacity-20' : 'opacity-0'}`}></div>

                    {/* Uncompleted State */}
                    <div className={`absolute flex items-center justify-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isCompleted ? 'translate-y-12 opacity-0 rotate-3' : 'translate-y-0 opacity-100 rotate-0'}`}>
                        <span className="material-symbols-outlined text-2xl transition-transform group-hover:scale-110">check_circle</span>
                        <span className="text-lg font-bold leading-normal tracking-[0.015em]">Marcar Completado Hoy</span>
                    </div>
                    
                    {/* Completed State */}
                    <div className={`absolute flex items-center justify-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isCompleted ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-50'}`}>
                        <span className="material-symbols-outlined text-3xl filled animate-[wiggle_1s_ease-in-out_infinite]">celebration</span>
                        <span className="text-xl font-extrabold leading-normal tracking-wide">¡Excelente Trabajo!</span>
                    </div>

                    {/* Shine effect */}
                    {!isCompleted && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
                    
                    {/* Success Confetti/Particle Burst Placeholder (Visual Flair) */}
                    {isCompleted && (
                        <>
                            <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-[ping_1s_ease-out_infinite]"></div>
                            <div className="absolute bottom-2 right-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-[ping_1.2s_ease-out_infinite_0.2s]"></div>
                            <div className="absolute top-1/3 right-4 w-1 h-1 bg-white rounded-full animate-[ping_0.8s_ease-out_infinite_0.4s]"></div>
                        </>
                    )}
                </button>
            </div>

            {/* Reminder Info Section */}
            <div className="px-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-primary shadow-sm">
                            <span className="material-symbols-outlined">notifications_active</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">Recordatorio: 06:50 AM</p>
                            <p className="text-xs text-slate-500 font-medium">Lun, Mar, Mie, Jue, Vie</p>
                        </div>
                    </div>
                    <button className="text-slate-400 hover:text-brand-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                </div>
            </div>

            <div className="px-4 mb-8">
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white shadow-sm border border-gray-100">
                    <div className="flex gap-4 justify-between items-end">
                        <div>
                            <p className="text-purple-600 text-xs font-bold uppercase tracking-wider mb-1">Meta de Identidad</p>
                            <h3 className="text-gray-900 text-lg font-bold leading-tight">Atleta de Resistencia</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-2xl font-bold text-purple-600">45%</span>
                        </div>
                    </div>
                    <div className="w-full bg-purple-100 rounded-full h-3 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]" style={{width: '45%'}}></div>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-normal">
                        Has completado 21 de 50 sesiones para subir de nivel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HabitDetailScreen;