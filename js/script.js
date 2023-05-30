

$(function() {
    AOS.init({
      duration: 1200
    });
  
    onElementHeightChange(document.body, function(){
      AOS.refresh();
    });
  });
  $(".number").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing:"swing",
            step:function (now) {
  
              now = Number(Math.ceil(now)).toLocaleString('en');
                                    $(this).text(now);
            },
          }
        );
    });
    
function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;
    
    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }
