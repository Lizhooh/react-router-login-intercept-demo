

export default ({ commit, getState }) => ({
    initState: {
        isLogin: false,         // 是否已经登录了
        checkEnd: false,        // 是否检查结束
    },

    _wati: time => new Promise(rs => setTimeout(rs, time)),
    // 检查登录状态
    async checkLoginState(path, failCallback = _ => _) {
        if (path === '/login') {
            return commit({ checkEnd: true });
        }
        await this._wati(1000);
        // 检查通过了
        // commit({ isLogin: true });
        // 检测不通过
        commit({ checkEnd: true });
        failCallback();
    },
});