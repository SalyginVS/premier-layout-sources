export default async function (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }

    const findEl = (hash, x) => {
        return document.querySelector(hash) ||
            new Promise((resolve) => {
                if (x > 50) {
                    return resolve(document.documentElement)
                }
                setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
            })
    }

    if (to.hash) {
        const el = await findEl(to.hash);
        return window.scrollTo({ top: el.offsetTop , behavior: 'smooth' })
    }

    return { x: 0, y: 0 }
}