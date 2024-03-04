let nextId = 0;
export function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
}

export function getNewExpirationTime() {
    return Date.now() + 15 * 1000;
}