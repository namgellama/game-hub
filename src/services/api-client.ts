import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'ed04d4d7cef7439dbf793fa68c6bb02c',
	},
});
