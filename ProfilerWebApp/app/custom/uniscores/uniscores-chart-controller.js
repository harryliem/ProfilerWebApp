/**=========================================================
 * Module: carousel.js
 * Controller for ChartJs
 =========================================================*/

App.controller('UniscoresChartController', function($scope, colors) {

    // random values for demo
    var rFactor = function(){ return Math.round(Math.random()*100); };

// Bar chart
// ----------------------------------- 

    $scope.barData = {
        labels : ['January','February','March','April','May','June','July'],
        datasets : [
            {
                fillColor : colors.byName('info'),
                strokeColor : colors.byName('info'),
                highlightFill: colors.byName('info'),
                highlightStroke: colors.byName('info'),
                data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
            },
            {
                fillColor : colors.byName('primary'),
                strokeColor : colors.byName('primary'),
                highlightFill : colors.byName('primary'),
                highlightStroke : colors.byName('primary'),
                data : [rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor(),rFactor()]
            }
        ]
    };

    $scope.barOptions = {
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : 'rgba(0,0,0,.05)',
        scaleGridLineWidth : 1,
        barShowStroke : true,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        barDatasetSpacing : 1
    };
});
