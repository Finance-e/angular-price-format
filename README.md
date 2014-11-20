# Jquery Price format directive for AngularJs

Finance-e modifies for angularjs directive, based on directive founded in stack overflow
http://stackoverflow.com/questions/19576202/angular-input-field-with-a-currency-mask-directive-for-money-format-on-the-fly

## Requirements

- Jquery
- AngularJS

## Install


You can get it from [Bower](http://bower.io/)

bower install angular-price-format

This will copy the angular-price-format files into a `bower_components` folder, along with its dependencies. Load the script files in your application:

## Usage

Include angular, jquery and angular-price-format scripts in your project:
```html
<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/angular-price-format/dist/angular-price-format.min.js"></script>
```

Create your controller with some proprety (include angular-price-format dependence)
```html
<script>
    angular.module('myPrivateModule', ['angular-price-format']).
        controller('priceFormatCTRL', ['$scope', function($scope) {
        $scope.test1  = 0;
        $scope.test2  = 0;
        $scope.test3  = 0;
    }]);
</script>

<div ng-app="priceFormat" id='examples'>
    Basic Usage
    <input type="text" ng-model="test1" pformat/> <br/>

    Changing options
    <input type="text" ng-model="test2" pformat prefix="R$ " cents=',' thousands='.'/>
</div>
```

## Grunt Serve
We have one grunt task to run server (the index file run live examples)

```sh
grunt run
```

It's equal to run separately:

* `grunt connect:server` : giving you a development server at [http://localhost:9002/](http://localhost:9002/).
* `grunt watch` : will automatically build your demo.
