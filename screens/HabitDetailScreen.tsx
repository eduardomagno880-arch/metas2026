import React from 'react';
import { useNavigate } from 'react-router-dom';

const HabitDetailScreen = () => {
    const navigate = useNavigate();
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
                        14 Días
                    </h1>
                </div>
                <div className="flex items-center gap-2 mt-2 opacity-100">
                    <span className="material-symbols-outlined text-orange-500 text-xl">local_fire_department</span>
                    <p className="text-orange-700 text-sm font-bold uppercase tracking-wider">Racha Actual</p>
                </div>
            </div>

            <div className="px-4 py-2 mb-6">
                <button className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-[#13ec5b] text-[#052e16] gap-3 shadow-[0_0_20px_rgba(19,236,91,0.3)] hover:shadow-[0_0_30px_rgba(19,236,91,0.5)] transition-all active:scale-[0.98]">
                    <span className="material-symbols-outlined text-2xl transition-transform group-hover:scale-110">check_circle</span>
                    <span className="text-lg font-bold leading-normal tracking-[0.015em]">Marcar Completado Hoy</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
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