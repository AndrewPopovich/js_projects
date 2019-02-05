// 006929ee4ddd9385d16f0859af946cc0
// https://www.food2fork.com/api/get
// https://www.food2fork.com/api/search

import Search from './models/Search'

const search = new Search('chicken');

search.getRecipe().then(console.log);