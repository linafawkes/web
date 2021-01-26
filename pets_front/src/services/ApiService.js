import axios from "axios"

export default class ApiService {

    _apiBase = 'http://localhost:8000/api'


    async getResource(url) {
        try {
            const response = await axios({
                method: 'get',
                url: `${this._apiBase}${url}`,

            });
            return response.data;
        }
        catch (e) {
            return null
        }
    }

    async getService(id) {
        const res = await this.getResource(`/services/${id}/`)
        return res
    }

    async getAllServices() {
        const res = await this.getResource('/services/')
        return res
    }

    async getComment(id) {
        const res = await this.getResource(`/comments/${id}/`)
        return res
    }

    async getAllComments() {
        const res = await this.getResource(`/comments/`)
        return res
    }
}