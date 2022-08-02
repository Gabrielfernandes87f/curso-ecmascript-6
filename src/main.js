const myPrommise = () => new Promise((reolve, reject) => {
    return setTimeout(() => {
        reject('ok')
    }, 2000)
})

// myPrommise().then((Response) => {
//     console.log(Response)
// })

const exec = async () => {
    try {
        await myPrommise()
        console.log('deu certo')
    }
    catch (error) {
        console.warn('deu ruim')
    }
}

exec()