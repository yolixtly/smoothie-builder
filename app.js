// STEP 1 :
//Create Pantry Object
var pantry = {
    green: ['2 cups spinach', '1 cup raw kale', '3/4 cup raw broccoli'],
    fruit: ['1 apple', '1 cup berries', '1 banana'],
    liquid: ['1 cup greek yogurt', '1 cup almond milk', '1 cup soy milk']
};

//Smoothie Object: this contains all the ingredients of 1 smoothie


// Step 1 : get the request / data

function getData(query, callback) {
    // var query = '2+cups+spinach';

    var url = 'https://api.nutritionix.com/v1_1/search/' + encodeURIComponent(query) +
        '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_total_carbohydrate%2Cnf_protein%2Cnf_total_fat%2Cnf_calories&appId=603d12ae&appKey=4c3eca869f427543c0d2492300fe4780';

    $.getJSON(url, function(data) {
        console.log(data);
         debugger;
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

function calNutrients(selectedVegetable) {
    //first vegetable

    // var vegetable = getData(pantry.green[selectedVegetable]);
    // console.log(selectedVegetable);
    // console.log(vegetable);
    // console.log(getData('apple'));
    getData('apple', function(data) {
    	console.log(data);
    });

    // getData();
    // //first liquid
    // getData();
    

}




// Step 4 : Event handler

$('#submit').click(function(e) {
    e.preventDefault();
  // console.log(); //2 cups spinach
  var index = $('#vegetables option:selected').val();
calNutrients(index);
});

// Notes
//  * Need to replace spaces with +
//	* Clean up API query (get vs post, params, etc)
//  * May need a for loop if we get page refresh problems