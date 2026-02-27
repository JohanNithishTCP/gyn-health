import { ChevronsRight } from 'lucide-react';
import React from 'react';

const topNav = [
    "Home", "Directions & Contact", "Partner Clinics & Partners",
    "Contact for referrers", "Advisor", "Press", "Webinars", "Careers", "App"
];

const subNav = [
    "Gynecology", "Obstetrics", "Infertility",
    "Breast Symptoms", "Special Consultations", "Employees"
];

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-100">
            <div className="site-container max-[1400px]:max-w-full! py-3">
                <div className="flex justify-between items-center gap-6">
                    <div className="flex flex-col items-center justify-center shrink-0">
                        <img src="/logo.png" alt="Logo" width={`215px`} />
                    </div>

                    <div className="flex flex-col flex-1 items-end sm:items-center mt-2">
                        <nav className="hidden xl:flex gap-6 text-[11px] font-medium text-gray-500 mb-3.5 tracking-wide">
                            {topNav.map((item, idx) => (
                                <a key={idx} href="#" className="hover:text-primary transition-colors">
                                    {item}
                                </a>
                            ))}
                        </nav>

                        <nav className="flex gap-8 text-[12px] font-bold text-gray-500">
                            {subNav.map((item, idx) => (
                                <a key={idx} href="#" className="hover:text-primary transition-colors flex items-center gap-1.5 group">
                                    {item}
                                    <ChevronsRight className="w-4 h-4" strokeWidth={1} />
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden lg:flex flex-col items-start min-w-[120px]">
                        <p className="text-gray-500 text-[11px] font-bold leading-[1.8]">Also Visit</p>
                        <img src="/logo-2.png" alt="Logo" width={`110px`} />
                    </div>

                </div>
            </div>
        </header>
    );
}
