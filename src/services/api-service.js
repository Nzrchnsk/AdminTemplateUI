export default class ApiService{
    _apiBase = 'https://localhost:5001/api';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllUsers = async () => {
        const res = await this.getResource(`/users/`);
        return res.results
            .map(this._transformUser)
    };


    _transformUser = (user) => {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            name: user.name,
            role: user.role
        }
    }
}