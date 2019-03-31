
export default ({ commit, getState }) => ({
    initState: {
        isLogin: false,         // 是否已经登录了
        checkEnd: false,        // 是否检查结束
    },

    _wati: time => new Promise(rs => setTimeout(rs, time)),
    // 检查登录状态
    async checkLoginState(path, list = [], failCallback = _ => _) {
        if (!list.includes(path)) {
            return commit({ checkEnd: true });
        }

        await this._wati(1000);
        // 检查通过了
        // commit({ isLogin: true });
        // 检测不通过
        failCallback();
        commit({ checkEnd: true });
    },
});