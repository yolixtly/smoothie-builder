// STEP 1 : Create Pantry Object
var pantry = {
    green: ['1 cup raw spinach', '1 cup raw kale', '1 cup raw broccoli'],
    fruit: ['1 medium raw gala apple', '1 cup raspberries', '1 cup raw bananas'],
    liquid: ['1 cup greek yogurt', '1 cup almond milk', '1 cup soy milk']
};

// Step 2 : get the request / data from the nutritionix API

function getData(query, callback) {
    var url = 'https://api.nutritionix.com/v1_1/search/' + encodeURIComponent(query).replace(/%20/g, "+") +
        '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_total_carbohydrate%2Cnf_protein%2Cnf_total_fat%2Cnf_calories&appId=603d12ae&appKey=4c3eca869f427543c0d2492300fe4780';

    $.getJSON(url, function(data) {
        callback(data);
    });
}

// Step 2 : A function that is incharge of rendering the info into html

//this appends the value from pantry to the html
var spinach = $('#veg-0').text(pantry.green[0]);
var kale = $('#veg-1').text(pantry.green[1]);
var broccoli = $('#veg-2').text(pantry.green[2]);

var apple = $('#fruit-0').text(pantry.fruit[0]);
var berry = $('#fruit-1').text(pantry.fruit[1]);
var banana = $('#fruit-2').text(pantry.fruit[2]);


var yogurt = $('#liquid-0').text(pantry.liquid[0]);
var almondMilk = $('#liquid-1').text(pantry.liquid[1]);
var soyMilk = $('#liquid-2').text(pantry.liquid[2]); //'1 cup soy milk'


// Step 3: Calculate total amount of Nutrients

function calNutrients(selectedVegetable, selectedFruit, selectedLiquid) {

    var vegetableCalories;
    var vegetableProtein;
    var vegetableCarbs;
    var vegetableFat;

    //first vegetable
    var vegetable = getData(pantry.green[selectedVegetable], function(data) {
        vegetableCalories = data.hits[0].fields.nf_calories;
        console.log('this is for vegetables');
        console.log(vegetableCalories);
        vegetableProtein = data.hits[0].fields.nf_protein;
        console.log(vegetableProtein);
        vegetableCarbs = data.hits[0].fields.nf_total_carbohydrate;
        console.log(vegetableCarbs);
        vegetableFat = data.hits[0].fields.nf_total_fat;
        console.log(vegetableFat);

    });

    var fruitCalories;
    var fruitProtein;
    var fruitCarbs;
    var fruitFat;

    //first fruit
    var fruit = getData(pantry.fruit[selectedFruit], function(data) {
        console.log('this is for fruit');
        console.log(data);
        fruitCalories = data.hits[0].fields.nf_calories;
        console.log(fruitCalories);
        fruitProtein = data.hits[0].fields.nf_protein;
        console.log(fruitProtein);
        fruitCarbs = data.hits[0].fields.nf_total_carbohydrate;
        console.log(fruitCarbs);
        fruitFat = data.hits[0].fields.nf_total_fat;
        console.log(fruitFat);
    });

    var liquidCalories;
    var liquidProtein;
    var liquidCarbs;
    var liquidFat;

    //firstliquid
    var liquid = getData(pantry.liquid[selectedLiquid], function(data) {
        console.log('this is for liquid');
        console.log(data);
        liquidCalories = data.hits[0].fields.nf_calories;
        console.log(liquidCalories);
        liquidProtein = data.hits[0].fields.nf_protein;
        console.log(liquidProtein);
        liquidCarbs = data.hits[0].fields.nf_total_carbohydrate;
        console.log(liquidCarbs);
        liquidFat = data.hits[0].fields.nf_total_fat;
        console.log(liquidFat);

    // Calculate the Total Calories of our Smoothie:
        var netCalories = Math.ceil((vegetableCalories + fruitCalories + liquidCalories));
        console.log('these are the net calories');
        console.log(netCalories);
        $('#netCalories').text(netCalories + ' calories');

        // Calculate the Total Carbs of our Smoothie:
        var netCarbs = Math.ceil((vegetableCarbs + fruitCarbs + liquidCarbs));
        console.log('these are the net carbs');
        console.log(netCarbs);
        $('#netCarbs').text(netCarbs + ' grams');

        // Calculate the Total Protein of our Smoothie:
        var netProtein = Math.ceil((vegetableProtein + fruitProtein + liquidProtein));
        console.log('these are the net Protein');
        console.log(netProtein);
        $('#netProtein').text(netProtein + ' grams');

        // Calculate the Total Fat of our Smoothie:
        var netFat = Math.ceil((vegetableFat + fruitFat + liquidFat));
        console.log('these are the net Fat');
        console.log(netFat);
        $('#netFat').text(netFat + ' grams');

    });
}

// Step 4 : Event handler
$('#submit').click(function(e) {
    e.preventDefault();
    // console.log(); //2 cups spinach
    $('#nutrition').show();
    var vegIndex = $('#vegetables option:selected').val();
    var fruitIndex = $('#fruit option:selected').val();
    var liquidIndex = $('#liquid option:selected').val();
    calNutrients(vegIndex, fruitIndex, liquidIndex);
});

//Second API Flcker

//  function getFlicker() {
//     var url = 'https://api.flickr.com/services/rest';
//     var params = {
//      method : 'flickr.photos.search',
//       api_key : '500ecb12edc8c861d2e69492a08ed8f5',
//       tags : 'smoothie',
//       format : 'json',
//       nojsoncallback : 1
//     }
//     $.getJSON(url, params, function(data) {

//         console.log(data);
//     });
// }

// getFlicker();