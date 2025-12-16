import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1 flex flex-col relative w-full h-full min-h-screen overflow-hidden bg-surface">
            <div className="relative w-full h-[38vh] shrink-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface z-10 h-full w-full"></div>
                <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj4EIjs6OxKL_Qv_Hj2eJ7FhexJWaE_UIz5_9xnc6KStjpqjmouO5ZXGGCpRTetPtc5gYPf6Wdog9kuc5HqbnClYS4943LKTsmF5HG67ZyiC97N_pO9BMlonXj7wcPfFEXoPIztfs3XocbjthkcmlO3VmUKevRO8fWO_EWliaVg05dlR06oKv8ok-1J44s95MyBm8Xw6279etG5Z-yO-xfRfKx0T5bMT2cYZj7AH_fGBZ4iAL8u6tfwjbFSdSGyCqjnsv15C-svP4")'}}>
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
                    <div className="h-20 w-20 bg-white rounded-3xl flex items-center justify-center shadow-soft border border-slate-100 rotate-3 transition-transform hover:rotate-0 duration-500">
                        <span className="material-symbols-outlined text-4xl bg-gradient-to-br from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                            diamond
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col px-6 pt-14 pb-8 z-10">
                <div className="text-center mb-8">
                    <h1 className="text-slate-900 tracking-tight text-[32px] font-extrabold leading-tight mb-2">
                        Bienvenida a <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">Datametas2026</span>
                    </h1>
                    <h2 className="text-slate-500 text-lg font-bold tracking-tight">
                        Tu Identidad, Tu Sistema
                    </h2>
                </div>
                <div className="w-full mb-8">
                    <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x snap-mandatory py-4 px-1">
                        {[
                            { icon: 'fingerprint', color: 'indigo', title: 'Identidad Primero', desc: 'No te enfoques en lo que quieres lograr, sino en quién te quieres convertir.', iconColor: 'text-brand-primary' },
                            { icon: 'hub', color: 'sky', title: 'Sistemas Sólidos', desc: 'Las metas son para la dirección. Los sistemas son para el progreso.', iconColor: 'text-brand-accent' },
                            { icon: 'trending_up', color: 'pink', title: 'Resultados Reales', desc: 'Pequeños hábitos repetidos a diario crean un interés compuesto.', iconColor: 'text-brand-secondary' }
                        ].map((item, idx) => (
                            <div key={idx} className="snap-center shrink-0 w-[85%] bg-white border border-slate-100 rounded-2xl p-6 shadow-soft flex flex-col gap-3 group transition-all hover:-translate-y-1">
                                <div className={`h-12 w-12 rounded-2xl bg-${item.color}-50 flex items-center justify-center ${item.iconColor} mb-1`}>
                                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 text-lg font-bold leading-tight mb-1">{item.title}</p>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-2 mt-2">
                        <div className="w-5 h-1.5 rounded-full bg-brand-primary"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-8 w-full mt-auto">
                    <button 
                        onClick={() => navigate('/dashboard')}
                        className="w-full relative overflow-hidden bg-slate-900 text-white font-bold text-lg h-14 rounded-2xl shadow-glow transition-all transform active:scale-95 flex items-center justify-center gap-2 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_100%] transition-all duration-500 group-hover:bg-[100%_0%]"></div>
                        <span className="relative z-10">Empezar Transformación</span>
                        <span className="material-symbols-outlined relative z-10 text-xl font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                    <button className="w-full text-slate-400 text-sm font-semibold py-2 hover:text-brand-primary transition-colors">
                        ¿Ya tienes cuenta? <span className="text-brand-primary font-bold">Iniciar Sesión</span>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default WelcomeScreen;