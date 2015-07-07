(function() {
window["F_SAFETY_TEMPLATES"] = window["F_SAFETY_TEMPLATES"] || {};

window["F_SAFETY_TEMPLATES"]["browse-category.template"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.forEach(categories , function(category){ ;
__p += '\n  <div class="f-safety-app-results-list-item">\n    ';
 if(category["subcategories"].length == 0){ ;
__p += '\n      <a href="#" class=\'f-safety-app-results-list-item-link f-safety-app-category-list-item\' data-category=\'' +
__e( category["category_name"] ) +
'\' data-template="browse-category.template">' +
__e( category["category_name"] ) +
'</a>\n    ';
 }else{ ;
__p += '\n      <a href="#" class=\'f-safety-app-results-list-item-link f-safety-app-category-list-parent\' data-category=\'' +
__e( category["category_name"] ) +
'\' data-children="true" data-template="browse-category.template">' +
__e( category["category_name"] ) +
'</a>\n      ';
 _.forEach(category["subcategories"], function(sub_category){ ;
__p += '\n        <a href="#" class=\'f-safety-app-results-list-item-link f-safety-app-category-list-child\' data-category=\'' +
__e( category["category_name"] ) +
'\' data-subcategory="' +
__e( sub_category ) +
'" data-template="browse-category.template">' +
__e( sub_category ) +
'</a>\n      ';
 }); ;
__p += '\n    ';
 } ;
__p += '\n  </div>\n';
 }); ;


}
return __p
}})();
(function() {
window["F_SAFETY_TEMPLATES"] = window["F_SAFETY_TEMPLATES"] || {};

window["F_SAFETY_TEMPLATES"]["browse-items.template"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h2 class="f-safety-app-heading">Select a food product:</h2>\n<a href="#" class="f-safety-app-return-button f-safety-app-category-return">Return to Category list</a>\n<div class="f-safety-app-results-list" id="f-safety-app-browse-item-list">\n  ';
 _.forEach(results , function(result){ ;
__p += '\n  <div class="f-safety-app-results-list-item">\n    <a href="#" class="f-safety-app-results-list-item-link f-safety-app-by-category-list-item" data-id="' +
__e( result.id ) +
'" data-template="browse-items.template">\n        ' +
__e( result.name ) +
'\n        ';
 if(result.name_subtitle){ ;
__p += '\n         ' +
__e( result.name_subtitle ) +
'\n        ';
 } ;
__p += '\n    </a>\n  </div>\n';
 }); ;
__p += '\n</div>\n<a href="#" class="f-safety-app-return-button f-safety-app-category-return">Return to Category list</a>\n';

}
return __p
}})();
(function() {
window["F_SAFETY_TEMPLATES"] = window["F_SAFETY_TEMPLATES"] || {};

window["F_SAFETY_TEMPLATES"]["content-view.template"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="f-safety-app-content-item" data-template="content-view.template">\n  <div class="f-safety-app-heading">\n    <h2 >' +
__e( _.startCase(name) ) +
'</h2>\n    <h3 class="sub_title">' +
__e( name_subtitle ) +
'</h3>\n  </div>\n  <a href=\'#\' class="f-safety-app-return-button f-safety-app-content-return">Return to Results</a>\n  <div class="f-safety-app-content-item-area">\n    <h3 class="f-safety-app-content-item-sub-header">For freshness and quality, this item should be consumed within:</h3>\n    <div class="f-safety-app-expiration-container">\n      ';
 if(pantry_output_display_only){ ;
__p += '\n        <div class="f-safety-app-expiration">\n          <div class="f-safety-app-expiration-data">' +
__e( pantry_output_display_only ) +
'</div>\n          <div class="f-safety-app-expiration-type">if pantry stored</div>\n          \n        </div>\n      ';
 } ;
__p += '\n      ';
 if(pantry_after_opening_output_display_only){ ;
__p += '\n        <div class="f-safety-app-expiration">\n          <div class="f-safety-app-expiration-data">' +
__e(pantry_after_opening_output_display_only ) +
'</div>\n          <div class="f-safety-app-expiration-type">if pantry stored after opening</div>\n        </div>\n      ';
 } ;
__p += '\n      ';
 if(pantry_tips){ ;
__p += '\n        <div class="f-safety-app-expiration">\n          <div class="f-safety-app-expiration-type">Pantry Tips</div>\n          <div class="f-safety-app-expiration-data">' +
__e( pantry_tips ) +
'</div>\n        </dvi>\n      ';
 } ;
__p += '\n      ';
 if(refrigerate_output_display_only){ ;
__p += '\n        <div class="f-safety-app-expiration">\n          <div class="f-safety-app-expiration-data">' +
__e( refrigerate_output_display_only ) +
'</div>\n          <div class="f-safety-app-expiration-type">when stored in refrigerator</div>\n        </div>\n      ';
 } ;
__p += '\n      ';
 if(refrigerate_after_opening_output_display_only){ ;
__p += '\n        <div class="f-safety-app-expiration">\n          <div class="f-safety-app-expiration-data">' +
__e(refrigerate_after_opening_output_display_only ) +
'</div>\n          <div class="f-safety-app-expiration-type">if refrigerated after opening</div>\n        </div>\n      ';
 } ;
__p += '\n      ';
 if(refrigerate_tips){ ;
__p += '\n        <div class="f-safety-app-expiration">\n          <div class="f-safety-app-expiration-type">Refrigeration Tips</div>\n          <div class="f-safety-app-expiration-data">' +
__e( refrigerate_tips ) +
'</div>\n        </div>\n      ';
 } ;
__p += '\n      ';
 if(freeze_output_display_only){ ;
__p += '\n        <div class="f-safety-app-expiration"><div class="f-safety-app-expiration-data">' +
__e( freeze_output_display_only ) +
'</div>\n          <div class="f-safety-app-expiration-type">if stored frozen</div>\n          \n        </div>\n      ';
 } ;
__p += '\n      ';
 if(freeze_tips){ ;
__p += '\n        <div class="f-safety-app-expiration">\n          <div class="f-safety-app-expiration-type">Freezing Tips</div>\n          <div class="f-safety-app-expiration-tips">' +
__e( freeze_tips ) +
'</div>\n        </div>\n      ';
 } ;
__p += '\n    </div>\n    ';
 if(typeof cooking_methods !== 'undefined'){ ;
__p += '\n      <h3 class="f-safety-app-content-item-sub-header"> Cooking Methods</h3>\n      ';
 _.forEach(cooking_methods,function(cooking_method){ ;
__p += '\n        <div class="f-safety-app-cooking-method-container">\n          ';
 if(cooking_method.cooking_method){ ;
__p += '\n            <div class="f-safety-app-cooking-method">\n              <div class="f-safety-app-cooking-method-data">' +
__e( cooking_method.cooking_method ) +
'</div>\n              <div class="f-safety-app-cooking-method-type">cooking method</div>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if(cooking_method.cooking_temperature){ ;
__p += '\n            <div class="f-safety-app-cooking-method">\n              <div class="f-safety-app-cooking-method-data">' +
__e( cooking_method.cooking_temperature + " F" ) +
'</div>\n              <div class="f-safety-app-cooking-method-type">cooking temperature</div>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if(cooking_method.size_metric){ ;
__p += '\n            <div class="f-safety-app-cooking-method">\n              <div class="f-safety-app-cooking-method-data">' +
__e( cooking_method.measure_from + " - " + cooking_method.measure_to ) +
'</div>\n              <div class="f-safety-app-cooking-method-type">suggested preperation size in ' +
__e( cooking_method.size_metric ) +
'</div>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if(cooking_method.timing_metric){ ;
__p += '\n            <div class="f-safety-app-cooking-method">\n              <div class="f-safety-app-cooking-method-data">' +
__e( cooking_method.timing_from + " - " + cooking_method.timing_to ) +
' per ' +
__e( cooking_method.timing_per ) +
'</div>\n              <div class="f-safety-app-cooking-method-type">suggested cooking time in ' +
__e( cooking_method.timing_metric ) +
'</div>\n            </div>\n          ';
 } ;
__p += '\n        </div>\n      ';
 }); ;
__p += '\n    ';
 } ;
__p += '\n    ';
 if(typeof cooking_tips !== 'undefined'){ ;
__p += '\n      <h3 class="f-safety-app-content-item-sub-header"> Cooking Tips</h3>\n      <div class="f-safety-app-cooking-tip-container">\n        ';
 _.forEach(cooking_tips,function(cooking_tip){ ;
__p += '\n          ';
 if(cooking_tip.tips){ ;
__p += '\n            <div class="f-safety-app-cooking-tip">\n              <div class="f-safety-app-cooking-tip-type">Tip</div>\n              <div class="f-safety-app-cooking-tip-data">' +
__e( cooking_tip.tips ) +
'</div>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if(cooking_tip.safe_minimum_temperature){ ;
__p += '\n            <div class="f-safety-app-cooking-tip">\n              <div class="f-safety-app-cooking-tip-type">Safe Minimum Temperature</div>\n              <div class="f-safety-app-cooking-tip-data">' +
__e( cooking_tip.safe_minimum_temperature + " F" ) +
'</div>\n            </div>\n          ';
 } ;
__p += '\n          ';
 if(cooking_tip.rest_time){ ;
__p += '\n            <div class="f-safety-app-cooking-tip">\n              <div class="f-safety-app-cooking-tip-type">Rest Time</div>\n              <div class="f-safety-app-cooking-tip-data">' +
__e( cooking_tip.rest_time + cooking_tip.rest_time_metric ) +
'</div>\n            </div>\n          ';
 } ;
__p += '\n        ';
 }); ;
__p += '\n      </div>\n    ';
 } ;
__p += '\n  </div>\n  <a href=\'#\' class="f-safety-app-return-button f-safety-app-content-return">Return to Results</a>\n</div>';

}
return __p
}})();
(function() {
window["F_SAFETY_TEMPLATES"] = window["F_SAFETY_TEMPLATES"] || {};

window["F_SAFETY_TEMPLATES"]["main.template"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="f-safety-app-container" data-template="main.template">\n  <ul class="f-safety-app-nav f-safety-app-nav-tabs">\n    <li class="active">\n        <a href="#" data-menu="browse" id=\'f-safety-app-browse\' class="f-safety-app-header-link">BROWSE</a>\n    </li>\n    <li>\n      <a href="#" data-menu="browse" id=\'f-safety-app-search\' class="f-safety-app-header-link">SEARCH</a>\n    </li>\n  </ul> \n  <div class="f-safety-app-view">\n    <div class="f-safety-app-view-pane" id="f-safety-app-browse-view">\n      <div class="f-safety-app-results-container" id="f-safety-app-browse-category-list-container">\n        <h2 class="f-safety-app-heading">Browse by Category:</h2>\n        <div class="f-safety-app-results-list" id="f-safety-app-browse-category-list">\n\n        </div>\n      </div>\n      <div class="f-safety-app-results-container" id="f-safety-app-browse-item-list-container">\n        \n      </div>\n    </div>\n    <div class="f-safety-app-view-pane" id="f-safety-app-search-view">\n      <div id="f-safety-app-search-form">\n        <h2 class="f-safety-app-heading">Search for Food Products</h2>\n        <label for="f-safety-app-search-input">Search:</label>\n        <input type="text" class="f-safety-app-search-input" name="f-safety-app-search-input" id="f-safety-app-search-input" placeholder="Begin typing to begin searching"></input>\n      </div>\n      <div class="f-safety-app-results-container" id="f-safety-app-browse-search-list-container">\n        <div class="f-safety-app-results-list" id="f-safety-app-search-list">\n          <div class="f-safety-app-results-list-item">\n            <a class="f-safety-app-results-list-item-link ">Begin typing in the search box above to search the food index!</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="f-safety-app-view-pane" id="f-safety-app-content-view">\n     \n      \n    </div>\n  </div>\n  <div class="f-safety-app-footer">\n    <img class="f-safety-app-footer-image" align="middle" src="' +
__e( footer_image ) +
'" alt="Foodkeeper Logo">\n  </div>\n</div>';

}
return __p
}})();
(function() {
window["F_SAFETY_TEMPLATES"] = window["F_SAFETY_TEMPLATES"] || {};

window["F_SAFETY_TEMPLATES"]["no-search-results.template"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="f-safety-app-results-list-item">\n<a href="#" class="f-safety-app-results-list-item-link ">No results try a new search in the box above to find food safety information!</a>\n</div>';

}
return __p
}})();
(function() {
window["F_SAFETY_TEMPLATES"] = window["F_SAFETY_TEMPLATES"] || {};

window["F_SAFETY_TEMPLATES"]["search-results.template"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.forEach(results , function(result){ ;
__p += '\n<div class="f-safety-app-results-list-item">\n  <a href="#" class="f-safety-app-results-list-item-link f-safety-app-search-list-item" data-id="' +
__e( result.id ) +
'" data-template="search-results.template">\n    <div class="f-safety-app-search-list-item-header">\n      ' +
__e( result.name ) +
'\n      ';
 if(result.name_subtitle){ ;
__p += '\n       ' +
__e( result.name_subtitle ) +
'\n      ';
 } ;
__p += '\n    </div>\n    <div class="f-safety-app-search-list-item-category">\n      ';
 if(result.category_name_display_only){ ;
__p += '\n        Category: ' +
__e( result.category_name_display_only ) +
'\n        ';
 if(result.subcategory_name_display_only){ ;
__p += '\n          -&nbsp;' +
__e( result.subcategory_name_display_only ) +
'\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n    </div>\n  </a>\n</div>\n';
 }); ;


}
return __p
}})();