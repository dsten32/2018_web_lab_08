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

    //set up and initialise variable for translating the dolphins. mistake

    var dScale=1,dTransX=0,dTransY=0;

    function setTransformState(){
        $('.dolphin').each(function () {
            $(this).css('transform','translateX('+dTransX+'%) translateY('+dTransY+'%) scale('+dScale+')');
            console.log("hiya") //.attr('style','transformX('+dTransX+'px)');
            //
        });
    }

    $('[id$=-control]').change(function () {
        console.log("slider " + $(this).attr('id') + " changed");
        console.log($(this).val());
        if ($(this).attr('id') == 'horizontal-control') {
            dTransX = $(this).val();
        } else if ($(this).attr('id') == 'vertical-control') {
            dTransY = $(this).val();
        } else if ($(this).attr('id') == 'size-control') {
            dScale = $(this).val();
        }
        ;

        if (dScale < 0) {
            dScale = 1 - Math.abs(dScale) / 100;
        } else if (dScale == 0) {
            dScale = 1;
        } else if (dScale==2){
            dScale=1.05;
        } else if (dScale>1){
            dScale = Math.log(dScale);
        }
        console.log("dtransX: "+ dTransX);
        console.log("dtransY: "+ dTransY);
        console.log("dScale: "+ dScale);
        setTransformState();
        //$('[id^=dolphin]').attr('style','')  //.style.transform = "translateX(100px)";
    })

})
