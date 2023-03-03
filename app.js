#!/usr/bin/env node

const Koa = require('koa')
const userRouter = require('./routes/users')

const app = new Koa()

app.use(userRouter.routes()).use(userRouter.allowedMethods())

app.listen(80)
