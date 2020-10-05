export const getters = {
    getWatchByName: (state) => (name) => {
        return state.watches.find((watch) => watch.name === name);
    },

    getWatchesByCategory: (state) => (category, numberOfItems) => {
        if (category === 'men watches')
            return state.watches.filter((watch) => watch.sex === 'male');
        else if (category === 'women watches')
            return state.watches.filter((watch) => watch.sex === 'female');
        else if (category === 'steel watches')
            return state.watches.filter((watch) => watch.material === 'steel');
        else if (category === 'gold watches')
            return state.watches.filter((watch) => watch.material === 'gold');
        else if (category === 'steel and gold')
            return state.watches.filter(
                (watch) => watch.material === 'steel and gold'
            );
        else if (category === 'gem-set watches')
            return state.watches.filter(
                (watch) => watch.material === 'gem-set'
            );
        else if (category === 'professional') {
            console.log(category);
            let arr = state.watches.filter((watch) => watch.type === category);

            if (numberOfItems) return arr.slice(0, numberOfItems);
            else return arr;
        } else if (category === 'classic') {
            let arr = state.watches.filter((watch) => watch.type === category);

            if (numberOfItems) return arr.slice(0, numberOfItems);
            else return arr;
        } else if (category === 'tagline')
            return state.watches.filter((watch) => watch.tagline);
    },
};
