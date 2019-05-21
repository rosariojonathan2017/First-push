class Github {
    constructor() {
        this.client_id = '4256da05858c8de552ab';
        this.client_secret = '7516f4a239e82f59eb48d2eecc5eead2058fd373';
        this.repos_count = 5;
        this.repos_sort = 'create: esc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=$sort=${this.repos_sort}&client_id=${this.client_id}&client_secrete=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();
    return {
        profile,
        repos
    };
}
}