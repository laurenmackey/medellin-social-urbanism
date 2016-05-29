var main = function () {

    // controls clicking and hovering over dots on each neighborhood map functionality
 
    $('.neighborhood_Dots circle').click(function() {
        var clickedDot = $(this),
            description = clickedDot.next();
            clickCount = (clickedDot.data("click-count") || 0) + 1;
 
        clickedDot.data("click-count", clickCount);

        $(clickedDot).css('r', '10.25');
        
        if (clickCount % 2 === 0) {
            $(clickedDot).css('r', '7.75');
            $(description).css('display', 'none');
        }
        else {
            $(clickedDot).css('r', '10.25');
            $(description).css('display', 'inline');
        }
    })

    $('.neighborhood_Dots circle').mouseenter(function() {
            var hoveredDot = $(this),
                description = hoveredDot.next(),
                clickCount = (hoveredDot.data("click-count") || 0);

            if (clickCount % 2 === 1) {
                return false;
            }

            $(hoveredDot).css('r', '10.25');
            $(description).css('display', 'inline');
        }) 
        
    $('.neighborhood_Dots circle').mouseleave(function() {
            var hoveredDot = $(this),
                description = hoveredDot.next(),
                clickCount = (hoveredDot.data("click-count") || 0);

            if (clickCount % 2 === 1) {
                return false;
            }
            
            $(hoveredDot).css('r', '7.75');
            $(description).css('display', 'none');
        })

    // closes pop up panel on main map

    $('#neighborhood_PopUp_Panel .neighborhood_closeButton').click(function() {
        $('#neighborhood_PopUp_Panel').fadeOut(300);
    });

    $(document).bind('keydown', function(e) {
        if (e.which === 27) {
            $('#neighborhood_PopUp_Panel').fadeOut(300);
        }
    });

    // resets neighborhood from past clicks in case you go back to main map and then back to neighborhood

    var resetDoce = function () {
        $('#neighborhood_doce_x3C_Path_2004_x3E__4_').css('display', 'inline');
        $('#neighborhood_doce_x3C_Path_2004_x3E__4_').siblings().css('display', 'none');
        $('#neighborhood_doce_x32_004_2_').css('display', 'inline');  
        $('#neighborhood_doce_x32_005').css('display', 'none'); 
        $('#neighborhood_doce_x32_006').css('display', 'none'); 
        $('#neighborhood_doce_x32_007').css('display', 'none'); 
        $('#neighborhood_doce_x32_008').css('display', 'none'); 
        $('#neighborhood_doce_x32_009').css('display', 'none'); 
        $('#neighborhood_doce_x32_010').css('display', 'none'); 
        $('#neighborhood_doce_x32_011').css('display', 'none'); 
        $('#neighborhood_doce_x32_012').css('display', 'none'); 
        $('#neighborhood_doce_x32_013').css('display', 'none'); 
        $('#neighborhood_doce_x32_014').css('display', 'none');  
        $('#neighborhood_doceDotAndInfo circle').css('display', 'none');
        $('#neighborhood_doceInfoPanel').css('display', 'none');
        $('#neighborhood_doce2004').css('fill', '#DE594D').css('stroke', '#DE594D');
        $('#neighborhood_doce2004').siblings().css('fill', '#FFFFFF').css('stroke', '#474747');
    }

    var resetCandelaria = function () {
        $('#neighborhood_candelaria_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#neighborhood_candelaria_x3C_Path_2004_x3E_').siblings().css('display', 'none');
        $('#neighborhood_candelaria_x32_004_2_').css('display', 'inline');  
        $('#neighborhood_candelaria_x32_005').css('display', 'none'); 
        $('#neighborhood_candelaria_x32_006').css('display', 'none'); 
        $('#neighborhood_candelaria_x32_007').css('display', 'none'); 
        $('#neighborhood_candelaria_x32_008').css('display', 'none'); 
        $('#neighborhood_candelaria_x32_009').css('display', 'none'); 
        $('#neighborhood_candelaria_x32_010').css('display', 'none'); 
        $('#neighborhood_candelaria_x32_011').css('display', 'none'); 
        $('#neighborhood_candelaria_x32_012').css('display', 'none'); 
        $('#neighborhood_candelaria_x32_013').css('display', 'none'); 
        $('#neighborhood_candelaria_x32_014').css('display', 'none');  
        $('#neighborhood_candelariaDotAndInfo circle').css('display', 'none');
        $('#neighborhood_candelariaInfoPanel').css('display', 'none');
        $('#neighborhood_candelaria2004').css('fill', '#DE594D').css('stroke', '#DE594D');
        $('#neighborhood_candelaria2004').siblings().css('fill', '#FFFFFF').css('stroke', '#474747');
    }

    var resetSanJavier = function () {
        $('#neighborhood_sanJavier_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#neighborhood_sanJavier_x3C_Path_2004_x3E_').siblings().css('display', 'none');
        $('#neighborhood_sanJavier_x32_004_2_').css('display', 'inline');  
        $('#neighborhood_sanJavier_x32_005').css('display', 'none'); 
        $('#neighborhood_sanJavier_x32_006').css('display', 'none'); 
        $('#neighborhood_sanJavier_x32_007').css('display', 'none'); 
        $('#neighborhood_sanJavier_x32_008').css('display', 'none'); 
        $('#neighborhood_sanJavier_x32_009').css('display', 'none'); 
        $('#neighborhood_sanJavier_x32_010').css('display', 'none'); 
        $('#neighborhood_sanJavier_x32_011').css('display', 'none'); 
        $('#neighborhood_sanJavier_x32_012').css('display', 'none'); 
        $('#neighborhood_sanJavier_x32_013').css('display', 'none'); 
        $('#neighborhood_sanJavier_x32_014').css('display', 'none');  
        $('#neighborhood_sanJavierDotAndInfo circle').css('display', 'none');
        $('#neighborhood_sanJavierInfoPanel').css('display', 'none');
        $('#neighborhood_sanJavier2004').css('fill', '#DE594D').css('stroke', '#DE594D');
        $('#neighborhood_sanJavier2004').siblings().css('fill', '#FFFFFF').css('stroke', '#474747');
    }

    var resetGuayabal = function () {
        $('#neighborhood_guayabal_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#neighborhood_guayabal_x3C_Path_2004_x3E_').siblings().css('display', 'none');
        $('#neighborhood_guayabal_x32_004_2_').css('display', 'inline');  
        $('#neighborhood_guayabal_x32_005').css('display', 'none'); 
        $('#neighborhood_guayabal_x32_006').css('display', 'none'); 
        $('#neighborhood_guayabal_x32_007').css('display', 'none'); 
        $('#neighborhood_guayabal_x32_008').css('display', 'none'); 
        $('#neighborhood_guayabal_x32_009').css('display', 'none'); 
        $('#neighborhood_guayabal_x32_010').css('display', 'none'); 
        $('#neighborhood_guayabal_x32_011').css('display', 'none'); 
        $('#neighborhood_guayabal_x32_012').css('display', 'none'); 
        $('#neighborhood_guayabal_x32_013').css('display', 'none'); 
        $('#neighborhood_guayabal_x32_014').css('display', 'none');  
        $('#neighborhood_guayabalDotAndInfo circle').css('display', 'none');
        $('#neighborhood_guayabalInfoPanel').css('display', 'none');
        $('#neighborhood_guayabal2004').css('fill', '#DE594D').css('stroke', '#DE594D');
        $('#neighborhood_guayabal2004').siblings().css('fill', '#FFFFFF').css('stroke', '#474747');
    }

    // brings user to neighborhood's specific page when they click the outline from the main page

    $('#neighborhood_x31_2_de_Octubre_14 path').click(function() {
        $('.neighborhood_mainPage').fadeOut(500).css('display', 'none');
        $('.neighborhood_doceDeOctubre').fadeIn(500).css('display', 'inline');
        $('#neighborhood_PopUp_Panel').css('display', 'none'); 
        resetDoce();
    })

    $('#neighborhood_La_Candelaria_14 path').click(function() {
        $('.neighborhood_mainPage').fadeOut(500).css('display', 'none');
        $('.neighborhood_laCandelaria').fadeIn(500).css('display', 'inline'); 
        $('#neighborhood_candelaria_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#neighborhood_PopUp_Panel').css('display', 'none');   
        resetCandelaria();
    })

    $('#neighborhood_San_Javier_14 path').click(function() {
        $('.neighborhood_mainPage').fadeOut(500).css('display', 'none');
        $('.neighborhood_sanJavier').fadeIn(500).css('display', 'inline');
        $('#neighborhood_sanJavier_x3C_Path_2004_x3E_').css('display', 'inline');  
        $('#neighborhood_PopUp_Panel').css('display', 'none'); 
        resetSanJavier();
    })

    $('#neighborhood_Guayabal_14 path').click(function() {
        $('.neighborhood_mainPage').fadeOut(500).css('display', 'none');
        $('.neighborhood_guayabal').fadeIn(500).css('display', 'inline'); 
        $('#neighborhood_guayabal_x3C_Path_2004_x3E_').css('display', 'inline');
        $('#neighborhood_PopUp_Panel').css('display', 'none');
        resetGuayabal();   
    })

    // back to main map

    $('#neighborhood_Return_Button g rect').click(function() {
        $('.neighborhood_doceDeOctubre').fadeOut(500).css('display', 'none');
        $('.neighborhood_laCandelaria').fadeOut(500).css('display', 'none');
        $('.neighborhood_sanJavier').fadeOut(500).css('display', 'none');
        $('.neighborhood_guayabal').fadeOut(500).css('display', 'none');
        $('.neighborhood_mainPage').fadeIn(500).css('display', 'inline');
    })
        
};

$(document).ready(main);
