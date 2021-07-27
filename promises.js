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
function getUserEventAsJSON(userName) {
    return fetch('https://api.github.com/users/' + userName + '/events/public',
        {headers: {'Authorization': 'token' + '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'}})
}