import { useState } from 'react';

export const useUser = () => {
    const [user, _setUser] = useState(() => {
        const email = localStorage.getItem('email');
        const role = localStorage.getItem('role');
        const id = localStorage.getItem('id')
        if (email && role && id) {
            return ({ email, role, id });
        } else {
            return (null);
        }
    });

    const setUser = ({ email, role, id }) => {
        localStorage.setItem('email', email);
        localStorage.setItem('role', role);
        localStorage.setItem('id', id);

        _setUser({ email, role, id });
    }

    const removeUser = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('role');
        localStorage.removeItem('id');

        _setUser(null);
    }

    return { user, setUser, removeUser };
}