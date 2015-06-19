angular.module('angular-price-format', [])
.directive('pformat', [function () {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            ctrl.$formatters.unshift(function (a) {
                elem[0].value = parseFloat((ctrl.$modelValue * 100).toFixed(2));
                elem.priceFormat({
                    prefix            : (typeof attrs.prefix    === 'undefined')?'' :attrs.prefix,
                    centsSeparator    : (typeof attrs.cents     === 'undefined')?',':attrs.cents,
                    thousandsSeparator: (typeof attrs.thousands === 'undefined')?'.':attrs.thousands
                });
                return elem[0].value;
            });
            ctrl.$parsers.unshift(function (viewValue) {
                elem.priceFormat({
                    prefix            : (typeof attrs.prefix    === 'undefined')?'' :attrs.prefix,
                    centsSeparator    : (typeof attrs.cents     === 'undefined')?',':attrs.cents,
                    thousandsSeparator: (typeof attrs.thousands === 'undefined')?'.':attrs.thousands
                });      
                return elem[0].value;
            });
        }
    };
}]);
