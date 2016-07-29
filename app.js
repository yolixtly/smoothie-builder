// STEP 1 :
	//Create Pantry Object
	var pantry = {
    green: ['2 cups spinach', '1 cup kale', '3/4 cup raw broccoli'],
    fruit: ['1 apple', '1 cup berries', '1 banana'],
    liquid: ['1 cup greek yogurt', '1 cup almond milk', '1 cup soy milk']
};

	//Smoothie Object: this contains all the ingredients of 1 smoothie


// Step 1 : get the request / data

function getData(){
	var query = '2+cups+spinach';
	var url = 'https://api.nutritionix.com/v1_1/search/' + query + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_total_carbohydrate%2Cnf_protein%2Cnf_total_fat%2Cnf_calories&appId=603d12ae&appKey=4c3eca869f427543c0d2492300fe4780';

	$.getJSON(url, function(data){
		console.log(data);
		console.log(data.hits[0].fields.nf_calories);
	});
	}
	getData();

// Change query based on search variable


// Step 2 : A function that is incharge of rendering the info into html


// Step 3 : Event handler


// Notes
//  * Need to replace spaces with +
//	* Clean up API query (get vs post, params, etc)
//  * May need a for loop if we get page refresh problems
