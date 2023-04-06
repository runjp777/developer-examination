let endpoint = 'http://128.199.80.110:12111';
$(document).ready(function () {
    // renderTable();

    //1. ทำการ render select โดยยิง api 
    //type : POST,  url = ${endpoint}/findDdlPos
    //body : { status: "200", message: "success",data : [{pos_id: string, pos_name: string}]}


    //2. render table และ สามารถค้นหาข้อมูลได้
    //type : POST,  url = ${endpoint}/searchData
    //body : { status: "200", message: "success",data : [{_id: string, pos_id: string, pos_name: string, username: string,name: string,age: int, salary: double}]}
});
const renderTable = () => {
    $('#list-username').DataTable({
        ajax: {
            url: `${endpoint}/searchData`,
            type: 'POST',
            data: {
                username: "",
                pos_id: "",
                age: 1
            },
            headers: {
                'Content-Type': 'application/json',
            },
        },
        columns: [
        ]
    });
}
