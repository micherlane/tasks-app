import { useState } from "react";

interface useLocalStorageProps {
    keyName: string;
    defaultValue: object | null;
}
export const useLocalStorage = ({keyName, defaultValue}: useLocalStorageProps) => { 
    const localStorage = window.localStorage;

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(keyName);

            if(value) {
                return JSON.parse(value);
            } else {
                localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }

        } catch (err) {
            return defaultValue;
        }
    });

    const setValue = (newValue: object) => {
        try {
            localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch(err) {}

        setStoredValue(newValue);
    };

    return [storedValue, setValue];
}