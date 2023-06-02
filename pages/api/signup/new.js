import { connectDB } from '../../../util/database'

// eslint-disable-next-line consistent-return
export default async function handler(request, response) {
  if (request.method === 'POST') {
    console.log(request.body)

    try {
      const client = await connectDB
      const db = client.db('sportown')
      const result = await db.collection('users').find().toArray()
      console.log(result)

      return response.status(200)
    } catch (err) {
      console.log('err')
    }
  } else console.log('request method가 POST가 아닙니다.')
}
