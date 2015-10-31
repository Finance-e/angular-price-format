angular.module('angular-price-format', [])
.directive('pformat', [function () {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            ctrl.$formatters.unshift(function (a) {
                elem[0].value = parseFloat((ctrl.$modelValue * 100).toFixed(2));
                //elem[0].value = ctrl.$modelValue * 100 ;
                elem.priceFormat({
                    prefix            : (typeof attrs.prefix    === 'undefined')?'' :attrs.prefix,
                    sufix             : (typeof attrs.sufix     === 'undefined')?'' :attrs.sufix,
                    centsSeparator    : (typeof attrs.cents     === 'undefined')?',':attrs.cents,
                    thousandsSeparator: (typeof attrs.thousands === 'undefined')?'.':attrs.thousands,
                    centsLimit        : (typeof attrs.decimals  === 'undefined')?2  :attrs.decimals,
                    limit             : (typeof attrs.limit     === 'undefined')?'' :attrs.limit,
                    allowNegative     : (typeof attrs.negative  === 'undefined')?'' :attrs.negative,
                    insertPlusSign    : (typeof attrs.plus      === 'undefined')?'' :attrs.plus
                });
                return elem[0].value;
            });
            ctrl.$parsers.unshift(function (viewValue) {
                elem.priceFormat({
                    prefix            : (typeof attrs.prefix    === 'undefined')?'' :attrs.prefix,
                    sufix             : (typeof attrs.sufix     === 'undefined')?'' :attrs.sufix,
                    centsSeparator    : (typeof attrs.cents     === 'undefined')?',':attrs.cents,
                    thousandsSeparator: (typeof attrs.thousands === 'undefined')?'.':attrs.thousands,
                    centsLimit        : (typeof attrs.decimals  === 'undefined')?2  :attrs.decimals,
                    limit             : (typeof attrs.limit     === 'undefined')?'' :attrs.limit,
                    allowNegative     : (typeof attrs.negative  === 'undefined')?'' :attrs.negative,
                    insertPlusSign    : (typeof attrs.plus      === 'undefined')?'' :attrs.plus
                });      
                return elem[0].value;
            });
        }
    };
}]);
