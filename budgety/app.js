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
    };

    var calculateTotals = function() {
        data.totals.exp = 0;
        data.totals.inc = 0;

        data.allItems.exp.forEach(function(val, index, arr) {
            data.totals.exp += val.value;
        });

        data.allItems.inc.forEach(function(val, index, arr) {
            data.totals.inc += val.value;
        });
    };

    var calculateBudget = function() {
        return data.totals.inc - data.totals.exp;
    };

    var calculateExpPercent = function() {
        return Math.round((data.totals.exp / data.totals.inc) * 100);
    };

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
        },

        deleteItem: function(type, id) {
            console.log(type + ' ' + id);
            data.allItems[type] = data.allItems[type].filter(function(e) {
                return e.id !== id;
            });
        },

        testing: function() {
            return data;
        },

        calculateBudget() {
            calculateTotals();
            var budget = calculateBudget();
            var percentExp = calculateExpPercent();
            return {
                budget: budget,
                percentExp: percentExp,
                totals: data.totals
            }
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
        expenseContainer: '.expenses__list',
        budgetValue: '.budget__value',
        incomeBudgetValue: '.budget__income--value',
        expencesBudgetValue: '.budget__expenses--value',
        expencesBudgetPercent: '.budget__expenses--percentage',
        generalContainer: '.container'
    };

    (function init() {
        document.querySelector(DOMStrings.budgetValue).textContent = '0';
        document.querySelector(DOMStrings.incomeBudgetValue).textContent = '0';
        document.querySelector(DOMStrings.expencesBudgetValue).textContent = '0';
        document.querySelector(DOMStrings.expencesBudgetPercent).textContent = '0%';
    })();

    var getSignWithValue = function(value) {
        var sign = value > 0 ? '+' : '-';
        if (value === 0) sign = '';
        return sign + value;
    };

    return {
        getInputData: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
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
            var html, itemContainer;

            if(type === 'inc') {
                itemContainer = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">+ %value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if (type === 'exp') {
                itemContainer = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">- %value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }

            html = html.replace('%id%', item.id);
            html = html.replace('%description%', item.description);
            html = html.replace('%value%', item.value);

            if(type === 'inc') {
                document.querySelector(itemContainer).insertAdjacentHTML('beforeend', html);
            } else if (type === 'exp') {
                document.querySelector(itemContainer).insertAdjacentHTML('beforeend', html);
            }
        },

        deleteItem: function(itemId) {
            document.getElementById(itemId).outerHTML = '';
        },

        updateBudget: function(budgetData) {
            document.querySelector(DOMStrings.budgetValue).textContent = getSignWithValue(budgetData.budget);
            document.querySelector(DOMStrings.incomeBudgetValue).textContent = '+' + budgetData.totals.inc;
            document.querySelector(DOMStrings.expencesBudgetValue).textContent = budgetData.totals.exp > 0 
            ? '-' + budgetData.totals.exp 
            : '0';
            document.querySelector(DOMStrings.expencesBudgetPercent).textContent = budgetData.percentExp > 0 && budgetData.percentExp <= 100
            ? budgetData.percentExp + '%' 
            : '---';
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

        document.querySelector(DOMStrings.generalContainer).addEventListener('click', function(event) {
            var itemId, split, type, id;
            
            itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;

            if (itemId) {
                split = itemId.split('-');
                type = split[0];
                id = parseInt(split[1]);
                budgetCtrl.deleteItem(type, id);
                updateBudget();
                uiCtrl.deleteItem(itemId);
            }
        });
    };

    var updateBudget = function() {
        var budgetData = budgetCtrl.calculateBudget();

        uiCtrl.updateBudget(budgetData);

    };

    var ctrlAddItem = function(el) {
        var input, newItem;

        input = uiCtrl.getInputData();
        if (!input.description.trim() || !input.value || input.value <= 0) {
            return;
        }

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        uiCtrl.addListItem(newItem, input.type);

        uiCtrl.clearInputFields();

        updateBudget();
    };

    return {
        init: function() {
            addEventListeners();
        }
    };
})(budgetController, UIController);

appController.init();