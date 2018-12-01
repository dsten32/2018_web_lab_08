$(document).ready(function () {
    // TODOne: Your code here
    $(':checkbox').each(function () {
        let str = $(this).attr('id');
        str = str.substring(6);
        console.log(str);
        if ($(this).is(":checked")) {
            $('#'+str).attr('style', "display:block");
        } else {
            $('#'+str).attr('style', "display:none");
        }
    });


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


    $(":checkbox").on("click",function () {
        // clearDolph();
        let str = $(this).attr('id');
        str = str.substring(6);
        console.log(str + " attr: " +$(this).is(':checked'));
        if($(this).is(':checked')){
            $('#'+str+"").attr('style', "display:block");
        } else {
            $('#'+str+"").attr('style', "display:none");
        }
    });

    //set up and intialise variable for tanslating the dolphins.

    var dScale=1,dTransX=0,dTransY=0, dTransZ=0;

    function setTransformState(){

    }

    $('[id$=-control]').change(function () {
        console.log("slider "+ $(this).attr('id') +" changed");
        console.log($(this).val());
        if($(this).attr('id')=='horizontal-control'){
            dTransX=$(this).val();
        } else if($(this).attr('id')=='vertical-control'){
            dTransY=$(this).val();
        } else if($(this).attr('id')=='size-control'){
            dTransZ=$(this).val();
        };
        console.log("transX: "+dTransX);
        console.log("transY: "+dTransY);
        console.log("transZ(size): "+dTransZ);
        //$('[id^=dolphin]').attr('style','')  //.style.transform = "translateX(100px)";
    })

});
