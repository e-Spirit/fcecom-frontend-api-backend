const timeouts = {}

const copyURI = async (event, part)  => {
    event.preventDefault();

    clearTimeout(timeouts[part])

    const apiBasePath = document.getElementById(`${part}_basePath`);
    apiBasePath.classList.remove('hidden')

    const apiBasePathState = document.getElementById(`${part}_basePath_state`);
    apiBasePathState.classList.add('hidden')

    navigator.clipboard.writeText(
        `${window.location.origin}/${event.target.closest('a').getAttribute('href').replace(/^\/+/, '')}`
    ).then(() => {
        apiBasePathState.innerText = 'Link copied'
        apiBasePathState.classList.remove('hidden')

        apiBasePath.classList.add('hidden')

        timeouts[part] = setTimeout(() => {
            apiBasePath.classList.remove('hidden')
            apiBasePathState.classList.add('hidden')
        }, 1250);
    }, () => {
        apiBasePathState.innerText = 'Failed to copy'
        apiBasePathState.classList.remove('hidden')

        apiBasePath.classList.add('hidden')

        timeouts[part] = setTimeout(() => {
            apiBasePath.classList.remove('hidden')
            apiBasePathState.classList.add('hidden')
        }, 1250);
    });
};