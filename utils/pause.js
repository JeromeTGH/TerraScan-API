
export const pause = async (temps = 1000) => {
    // Par défaut : temps=1000, soit 1 seconde
    return new Promise((resolve) => {
        setTimeout(resolve, temps);
    });
}