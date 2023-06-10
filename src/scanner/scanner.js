let listener = null;

export function registerListener(fnc) {
    listener = fnc;
}

export function invokeListener(...args) {
    return listener?.(...args);
}
