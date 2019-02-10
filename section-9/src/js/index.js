// 006929ee4ddd9385d16f0859af946cc0
// https://www.food2fork.com/api/get
// https://www.food2fork.com/api/search

import Search from './models/Search';
import {elements, renderLoader} from './views/base';
import * as searchView from './views/searchView';

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();

    if (query) {
        state.search = new Search(query);

        // Show spinner
        searchView.clearInput();
        searchView.clearResults(elements.resultList);
        renderLoader(elements.resultList);

        await state.search.getRecipes();
        searchView.clearResults(elements.resultList);

        searchView.renderResults(state.search.recipes);
    }
};

elements.searchForm.addEventListener('submit', el => {
    el.preventDefault();
    controlSearch();
});