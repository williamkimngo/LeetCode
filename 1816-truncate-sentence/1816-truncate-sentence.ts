function truncateSentence(s: string, k: number): string {
    const splits = s.split(" ");
    splits.length = k;

    return splits.join(" ");
};