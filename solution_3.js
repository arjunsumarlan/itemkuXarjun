function solution(relation) {
    let answer = 0;
    const loops = relation[0];
    const loopsLength = loops.length;
    let candidates = [];

    // Find one best candidate first
    for (let col = 0; col < loopsLength - 1; col++) {
        const oneRows = relation.map(rel => rel[col]);
        const isDuplicatedCol = new Set(oneRows).size !== oneRows.length;

        if (!isDuplicatedCol) {
            candidates.push(col);
            answer++;
        }
    }

    for (let col = 0; col < loopsLength - 1; col++) {
        for (let colNext = 0; colNext < loopsLength - 1; colNext++) {
            const isCurrentCandidate = candidates.findIndex(el => el === col) > -1;
            const isNextCandidate = candidates.findIndex(el => el === colNext) > -1;
            if (!isCurrentCandidate && !isNextCandidate && col !== colNext) {
                const oneRows = relation.map(rel => `${rel[col]} ${rel[colNext]}`);
                const isDuplicatedCol = new Set(oneRows).size !== oneRows.length;

                if (!isDuplicatedCol) {
                    candidates.push(col);
                    candidates.push(colNext);
                    answer++;
                }
            }
        }
    }

    return answer;
}

console.log(solution([['100', 'ryan', 'music', '2'], ['200', 'apeach', 'math', '2'], ['300', 'tube', 'computer', '3'], ['400', 'con', 'computer', '4'], ['500', 'muzi', 'music', '3'], ['600', 'apeach', 'music', '2']]))