var eyesight = angular.module('eyesight', []);

/**
 * @ngdoc directive
 * @name eyesight.directive:focusIf
 * @restrict A
 *
 * @description
 * Directive which will set the focus state of the provided element based
 * on provided expression resolving to true.
 *
 * @param {string=} Expression which, when true, sets focus to this element.
 */
eyesight.directive('focusIf', ['$timeout', function ($timeout) {
    return function ( scope, element, attr ) {
        scope.$watch(attr.focusIf, function (newVal) {
            if (newVal) {
                $timeout(function () {
                    element[0].focus();
                }, 0 );
            }
        });
    };
}]);

/**
 * @ngdoc directive
 * @name eyesight.directive:blurIf
 * @restrict A
 *
 * @description
 * Directive which will set the blur state of the provided element based
 * on provided expression resolving to true.
 *
 * @param {string=} Expression which, when true, will blur this element
 */
eyesight.directive('blurIf', ['$timeout', function ($timeout) {
    return function ( scope, element, attr ) {
        scope.$watch(attr.blurIf, function (newVal) {
            if (newVal) {
                $timeout(function () {
                    element[0].blur();
                }, 0 );
            }
        });
    };
}]);
