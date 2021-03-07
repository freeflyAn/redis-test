const redis = require('redis')
const client = redis.createClient()

client.on('error', error => {
  console.log(error)
})

client.set('course', 'nodejs', redis.print)
client.get('course', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  client.quit()
})