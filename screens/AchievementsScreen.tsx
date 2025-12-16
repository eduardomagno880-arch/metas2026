import React from 'react';
import { useNavigate } from 'react-router-dom';

const AchievementsScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden pb-32">
            <header className="sticky top-0 z-40 bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-100 dark:border-white/5 px-4 h-16 flex items-center justify-between">
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Tu Legado</h2>
                <button className="flex items-center justify-center w-10 h-10 rounded-full active:bg-slate-100 dark:active:bg-white/10 transition-colors text-slate-500 hover:bg-slate-50">
                    <span className="material-symbols-outlined">settings</span>
                </button>
            </header>
            <main className="flex-1 flex flex-col gap-8 pt-6">
                <section className="flex flex-col items-center px-4 relative">
                    <div className="relative group cursor-pointer z-10">
                        <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-orange-500/20 rounded-full blur-2xl group-hover:blur-3xl transition duration-500 opacity-70"></div>
                        <div className="relative w-32 h-32 rounded-full p-[5px] bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 shadow-xl shadow-fuchsia-500/20">
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-4 border-white dark:border-background-dark">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr7d-zXTiDSwjo3MORRk1zM8O8p_5HnyWR2zeodY7nem53u4IvCVkB2Wn9SdzRiGQKTQ8FFN8QPnsaKexQi91yd3-t1XUODWv16Q2nZgmFl2B-zQ1J-rExXmT_qVx97WD9vlaZeSDfI8A-NnXkk1DuiEwmJPoCGoX-SLVdNx_X9lUHe9xJItvFq5jmmzN9q-URlZLYgZ2U_J3Sx-SuAhh1dtz6Nch0Gvsfr-vuLGudRB1MRAzVzWcu_8kPqNzpo2JpI-GSNj1l9pE"/>
                            </div>
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-background-dark text-slate-800 dark:text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-violet-200 dark:border-primary/50 shadow-lg shadow-violet-500/10 flex items-center gap-1 whitespace-nowrap z-20">
                            <span className="material-symbols-outlined text-[16px] text-transparent bg-clip-text bg-gradient-to-tr from-violet-600 to-fuchsia-600 filled">bolt</span>
                            NIVEL 12
                        </div>
                    </div>
                    <div className="mt-6 text-center z-10">
                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Arquitecto Atómico</h1>
                        <p className="text-slate-500 dark:text-[#92c9a4] text-sm mt-1 font-medium">Sigue construyendo tu identidad</p>
                    </div>
                    <div className="w-full max-w-xs mt-6 flex flex-col gap-2 z-10">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#5d8a6d]">
                            <span>XP</span>
                            <span>450 / 1000</span>
                        </div>
                        <div className="h-4 w-full bg-slate-100 dark:bg-[#23482f] rounded-full overflow-hidden ring-1 ring-inset ring-slate-200 dark:ring-white/5 shadow-inner">
                            <div className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 rounded-full relative overflow-hidden" style={{width: '45%'}}>
                                <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-2 gap-4 px-4">
                        <div className="bg-gradient-to-br from-white to-orange-50/50 dark:from-card-dark dark:to-card-dark p-5 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-orange-100/50 dark:border-white/5 flex flex-col justify-between h-28 relative overflow-hidden group hover:shadow-orange-500/10 transition-all duration-300">
                        <div className="absolute right-[-10px] top-[-10px] opacity-[0.03] dark:opacity-10 group-hover:scale-110 transition-transform duration-500 text-orange-600">
                            <span className="material-symbols-outlined text-8xl">local_fire_department</span>
                        </div>
                        <div className="p-2 w-fit bg-orange-100/80 dark:bg-orange-900/40 rounded-xl text-orange-600 dark:text-orange-400 shadow-sm">
                            <span className="material-symbols-outlined text-[20px] block filled">local_fire_department</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">Racha Actual</p>
                            <p className="text-2xl font-extrabold text-slate-900 dark:text-white">24 Días</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-white to-blue-50/50 dark:from-card-dark dark:to-card-dark p-5 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-blue-100/50 dark:border-white/5 flex flex-col justify-between h-28 relative overflow-hidden group hover:shadow-blue-500/10 transition-all duration-300">
                        <div className="absolute right-[-10px] top-[-10px] opacity-[0.03] dark:opacity-10 group-hover:scale-110 transition-transform duration-500 text-blue-600">
                            <span className="material-symbols-outlined text-8xl">verified</span>
                        </div>
                        <div className="p-2 w-fit bg-blue-100/80 dark:bg-blue-900/40 rounded-xl text-blue-600 dark:text-blue-400 shadow-sm">
                            <span className="material-symbols-outlined text-[20px] block filled">verified</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">Hábitos</p>
                            <p className="text-2xl font-extrabold text-slate-900 dark:text-white">1,240</p>
                        </div>
                    </div>
                </section>
                
                <section className="px-4">
                    <h2 className="text-lg font-bold mb-4">Desafío Destacado</h2>
                    <div className="relative overflow-hidden rounded-2xl bg-slate-900 group shadow-xl shadow-slate-200/50 dark:shadow-black/20">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfqp7BdzAlPnd1CjG6WzU0NyRdxrQhO1MFnBl9ORSN75MjE7NcFzu-OODvlhPXHpEbbnEbUqcORBZtfIExn6DDrHjgbgDuqNOQo___xmp-KbNLvdHczRR0dDW79UsAvJPpgUr0lZduC6VfupB0_jES2JjAWPTU7Y3MUlS4xHQQdhThhFrF97zqIsMdmAUeF9yVp2aA4luX3muwDT-1dkKLlTHpVHryyv_t4KQzE00PNDZ8qZzlZomqg-SyjtMMrFhOfTi4Pi3JJFM')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                        <div className="relative p-6 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <span className="bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg">7 Días Restantes</span>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-white text-2xl font-bold mb-2 leading-tight">Semana Sin<br/><span className="text-primary">Azúcar</span></h3>
                                <p className="text-slate-300 text-sm mb-5 leading-relaxed line-clamp-2">Rompe tu adicción al azúcar y recupera tu energía natural.</p>
                                <button className="w-full bg-primary hover:bg-[#11d852] text-background-dark font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
                                    Unirse al Reto
                                    <span className="material-symbols-outlined text-lg">arrow_forward_ios</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AchievementsScreen;