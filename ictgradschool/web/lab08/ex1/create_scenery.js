$(document).ready(function () {
    // TODOne: Your code here



    $(":radio").on("click", function () {
        let str = $(this).attr('id');
        str = str.substring(6);
        console.log(str);
        if (str === "background6") {
            $('#background').attr('src', "../images/" + str + ".gif");
        } else {
            $('#background').attr('src', "../images/" + str + ".jpg");
        }
    });


    $(':checkbox').each(function () {

        let str = $(this).attr('id');
        str = str.substring(6);
        console.log("sdc");
        if ($(this).is(":checked")) {
            $('#'+str+"").attr('style', "display:block");
        } else {
            $('#'+str+"").attr('style', "display:none");
        }
    })


    $(":checkbox").on("click",function () {
        // clearDolph();
        let str = $(this).attr('id');
        str = str.substring(6);
        // console.log(str + " attr: " +$(this).is(':checked'));
        if($(this).is(':checked')){
            $('#'+str+"").attr('style', "display:block");
        } else {
            $('#'+str+"").attr('style', "display:none");
        }
    });


});
