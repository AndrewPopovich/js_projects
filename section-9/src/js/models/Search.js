import axios from 'axios';

export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getRecipe() {
        const key = '006929ee4ddd9385d16f0859af946cc0';

        try {
            this.result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.recipes = this.result.data.recipes;
            return this;
        } catch (e) {
            alert(e);
        }
    }

}

new Search('chicken').getRecipe();
