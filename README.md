# Food Safety Javascript Application

  * Requires Ruby 1.9.3 or newer for data maintenance
  * Requires NPM

## Steps to update data / develop the application:

###  Updating the Data: 
  1. Open .xlsx file from food safety group.
  2. Save CSV Files as data/products.csv, data/cooking_tips.csv from relevant tabs
  3. Run script 'ruby csv_reader.rb'
  4. Compare script results in food_safety_product_data.json to food_safety_product_data.json.reference
   to ensure data fields are exactly the same.  This may require upkeep over time if they change headers in the csv.

### Standard development:
  5. Install node packages using npm install.
  6. Run 'gulp' which will rebuild food_safety_app.js and food_safety_app.css as changes are detected
  7. Navigate to http:localhost:8080/test/index.html
  8. Testing in example template:
    * cd test/
    * wget http://www.foodsafety.gov/keep/index.html \
       --page-requisites \
       --html-extension \
       --convert-links
    * Replace main body div with:
    <div id="app-location">

    </div>
    <style>
      #app-location{
        border: 1px solid #000;
      }
    </style>
    <link rel="stylesheet" type="text/css" href="dist/food_safety_app.css">
    <script type="text/javascript" src="dist/food_safety_app.js"></script> 
    <script>
      F_SAFETY_APP.initialize('app-location')
    </script>

### Deployment
  8. Replace food_safety_app.js / food_safety_app.css as required on the server, using the files in the dist/ directory