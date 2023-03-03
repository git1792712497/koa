const router = require('@koa/router')()

router.prefix('/')

router.get('/', ctx => {
    ctx.body = 'users router'
})

module.exports = router
