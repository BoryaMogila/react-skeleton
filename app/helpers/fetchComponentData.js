export default (dispatch, components, params, allParams) => {
    return Promise.all(
        components
            .filter(({ route, match }) => typeof route.component.fetchData === 'function')
            .map(({ route, match }) => route.component.fetchData(dispatch, params, {...match, ...allParams}))
    );
}