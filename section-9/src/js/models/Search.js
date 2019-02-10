import axios from 'axios';

export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getRecipes() {
        const key = '006929ee4ddd9385d16f0859af946cc0';

        try {
            // this.result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            // this.recipes = this.result.data.recipes;
            // console.log(this.recipes[0]);
            this.mock();
        } catch (e) {
            alert(e);
        }
    }

    mock() {
        this.recipes = [{
            publisher: '101 Cookbooks',
            title: 'Best Pizza Dough Ever',
            image_url: 'http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg',
            recipe_id: '47746'
        },
            {
                publisher: '102 Cookbooks',
                title: 'Best Pizza Dough Ever',
                image_url: 'http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg',
                recipe_id: '47746'
            },
            {
                publisher: '103 Cookbooks',
                title: 'Best Pizza Dough Ever',
                image_url: 'http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg',
                recipe_id: '47746'
            },
            {
                publisher: '104 Cookbooks',
                title: 'Best Pizza Dough Ever',
                image_url: 'http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg',
                recipe_id: '47746'
            },
            {
                publisher: '105 Cookbooks',
                title: 'Best Pizza Dough Ever',
                image_url: 'http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg',
                recipe_id: '47746'
            }];
    }
}
