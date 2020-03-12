
$("#donuts").hover( () => {

    $("#donuts").animate({

            width:"800px",
            height:"800px",
            opacity:"0.75"
 


    },2000,() =>{

            $("#donuts").css({
                width:"600px",
                height:"600px",
                opacity:"1"

            },1200)
    })

})