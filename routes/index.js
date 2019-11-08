const router = require('koa-router')()
const axios = require('axios')

router.get('/latest', async (ctx, next) => {
  const result = await axios.get('https://news-at.zhihu.com/api/4/news/latest')
  console.log(result)
  ctx.body = result
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
