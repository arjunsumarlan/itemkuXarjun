function solution(N, users) {
    const stages = [];
    let total = users.length

    for (let currentStage = 1; currentStage <= N; currentStage++) {
        const currentStages = users.filter(stage => stage === currentStage);
        const currentTotal = currentStages.length;
        stages.push({
            stage: currentStage,
            failure_rate: currentTotal / total
        });

        total = total - currentTotal;
    }

    return stages
        .sort((left, right) =>
            left.failure_rate === right.failure_rate ? 0
                : left.failure_rate > right.failure_rate ? -1 : 1)
        .map(item => item.stage);
}

console.log(solution(4, [4, 4, 4, 4, 4]));