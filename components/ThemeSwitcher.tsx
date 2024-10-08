"use client"

import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check for the theme in localStorage on initial render
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
            aria-label='Theme Switcher'
            onClick={toggleTheme}
            className="bg-gray-800 text-gray-100 p-2 rounded-full hover:scale-105 transition-all duration-300"
        >
            {theme === 'light' ? <MoonIcon className="w-6 h-6 text-yellow-500" /> : <SunIcon className="w-6 h-6 text-yellow-500" />}
        </button>
    );
};

export default ThemeSwitcher;