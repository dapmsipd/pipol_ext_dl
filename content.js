const baseUrl = 'https://pipol.neda.gov.ph';

$(document).ready(function () {
    var endpoint;
    var path = window.location.pathname;

    console.log(path);

    switch (path) {
        case '/viewMyProjects':
            endpoint = '/getPIPCIP';
            break;
        case '/viewMyTRIPProjects':
            endpoint = '/getTRIP';
            break;
        case '/viewMyDroppedProjects':
            endpoint = '/getDropped2';
            break;
        case '/viewMyCompletedProjects':
            endpoint = '/getCompleted';
            break;
        case '/viewArnipProjects':
            endpoint = '/getarnipaps';
            break;
        case '/viewIFPs':
            endpoint = '/getIFPs';
            break;
        case '/viewMyUncategorizedProjects':
            endpoint = '/getUncategorized';
            break;
        case '/viewMyProjects/1':
            endpoint = '/getPIPCIP/1';
            break;
        case '/viewMyTRIPProjects/1':
            endpoint = '/getTRIP/1';
            break;
        case '/viewMyDroppedProjects/1':
            endpoint = '/getDropped2/1';
            break;
        case '/viewMyCompletedProjects/1':
            endpoint = '/getCompleted/1';
            break;
        case '/viewMyUncategorizedProjects/1':
            endpoint = '/getUncategorized/1';
            break;
        default:
            endpoint = '/getPIPCIP';
            break;
    }

    if ([
        '/viewMyProjects/1',
        '/viewMyTRIPProjects/1',
        // '/viewMyDroppedProjects/1',
        '/viewMyCompletedProjects/1',
        '/viewMyUncategorizedProjects/1'
    ].includes(path)) {
        console.log('attached agency path matched');
        $('#datatables').DataTable(
            {
                dom: 'Brt',
                ajax: baseUrl + endpoint,
                serverSide: false,
                processing: true,
                columns: [
                    { data: 'code', name: 'code' },
                    { data: 'title', name: 'title' },
                    { data: 'spatial', name: 'spatial' },
                    { data: 'chap_description', name: 'chap_description' },
                    { data: 'UACS_AGY_DSC', name: 'UACS_AGY_DSC' },
                    { data: 'SS_statusofsubmission', name: 'SS_statusofsubmission' },
                    { data: 'rm_status', name: 'rm_status' },
                    { data: 'actions', name: 'actions' },
                ],
                "pagingType": "full_numbers",
                "lengthMenu": [
                    [10, 25, 50, -1],
                    [10, 25, 50, "All"]
                ],
                responsive: true,
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search records",
                },
                orderCellsTop: true,
                fixedHeader: true,
                // columnDefs: [
                //     { targets: [7], className: "text-center" },
                // ]
            });
    } else {
        // Create a new table element
        // var newTable = $('<table id="newTableId" class="display"><thead><tr><th>PIP Code</th><th>Project Title</th><th>Spatial Coverage by Cost/Investment</th><th>Main PDP Chapter</th><th>Status of Submission</th><th>Status of Validation</th><th>Actions</th></tr></thead></table>');

        // Assuming your div has the class "material-datatables", replace it with the actual class
        // $('.material-datatables').empty().append(newTable);

        $('#datatables').DataTable(
            {
                dom: 'Bfrtp',
                ajax: baseUrl + endpoint,
                serverSide: false,
                processing: true,
                columns: [
                    { data: 'code', name: 'code' },
                    { data: 'title', name: 'title' },
                    { data: 'spatial', name: 'spatial' },
                    { data: 'chap_description', name: 'chap_description' },
                    { data: 'SS_statusofsubmission', name: 'SS_statusofsubmission' },
                    { data: 'rm_status', name: 'rm_status' },
                    { data: 'actions', name: 'actions' },
                ],
                "pagingType": "full_numbers",
                "lengthMenu": [
                    [10, 25, 50, -1],
                    [10, 25, 50, "All"]
                ],
                responsive: true,
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search records",
                },
                orderCellsTop: true,
                fixedHeader: true,
                // columnDefs: [
                //     { targets: [7], className: "text-center" },
                // ]
            });
    }
});