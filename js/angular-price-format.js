angular.module('angular-price-format', [])
.directive('pformat', [function () {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            var params = {
                prefix            : (typeof attrs.prefix    === 'undefined') ? ''  : attrs.prefix,
                sufix             : (typeof attrs.sufix     === 'undefined') ? ''  : attrs.sufix,
                centsSeparator    : (typeof attrs.cents     === 'undefined') ? ',' : attrs.cents,
                thousandsSeparator: (typeof attrs.thousands === 'undefined') ? '.' : attrs.thousands,
                centsLimit        : (typeof attrs.decimals  === 'undefined') ? 2   : Number(attrs.decimals),
                limit             : (typeof attrs.limit     === 'undefined') ? ''  : attrs.limit,
                allowNegative     : (typeof attrs.negative  === 'undefined') ? ''  : attrs.negative,
                insertPlusSign    : (typeof attrs.plus      === 'undefined') ? ''  : attrs.plus
            };
            ctrl.$formatters.unshift(function() {
                elem[0].value = parseFloat((ctrl.$modelValue * (Math.pow(10, params.centsLimit))).toFixed(params.centsLimit - 2 < 0 ? 0 : params.centsLimit - 2 ));
		elem.priceFormat(params);
                return elem[0].value;
            });
            ctrl.$parsers.unshift(function() {
                elem.priceFormat(params);
                return elem[0].value;
            });
        }
    };
}]);
