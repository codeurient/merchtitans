export const chunkArray = <T>(array: T[], chunkSize: number = 2): T[][] => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export const arrayToArrays = <T>(array: T[], size: number): T[][] => {
    const chunkLength = Math.max(array.length / size, 1);
    const chunks = [];
    for (let i = 0; i < size; i++) {
        if (chunkLength * (i + 1) <= array.length) {
            chunks.push(array.slice(chunkLength * i, chunkLength * (i + 1)))
        }
    }
    return chunks;


}
