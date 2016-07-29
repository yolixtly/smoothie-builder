// STEP 1 :
//Create Pantry Object
var pantry = {
    green: ['1 cup raw spinach', '1 cup raw kale', '1 cup raw broccoli'],
    fruit: ['1 medium raw gala apple', '1 cup raspberries', '1 cup raw bananas'],
    liquid: ['1 cup greek yogurt', '1 cup almond milk', '1 cup soy milk']
};

//Smoothie Object: this contains all the ingredients of 1 smoothie


// Step 1 : get the request / data

function getData(query, callback) {
    // var query = '2+cups+spinach';

    var url = 'https://api.nutritionix.com/v1_1/search/' + encodeURIComponent(query).replace(/%20/g, "+") +
        '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_total_carbohydrate%2Cnf_protein%2Cnf_total_fat%2Cnf_calories&appId=603d12ae&appKey=4c3eca869f427543c0d2492300fe4780';

    $.getJSON(url, function(data) {
        callback(data);
        // console.log(data.hits[0].fields.nf_calories);
    });
}

// Change query based on search variable


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
    var vegetable = getData(pantry.green[selectedVegetable], function(data){
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
    var fruit = getData(pantry.fruit[selectedFruit], function(data){
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
    var liquid = getData(pantry.liquid[selectedLiquid], function(data){
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
    });

}


// Step 4 : Event handler

$('#submit').click(function(e) {
    e.preventDefault();
  // console.log(); //2 cups spinach
  var vegIndex = $('#vegetables option:selected').val();
  var fruitIndex = $('#fruit option:selected').val();
  var liquidIndex = $('#liquid option:selected').val();
calNutrients(vegIndex, fruitIndex, liquidIndex);
});


// Notes
//  * Need to replace spaces with +
//	* Clean up API query (get vs post, params, etc)
//  * May need a for loop if we get page refresh problems
