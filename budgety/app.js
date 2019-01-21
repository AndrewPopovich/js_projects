var budgetController = (function() {
     var Expense = function(id, description, value) {
         this.id = id;
         this.description = description;
         this.value = value;
     };

     var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;
    var totalIncomes = 0;
    var ID = 0;

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, description, value) {
             var newItem;

             if (type === 'exp') {
                 newItem = new Expense(ID, description, value);
             } else if (type === 'inc') {
                 newItem = new Income(ID, description, value);
             }
             data.allItems[type].push(newItem);
             ID++;
             return newItem;
        }
    };
})();

var UIController = (function()  {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    };

    return {
        getInputData: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        clearInputFields: function() {
            var fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

            fields.forEach(function(value, key, parent) {
                value.value = null;
            });
            fields[0].focus();
        },

        getDOMStrings: function() {
            return DOMStrings;
        },

        addListItem: function(item, type) {
            console.log('addListItem ' );
            var html, itemContainer;

            if(type === 'inc') {
                itemContainer = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">+ %value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if (type === 'exp') {
                itemContainer = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">- %value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }

            html = html.replace('%id%', item.id);
            html = html.replace('%description%', item.description);
            html = html.replace('%value%', item.value);

            if(type === 'inc') {
                document.querySelector(itemContainer).insertAdjacentHTML('beforeend', html);
            } else if (type === 'exp') {
                document.querySelector(itemContainer).insertAdjacentHTML('beforeend', html);
            }
        }
    };
})();

var appController = (function(budgetCtrl, uiCtrl)  {
    var addEventListeners = function() {
        var DOMStrings = uiCtrl.getDOMStrings();

        document.querySelector(DOMStrings.addButton).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13 ) {
                 ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function(el) {
        var input, newItem;

        input = uiCtrl.getInputData();

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        uiCtrl.addListItem(newItem, input.type);

        uiCtrl.clearInputFields();
    }

    return {
        init: function() {
            addEventListeners();
        }
    }
})(budgetController, UIController);

appController.init();