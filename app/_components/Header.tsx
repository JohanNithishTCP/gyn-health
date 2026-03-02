"use client"
import { ChevronsRight, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const topNav = [
    "Home", "Directions & Contact", "Partner Clinics & Partners",
    "Contact for referrers", "Advisor", "Press", "Webinars", "Careers", "App"
];

const subNav = [
    "Gynecology", "Obstetrics", "Infertility",
    "Breast Symptoms", "Special Consultations", "Employees"
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-100 relative z-50">
            <div className="site-container max-[1400px]:max-w-full! py-3">
                <div className="flex justify-between items-center gap-6">
                    <div className="flex flex-col items-center justify-center shrink-0">
                        <img src="/logo.png" alt="Logo" width={`215px`} className='p-3 bg-[rgba(244,255,244,0.5)]' />
                    </div>

                    <div className="flex flex-col flex-1 items-end sm:items-center mt-2">
                        <nav className="hidden xl:flex gap-6 min-[1400px]:text-[14px] text-[12px] font-medium text-gray-500 mb-3.5 tracking-wide">
                            {topNav.map((item, idx) => (
                                <a key={idx} href="#" className="hover:text-primary transition-colors">
                                    {item}
                                </a>
                            ))}
                        </nav>

                        <nav className="hidden xl:flex gap-8 min-[1400px]:text-[14px] text-[12px] font-bold text-gray-500">
                            {subNav.map((item, idx) => (
                                <a key={idx} href="#" className="hover:text-primary transition-colors flex items-center gap-1.5 group">
                                    {item}
                                    <ChevronsRight className="w-4 h-4" strokeWidth={1} />
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden xl:flex flex-col items-start min-w-[120px]">
                        <p className="text-gray-500 text-[11px] font-bold leading-[1.8]">Also Visit</p>
                        <img src="/logo-2.png" alt="Logo" width={`110px`} />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="xl:hidden p-2 text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-y-auto max-h-[80vh]">
                    <div className="p-6 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            {subNav.map((item, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="text-lg font-bold text-gray-700 hover:text-primary flex items-center justify-between"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                    <ChevronsRight className="w-5 h-5 text-primary" />
                                </a>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-6 border-t border-gray-100">
                            {topNav.map((item, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="text-[13px] font-medium text-gray-500 hover:text-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex flex-col gap-2">
                            <p className="text-gray-500 text-[11px] font-bold">Also Visit</p>
                            <img src="/logo-2.png" alt="Logo" width={`110px`} />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
