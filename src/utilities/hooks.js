import React from 'react';

export const useClickOutside = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    React.useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

export const useCopyToClipboard = (value, notifyTimeout = 2500) => {
    const [copyStatus, setCopyStatus] = React.useState('inactive')
    const copy = React.useCallback(() => {
        navigator.clipboard.writeText(value).then(
            () => setCopyStatus('copied'),
            () => setCopyStatus('failed'),
        )
    }, [value]);

    React.useEffect(() => {
        if (copyStatus === 'inactive') return;
        const timeoutId = setTimeout(() => setCopyStatus('inactive'), notifyTimeout);
        return () => clearTimeout(timeoutId)
    }, [copyStatus]);

    return [copyStatus, copy];
}