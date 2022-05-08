import axios from 'axios';

export default class PastService {
  static async getAll(limit, page) {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: limit,
          _page: page
        }
      })
      return response
    } catch (e) {
      console.log(e)
    }
  }

  static async getId(id) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      return response
    } catch (e) {
      console.log(e)
    }
  }

  static async getCommentsByPostId(id) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      return response
    } catch (e) {
      console.log(e)
    }
  }
}
