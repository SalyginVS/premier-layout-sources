export default ({ app, store, redirect }) => {
    app.router.afterEach((to, from) => {
        app.store.commit('setCurrentRoute', to.path);
    });
};
