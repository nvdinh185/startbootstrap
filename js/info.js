$(function () {
    "use strict";
    $("#grid").jqGrid({
        colModel: [
            { name: "name", label: "Họ tên", width: 153 },
            { name: "birthday", label: "Ngày sinh", width: 90, align: "center", formatter: "date", formatoptions: { newformat: "d-M-Y" } },
            { name: "gender", label: "Giới tính", width: 59, template: "booleanCheckbox" },
            {
                name: "address", label: "Địa chỉ", width: 87, align: "center",
                formatter: "select", formatoptions: { value: "HN:Hà Nội;DN:Đà Nẵng;HCM:TP Hồ Chí Minh", defaultValue: "DN" },
                stype: "select", searchoptions: { value: ":All;HN:Hà Nội;DN:Đà Nẵng;HCM:TP Hồ Chí Minh" }
            },
            { name: "salary", label: "Lương", width: 65, template: "number" },
        ],
        data: [
            { id: "10", birthday: "2015-10-01", name: "Nguyễn Văn Định", salary: "" },
            { id: "20", birthday: "2015-09-01", name: "Hồ Thị Cẩm", salary: "300.00", gender: false, address: "DN" },
            { id: "30", birthday: "2015-09-01", name: "Đoàn Ngọc Chung", salary: "400.00", gender: false, address: "HN" },
            { id: "40", birthday: "2015-10-04", name: "Nguyễn Trường Duy", salary: "200.00", gender: true, address: "HCM" },
            { id: "50", birthday: "2015-10-31", name: "Trần Lan Hương", salary: "300.00", gender: false, address: "HCM" },
            { id: "60", birthday: "2015-09-06", name: "Trương Thị Trà My", salary: "400.00", gender: false, address: "HN" },
            { id: "70", birthday: "2015-10-04", name: "Nguyễn Thị Huyền Trang", salary: "200.00", gender: true, address: "DN" },
            { id: "80", birthday: "2015-10-03", name: "Lê Thị Thùy Trâm", salary: "300.00", gender: false, address: "HN" },
            { id: "90", birthday: "2015-09-01", name: "Nguyễn Thị Minh Trang", salary: "400.00", gender: false, address: "DN" },
            { id: "100", birthday: "2015-09-08", name: "Nguyễn Hữu Vinh", salary: "500.00", gender: true, address: "DN" },
            { id: "110", birthday: "2015-09-08", name: "Nguyễn Phước Phương Chi", salary: "500.00", gender: false, address: "HN" },
            { id: "120", birthday: "2015-09-10", name: "Nguyễn Tố Ngân", salary: "500.00", gender: false, address: "HCM" }
        ],
        iconSet: "fontAwesome",
        rownumbers: true,
        sortname: "birthday",
        sortorder: "desc",
        toppager: true,
        pager: true,
        rowNum: 5,
        viewrecords: true,
        caption: "Thông tin nhân viên công ty"
    }).jqGrid("filterToolbar");
});