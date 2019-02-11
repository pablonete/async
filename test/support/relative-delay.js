export function relativeMs(ms) {
    if (Array.isArray(ms)) {
        return ms.map(n => n * 2);
    }

    return ms * 2;
}
