import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};

export const clearInput = () => elements.searchInput.value = null;

export const clearResults = (parent) => {
    parent.innerHTML = null;
};

const renderRecipe = recipe => {
    const recipeElement = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>`;

    elements.resultList.insertAdjacentHTML('beforeend', recipeElement);
};

const limitTitle = (title, limit = 17) => {
    if (title.length <= limit) {
        return title;
    }

    const newTitle = [];
    title.split(' ').reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
            newTitle.push(cur);
        }
        return acc + cur.length;
    }, 0);

    return `${newTitle.join(' ')} ...`;
};
