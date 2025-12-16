import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-white min-h-screen pb-24">
            <div className="sticky top-0 z-10 flex items-center bg-white/90 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-white/5">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
                </button>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Perfil y Configuración</h2>
                <button className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-slate-900 dark:text-white">more_horiz</span>
                </button>
            </div>
            <div className="flex p-6 flex-col items-center">
                <div className="flex gap-4 flex-col items-center relative mb-6">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-white dark:border-surface-dark shadow-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFFtBMzD69O_CcR5qamyqfnJCSV7hNRguGuU6SHsp5BzclrB8Iu2K_RzV6671i5JKSIx-02azhanBVezMFOX-Xy8fqXTAScyfHcEEgQ-j9ay0RaogKSZUCm_QOlQrFRSXmu4cNr0nMP0Hs4erwJs-yzbm91LMIfVduakFdthyWky7obtJS_G4onm5SrnmyU4UCgPU2iBpOHUquzc2YqsaP5U2Im_z9gp7h2utC2D7uQpVfayx8tSY4I__3wZN1oWU9um2ZKlqXl5M")'}}>
                        </div>
                        <div className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 rounded-full border-4 border-background-light dark:border-background-dark flex items-center justify-center shadow-md">
                            <span className="material-symbols-outlined text-sm font-bold">edit</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-slate-900 dark:text-white text-[26px] font-bold leading-tight tracking-[-0.015em] text-center">Hola, Alex</p>
                        <p className="text-emerald-700 dark:text-emerald-300 text-sm font-semibold leading-normal text-center mt-2 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-800">
                            Identidad: Atleta de alto rendimiento
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-6 px-4">
                    <section className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-soft border border-gray-100 dark:border-white/5">
                        <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight tracking-[-0.015em] px-5 pt-5 pb-2 flex items-center gap-2">
                            Cuenta
                        </h3>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3 px-5 py-4 justify-between hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <span className="material-symbols-outlined text-lg">mail</span>
                                    </div>
                                    <p className="text-slate-700 dark:text-gray-200 text-base font-medium leading-normal truncate">Correo Electrónico</p>
                                </div>
                                <span className="material-symbols-outlined text-gray-300 text-xl group-hover:text-blue-500 transition-colors">chevron_right</span>
                            </div>
                            <div className="h-px bg-gray-50 dark:bg-white/5 mx-5"></div>
                            <div className="flex items-center gap-3 px-5 py-4 justify-between hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                        <span className="material-symbols-outlined text-lg">lock</span>
                                    </div>
                                    <p className="text-slate-700 dark:text-gray-200 text-base font-medium leading-normal truncate">Contraseña</p>
                                </div>
                                <span className="material-symbols-outlined text-gray-300 text-xl group-hover:text-indigo-500 transition-colors">chevron_right</span>
                            </div>
                        </div>
                    </section>
                    
                    <div className="flex flex-col gap-4 mt-4 mb-8">
                        <button 
                            onClick={() => navigate('/')}
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-rose-100 dark:border-rose-900/30 bg-rose-50/50 dark:bg-rose-900/10 text-rose-600 dark:text-rose-400 font-bold hover:bg-rose-100 dark:hover:bg-rose-900/20 transition-colors"
                        >
                            <span className="material-symbols-outlined">logout</span>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;