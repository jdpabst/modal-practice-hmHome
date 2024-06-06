import { useEffect } from 'react';

const EVENT = 'mousedown';
// anytime you click outside of the passed in ref prop, the callback will fire //
const useClickAway = (ref, callback) => {

    useEffect(() => {
        const listener = (event) => {
            if (!ref || !ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };
        document.addEventListener(EVENT, listener);
        return () => {
            document.removeEventListener(EVENT, listener);
        };
    }, [ref, callback]);
};


export default useClickAway;

