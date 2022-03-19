// file to handle theme of the whole frontend
// it exposes APIs like setTheme and getTheme which makes it easy to use
export default function setTheme() {
    let theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.querySelector('html').setAttribute("data-theme", "dark");
    } else {
        document.querySelector('html').setAttribute("data-theme", "light");
    }
}

export function changeTheme(value) {
    localStorage.setItem('theme', value);
    setTheme();
}

export function getTheme() {
    return localStorage.getItem('theme') || 'light';
}