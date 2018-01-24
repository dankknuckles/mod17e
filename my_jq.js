
  jQuery.fn.desapear = function() {
    this.each(function(){
      elem = $(this);
      elem.css("display", "none");
    });
    return this;
  };

  $(document).ready(function(){
    $("div").hide();
    $("#select2").hide()
    $("#div1").show();

    //PLUGIN
    $("#plug").dblclick(function(){
      $("#plug").desapear();
    })

    //JQUERY – MANIPULAÇÃO DOM (ATRIBUTOS)
    $("#tam1").click(function(){
     $("img").attr("width","400");
    });

    $("#tam2").click(function(){
      $("img").removeAttr("width","400");
    });

    //JQUERY – MANIPULAÇÃO DOM (NO EXTERIOR)
    $("#select").dblclick(function(){
      $("<h2 align='center'>Overwatch Info</h2>").insertAfter("#select")
    });

    //JQUERY – MANIPULAÇÃO DOM (CÓPIA) + JQUERY – MANIPULAÇÃO DOM (NO INTERIOR)

    $("#cloneimg").click(function(){
      $(this).clone().appendTo("#div1");
    });

    $("#div1").dblclick(function(){
      $("#div1").slideUp();
    });

    //EFFECTS (EFEITOS)

    $("#btn1").click(function(){
      $("div").hide();
      $("#image1").show();
    });

    $("#btn2").click(function(){
      $("div").hide();
      $("#image2").show();
    });

    $("#btn3").click(function(){
      $("div").hide();
      $("#image3").show();
    });

    $("#btn4").click(function(){
      $("div").hide();
      $("#image4").show();
    });
    $("#btn5").click(function(){
      $("div").hide();
      $("#image5").show();
    });
    $("#btn6").click(function(){
      $("div").hide();
      $("#image6").show();
    });
    $("#btn7").click(function(){
      $("div").hide();
      $("#image7").show();
    });
    $("#btn8").click(function(){
      $("div").hide();
      $("#image8").show();
    });
    $("#btn9").click(function(){
      $("div").hide();
      $("#image9").show();
    });
    $("#btn10").click(function(){
      $("div").hide();
      $("#image10").show();
    });
    $("#btn11").click(function(){
      $("div").hide();
      $("#image11").show();
    });
    $("#btn12").click(function(){
      $("div").hide();
      $("#image12").show();
    });

    //– JQUERY – MANIPULAÇÃO DOM (PROPRIEDADES DE ESTILO) + MANIPULAÇÃO DOM (CLASSES) + TRAVERSING

    //EFFECTS(TOGGLECLASS)

    $("#select").click(function(){
      $("#select").toggleClass("titlecolor")
    });

    //

    $("#button1").dblclick("mousedown",function(){
      $("li").css({"background-color":"white","color":"black"});
      $("#btn1").css({"background-color":" #ff5c33","color":"white"});
      $("#btn4").css({"background-color":" #ff5c33","color":"white"});
      $("#btn6").css({"background-color":" #ff5c33","color":"white"});
      $("#btn3").css({"background-color":" #ff5c33","color":"white"});
    });

    $("#button2").dblclick("mousedown",function(){
      $("li").css({"background-color":"white","color":"black"});
      $("#btn12").css({"background-color":"#33ccff"});
      $("#btn11").css({"background-color":"#33ccff"});
      $("#btn5").css({"background-color":"#33ccff"});
    });

    $("#button3").dblclick("mousedown",function(){
      $("li").css({"background-color":"white","color":"black"})
      $("#btn7").css({"background-color":"#33cc33","color":"white"});
      $("#btn2").css({"background-color":"#33cc33","color":"white"});
    });

    $("#button4").dblclick("mousedown",function(){
      $("li").css({"background-color":"white","color":"black"});
      $("#btn9").css({"background-color":"#ffff4d"});
      $("#btn10").css({"background-color":"#ffff4d"});
      $("#btn8").css({"background-color":"#ffff4d"});
    });

    $("li").click(function(){
      $("li").css({"background-color":"white","color":"black"});
      $(this).css({"background-color":"#ffcc00","color":"black"});
      $(this).siblings().css({"background-color":"white"}); 
    });
  });

  //JQUERY - DRAGGABLE
  $(function(){
    $("img").draggable();
  });

  //JQUERY - WIDGETS- DRAGGABLE
  $( function() {
    $("#dialog").dialog();
  } );

  //JQUERY -  INTERACTIONS - SELECTABLE

  $(function(){
    $("#selectable").selectable();
  });
