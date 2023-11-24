const Router = require('express')
const router = new Router()

const modules = ['imagecatigories', 'image']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router