function solution(record) {
    let history = [];

    // looping
    record.forEach(item => {
        const splitRecord = item.split(' ');

        const keyword = splitRecord[0];
        const uid = splitRecord[1];
        const name = splitRecord[2] ? splitRecord[2] : '';

        switch (keyword) {
            case 'Enter': {
                // Check already left user with the uid, then change left user's nickName to new one
                const existUser = history.find(item => item.user.uid === uid);
                if (existUser) {
                    history = history.map(item => {
                        if (item.user.uid === uid) {
                            return {
                                ...item,
                                user: { uid, name }
                            }
                        }

                        return item;
                    });
                }

                // Then push new user to the rooms with the uid
                history.push({
                    user: { uid, name },
                    message: 'came in'
                })
                break;
            }
            case 'Leave': {
                // Check user, then make him leave from rooms
                const existIndex = history.findIndex(item => item.user.uid === uid);
                if (existIndex > -1) {
                    const name = history[existIndex].user.nickName;
                    history.push({
                        user: { uid, name },
                        message: 'has left'
                    });
                }
                break;
            }
            case 'Change': {
                // Change all user's nickName to new one with same uid
                history = history.map(item => {
                    if (item.user.uid === uid) {
                        return {
                            ...item,
                            user: { uid, name }
                        }
                    }

                    return item;
                });
                break;
            }
            default:
                break;
        }
    });

    return history.map(item => `${item.user.name} ${item.message}`);
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));