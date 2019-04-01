import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: 'Client-ID 30c8317aa4f721d49e63d005bf5d63611e1b95a46ce54099ac45f9b2a4fd68f9'
    }
});