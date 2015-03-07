 App.controller('UniscoresTableController', ['$scope', '$timeout', function ($scope, $timeout) {
    'use strict';

    // Define global instance we'll use to destroy later
    var dtInstance1;

    $timeout(function () {

        dtInstance1 = $('#datatable1').dataTable({
            'paging': true,  // Table pagination
            'ordering': true,  // Column ordering 
            'info': true,  // Bottom left status text
            // Text translation options
            // Note the required keywords between underscores (e.g _MENU_)
            oLanguage: {
                sSearch: 'Search all columns:',
                sLengthMenu: '_MENU_ records per page',
                info: 'Showing page _PAGE_ of _PAGES_',
                zeroRecords: 'Nothing found - sorry',
                infoEmpty: 'No records available',
                infoFiltered: '(filtered from _MAX_ total records)'
            }
        });


    });

     $scope.Foo = "Hi There";
    // When scope is destroyed we unload all DT instances 
    // Also ColVis requires special attention since it attaches
    // elements to body and will not be removed after unload DT
    $scope.$on('$destroy', function () {
        dtInstance1.fnDestroy();
        $('[class*=ColVis]').remove();
    });

}]);