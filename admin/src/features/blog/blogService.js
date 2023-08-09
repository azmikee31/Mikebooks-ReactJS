import axios from 'axios'
import { base_url } from '../../utils/base_url';
import { configLS } from '../../utils/configHeader'

const getBlogs = async () => {
    const response = await axios.get(`${base_url}blog/`);

    return response.data;
}
const createBlog = async (blog) => {
    const response = await axios.post(`${base_url}blog/`, blog, configLS);

    return response.data;
}

const blogService = {
    getBlogs,
    createBlog
}

export default blogService;