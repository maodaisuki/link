'use client'
import { useEffect, useState } from "react"

const ThemeToggle = () => {
    const [onTheme, setOnTheme] = useState('Light');
    const [offTheme, setOffTheme] = useState('Dark');

    useEffect(() => {
        setOnTheme(localStorage.getItem('theme') || 'light');
        setOffTheme(localStorage.getItem('theme') == 'light' ? 'dark' : 'light');
        document.documentElement.setAttribute(
            "data-theme",
            localStorage.getItem("theme") || "light"
        );
    }, []);

    return (
        <label className="swap">
            <input type="checkbox" id="theme-controller" value="synthwave" className="theme-controller" onClick={(e) => {
                let newTheme = localStorage.getItem("theme") == "dark" ? "light" : "dark";
                localStorage.setItem("theme", newTheme);
                document.documentElement.setAttribute("data-theme", newTheme);
            }} />
            {/* TODO 本地设置为 Dark 时，由于默认为 Light 会有闪屏 */}
            <div className="swap-on capitalize">{ onTheme }</div>
            <div className="swap-off capitalize">{ offTheme }</div>
        </label>
    )
}

export default ThemeToggle;