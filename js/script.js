

$(function (){



    var article=$('.article');
    $("#hide").click(()=>{
        article.hide(2000)
    });

    $('#show').click(()=>{
        article.show(500)
    })

    $('#toggle').click(()=>{
       article.toggle(1000)
    })

    $('#open').click(()=>{
        article.slideUp(500).slideDown(1000) // Chain metod
    })

    $('#addI').click(()=>{
        article.append('Add to the end ');
        article.prepend('Add to the start ')
        // article.html("<ul><li>lorem1</li><li>lorem2</li><li>lorem3</li></ul>")
    })

    $('#removeI').click(()=>{
        $('li:first-child').remove()
    })

    $('#addC').click(()=>{
        article.addClass('add')
    })

    $('#removeC').click(()=>{
        article.removeClass('add')
    })

    $('#updateC').click(()=>{
        article.toggleClass('add')
    })
})



// ------------ Animation properties-----------------

var box1=$('#danger')
var box2=$('#success')

var position1=box1.position()
var posLeft1=position1.left;
var position2=box2.position()
var posLeft2=position2.left;


$('#play').click(()=>{

    // box-1
    box1.css({position:'relative'})
    while (posLeft1<900) {

        box1.animate({
        left:'+=80px'
        })

        posLeft1+=100;


    }

      // box-2
      box2.css({position:'relative'})
      while (posLeft2<100) {
        box2.animate({
            left:'+=60px'
        })
        posLeft2+=20;
        // console.log(posLeft2);
      }
})



// ------------ Date ------------

let time=setInterval(run, 1000);

function run() {
    let d=new Date()
    let second=d.getSeconds()
    let minute=d.getMinutes()
    let clock=d.getHours()

    $('#box3').text(second)
     $('#box2').text(minute)
      $('#box1').text(clock)
}

