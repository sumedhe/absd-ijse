$(document).ready(function() {

    var divTemp = document.getElementById("divNums");
    for (var i = 8; i >= 1; i--) {
        divTemp.innerHTML = divTemp.innerHTML + "<div style='line-height:65px;'>" + i + "</div>";
    }
    var divTemp = document.getElementById("divChars");
    var charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (var i = 1; i <= 8; i++) {
        divTemp.innerHTML = divTemp.innerHTML + "<span style='width:65px;display:inline-block;text-align:center'>" + charArray[i - 1] + "</span>";
    }
    
});

$(function() {
    // Initializing chess board
    setDefaultAttributes4Boxes();
    setDefaultAttributes4Symbols();

    $("div.box").mousedown(function() {

        var curX = $(this).attr("XPos");
        var curY = $(this).attr("YPos");
        var tmpChessSymbols = $(".chessSymbols");
        var bInit = true;
        for (var i = 0; i < tmpChessSymbols.length; i++) {
            if ($(tmpChessSymbols[i]).attr("XPos") === curX) {
                if ($(tmpChessSymbols[i]).attr("YPos") === curY) {
                    bInit = false;
                    break;
                }
            }
        }
        if (bInit) {
            initializeBoxes();
        }

    });

    $(".chessSymbols").mousedown(function() {

        initializeBoxes();
        calculateDPath(this);
        colorOwn(this);

        $("div.higlightedBoxes").droppable({
            drop: function(event, ui) {
                //$("div.higlightedBoxes").droppable('destroy');
            }
        });
        $("div.enemyBoxes").droppable({
            drop: function(event, ui) {
                //$("div.higlightedBoxes").droppable('destroy');
            }
        });        

    });

    $(".chessSymbols").mouseup(function() {
        $(this).draggable({
            revert: function(obj) {
                if (obj) {

                    // Let's change the child
                    var tmpBoxes = $("div.box");
                    var child = null;
                    for (var i = 0; i < tmpBoxes.length; i++) {
                        // Find the previous box who owns the child and detach the child
                        var curXPos = $(this).attr("XPos");
                        var curYPos = $(this).attr("YPos");
                        if ($(tmpBoxes[i]).attr("XPos") === curXPos) {
                            if ($(tmpBoxes[i]).attr("YPos") === curYPos) {
                                child = $(tmpBoxes[i]).children().detach();
                                break;
                            }
                        }
                    }
                    for (var i = 0; i < tmpBoxes.length; i++) {
                        // Find the new box who owns the child and atach the child
                        var curXPos = $(obj).attr("XPos");
                        var curYPos = $(obj).attr("YPos");
                        if ($(tmpBoxes[i]).attr("XPos") === curXPos) {
                            if ($(tmpBoxes[i]).attr("YPos") === curYPos) {
                                if ($(tmpBoxes[i]).hasClass('enemyBoxes')){
                                    $(tmpBoxes[i]).children().fadeOut(1000);
                                    setTimeout(function(){
                                        $(tmpBoxes[i]).children().detach();    
                                        $(child).css('left', 0);
                                        $(child).css('top', 0);
                                        $(tmpBoxes[i]).prepend(child);                                        
                                    },1000);
                                    
                                }else{
                                    $(child).css('left', 0);
                                    $(child).css('top', 0);
                                    $(tmpBoxes[i]).prepend(child);
                                }
                                break;
                            }
                        }
                    }

                    // Let's set new positions
                    $(this).attr("XPos", $(obj).attr("XPos"));
                    $(this).attr("YPos", $(obj).attr("YPos"));
                    $(this).draggable('destroy');

                    initializeBoxes();
                    return false;
                }
                return true;
            }

        }
        );

    });


    $("div.box").hover(function() {
        //console.log("(" + $(this).attr("XPos") + "," + $(this).attr("YPos") + ")") ;
    });

});

function setDefaultAttributes4Symbols() {
    /* Here are the attributes and thier propable values,
     *  1. Symbol type = {ROOK, KNIGHT, BISHOP, KING, QUEEN, PAWN}
     *  2. Team = {Black, White}
     *  3. XPos = {a,b,c,d,e,f,g,h}
     *  4. YPos = {1,2,3,4,5,6,7,8}
     *  */

    // Black team
    //******************************************************************
    var divTemp = $("#div8 div .chessSymbols");

    for (var i = 1; i <= divTemp.length; i++) {

        // For rooks
        if ((i === 1) || (i === 8)) {
            if (i === 1) {
                $(divTemp[i - 1]).attr({
                    Type: "ROOK",
                    Team: "BLACK",
                    XPos: "a",
                    YPos: 8
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "ROOK",
                    Team: "BLACK",
                    XPos: "h",
                    YPos: 8
                });
            }
        }
        // For knights
        else if ((i === 2) || (i === 7)) {
            if (i === 2) {
                $(divTemp[i - 1]).attr({
                    Type: "KNIGHT",
                    Team: "BLACK",
                    XPos: "b",
                    YPos: 8
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "KNIGHT",
                    Team: "BLACK",
                    XPos: "g",
                    YPos: 8
                });
            }
        }
        // For bishops
        else if ((i === 3) || (i === 6)) {
            if (i === 3) {
                $(divTemp[i - 1]).attr({
                    Type: "BISHOP",
                    Team: "BLACK",
                    XPos: "c",
                    YPos: 8
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "BISHOP",
                    Team: "BLACK",
                    XPos: "f",
                    YPos: 8
                });
            }
        }
        // For queen
        else if (i === 4) {
            $(divTemp[i - 1]).attr({
                Type: "QUEEN",
                Team: "BLACK",
                XPos: "d",
                YPos: 8
            });
        }
        // For king
        else {
            $(divTemp[i - 1]).attr({
                Type: "KING",
                Team: "BLACK",
                XPos: "e",
                YPos: 8
            });
        }
    }

    divTemp = $("#div7 div .chessSymbols");

    for (var i = 1; i <= divTemp.length; i++) {
        var xPosS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        $(divTemp[i - 1]).attr({
            Type: "PAWN",
            Team: "BLACK",
            XPos: xPosS[i - 1],
            YPos: 7
        });
    }

    // White team
    //******************************************************************
    divTemp = $("#div1 div .chessSymbols");

    for (var i = 1; i <= divTemp.length; i++) {

        // For rooks
        if ((i === 1) || (i === 8)) {
            if (i === 1) {
                $(divTemp[i - 1]).attr({
                    Type: "ROOK",
                    Team: "WHITE",
                    XPos: "a",
                    YPos: 1
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "ROOK",
                    Team: "WHITE",
                    XPos: "h",
                    YPos: 1
                });
            }
        }
        // For knights
        else if ((i === 2) || (i === 7)) {
            if (i === 2) {
                $(divTemp[i - 1]).attr({
                    Type: "KNIGHT",
                    Team: "WHITE",
                    XPos: "b",
                    YPos: 1
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "KNIGHT",
                    Team: "WHITE",
                    XPos: "g",
                    YPos: 1
                });
            }
        }
        // For bishops
        else if ((i === 3) || (i === 6)) {
            if (i === 3) {
                $(divTemp[i - 1]).attr({
                    Type: "BISHOP",
                    Team: "WHITE",
                    XPos: "c",
                    YPos: 1
                });
            } else {
                $(divTemp[i - 1]).attr({
                    Type: "BISHOP",
                    Team: "WHITE",
                    XPos: "f",
                    YPos: 1
                });
            }
        }
        // For queen
        else if (i === 4) {
            $(divTemp[i - 1]).attr({
                Type: "QUEEN",
                Team: "WHITE",
                XPos: "d",
                YPos: 1
            });
        }
        // For king
        else {
            $(divTemp[i - 1]).attr({
                Type: "KING",
                Team: "WHITE",
                XPos: "e",
                YPos: 1
            });
        }
    }

    divTemp = $("#div2 div .chessSymbols");

    for (var i = 1; i <= divTemp.length; i++) {
        var xPosS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        $(divTemp[i - 1]).attr({
            Type: "PAWN",
            Team: "WHITE",
            XPos: xPosS[i - 1],
            YPos: 2
        });
    }
}

function setDefaultAttributes4Boxes() {
    /* Here are the attributes and thier propable values,
     *  1. XPos = {a,b,c,d,e,f,g,h}
     *  2. YPos = {1,2,3,4,5,6,7,8}
     *  */

    for (var i = 1; i <= 8; i++) {
        var divTemp = $("#div" + i + " div.box");
        for (var j = 0; j < divTemp.length; j++) {
            var xPosS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            $(divTemp[j]).attr({
                XPos: xPosS[j],
                YPos: i
            });
        }
    }
}

function calculateDPath(chessSymbol) {
    /*  This is the process of this method.
     *  Major is calculating the path of a chess symbol.
     *      1. Identify the symbol type
     *      2. Get it's current location on the board.
     *      3. Calculating the paths, "where it can go"
     *          I.  When finding the path search for blocks
     *          II. Color where the paths are
     *          III.Color the enemy boxes
     */

    if ($(chessSymbol).attr("Type") === "ROOK") {
        // Where is he now? (curXPos,curYPos)
        var curXPos = convertRealXPos($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));
        // Let's find out where he can go
        if ((curXPos - 1) !== 0) {
            for (var i = curXPos - 1; i > 0; i--) {
                var reObj = isHereSomeone(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(i, curYPos, true);
                    }
                    break;
                }
                colorMe(i, curYPos, false);

            }
            for (var i = curXPos + 1; i <= 8; i++) {
                var reObj = isHereSomeone(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(i, curYPos, true);
                    }
                    break;
                }
                colorMe(i, curYPos, false);

            }
        } else {
            for (var i = 2; i <= 8; i++) {
                var reObj = isHereSomeone(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(i, curYPos, true);
                    }
                    break;
                }
                colorMe(i, curYPos, false);

            }
        }

        if ((curYPos - 1) !== 0) {

            for (var i = curYPos - 1; i > 0; i--) {
                var reObj = isHereSomeone(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos, i, true);
                    }
                    break;
                }
                colorMe(curXPos, i, false);
            }


            for (var i = (curYPos + 1); i <= 8; i++) {
                var reObj = isHereSomeone(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos, i, true);
                    }
                    break;
                }
                colorMe(curXPos, i, false);
            }
        } else {
            for (var i = 2; i <= 8; i++) {
                var reObj = isHereSomeone(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos, i, true);
                    }
                    break;
                }
                colorMe(curXPos, i, false);
            }
        }

    }

    else if ($(chessSymbol).attr("Type") === "KNIGHT") {
        // Where is he now? (curXPos,curYPos)
        var curXPos = convertRealXPos($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));
        // Logic #1
        if (curXPos - 2 > 0) {
            if (curYPos + 1 < 9) {
                var reObj = isHereSomeone(curXPos - 2, curYPos + 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos - 2, curYPos + 1, true);
                    }
                } else {
                    colorMe(curXPos - 2, curYPos + 1, false);
                }
            }
            if (curYPos - 1 > 0) {
                var reObj = isHereSomeone(curXPos - 2, curYPos - 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos - 2, curYPos - 1, true);
                    }
                } else {
                    colorMe(curXPos - 2, curYPos - 1, false);
                }
            }
        }
        // Logic #2
        if (curXPos + 2 > 0) {
            if (curYPos + 1 < 9) {
                var reObj = isHereSomeone(curXPos + 2, curYPos + 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos + 2, curYPos + 1, true);
                    }
                } else {
                    colorMe(curXPos + 2, curYPos + 1, false);
                }
            }
            if (curYPos - 1 > 0) {
                var reObj = isHereSomeone(curXPos + 2, curYPos - 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos + 2, curYPos - 1, true);
                    }
                } else {
                    colorMe(curXPos + 2, curYPos - 1, false);
                }
            }
        }
        // Logic #3
        if (curYPos - 2 > 0) {
            if (curXPos + 1 < 9) {
                var reObj = isHereSomeone(curXPos + 1, curYPos - 2);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos + 1, curYPos - 2, true);
                    }
                } else {
                    colorMe(curXPos + 1, curYPos - 2, false);
                }
            }
            if (curXPos - 1 > 0) {
                var reObj = isHereSomeone(curXPos - 1, curYPos - 2);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos - 1, curYPos - 2, true);
                    }
                } else {
                    colorMe(curXPos - 1, curYPos - 2, false);
                }
            }
        }
        // Logic #4
        if (curYPos + 2 > 0) {
            if (curXPos + 1 < 9) {
                var reObj = isHereSomeone(curXPos + 1, curYPos + 2);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos + 1, curYPos + 2, true);
                    }
                } else {
                    colorMe(curXPos + 1, curYPos + 2, false);
                }
            }
            if (curXPos - 1 > 0) {
                var reObj = isHereSomeone(curXPos - 1, curYPos + 2);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos - 1, curYPos + 2, true);
                    }
                } else {
                    colorMe(curXPos - 1, curYPos + 2, false);
                }
            }
        }
    }

    else if ($(chessSymbol).attr("Type") === "BISHOP") {
        // Where is he now? (curXPos,curYPos)
        var curXPos = convertRealXPos($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));
        // Between [0-90] degrees
        var tmpYPos = curYPos;
        for (var x = curXPos + 1; x <= 8; x++) {
            tmpYPos++;
            if (tmpYPos > 8)
                break;
            var reObj = isHereSomeone(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(x, tmpYPos, true);
                }
                break;
            } else {
                colorMe(x, tmpYPos, false);
            }
        }
        // Between [90-180] degrees
        tmpYPos = curYPos;
        for (var x = curXPos - 1; x >= 1; x--) {
            tmpYPos++;
            if (tmpYPos > 8)
                break;
            var reObj = isHereSomeone(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(x, tmpYPos, true);
                }
                break;
            } else {
                colorMe(x, tmpYPos, false);
            }
        }
        // Between [180-270] degrees
        tmpYPos = curYPos;
        for (var x = curXPos - 1; x >= 1; x--) {
            tmpYPos--;
            if (tmpYPos < 1)
                break;
            var reObj = isHereSomeone(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(x, tmpYPos, true);
                }
                break;
            } else {
                colorMe(x, tmpYPos, false);
            }
        }
        // Between [270-360] degrees
        tmpYPos = curYPos;
        for (var x = curXPos + 1; x <= 8; x++) {
            tmpYPos--;
            if (tmpYPos < 1)
                break;
            var reObj = isHereSomeone(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(x, tmpYPos, true);
                }
                break;
            } else {
                colorMe(x, tmpYPos, false);
            }
        }
    }

    else if ($(chessSymbol).attr("Type") === "QUEEN") {
        // Where is she now? (curXPos,curYPos)
        var curXPos = convertRealXPos($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));

        // Queen has rook qualities

        if ((curXPos - 1) !== 0) {
            for (var i = curXPos - 1; i > 0; i--) {
                var reObj = isHereSomeone(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(i, curYPos, true);
                    }
                    break;
                }
                colorMe(i, curYPos, false);

            }
            for (var i = curXPos + 1; i <= 8; i++) {
                var reObj = isHereSomeone(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(i, curYPos, true);
                    }
                    break;
                }
                colorMe(i, curYPos, false);

            }
        } else {
            for (var i = 2; i <= 8; i++) {
                var reObj = isHereSomeone(i, curYPos);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(i, curYPos, true);
                    }
                    break;
                }
                colorMe(i, curYPos, false);

            }
        }

        if ((curYPos - 1) !== 0) {

            for (var i = curYPos - 1; i > 0; i--) {
                var reObj = isHereSomeone(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos, i, true);
                    }
                    break;
                }
                colorMe(curXPos, i, false);
            }


            for (var i = (curYPos + 1); i <= 8; i++) {
                var reObj = isHereSomeone(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos, i, true);
                    }
                    break;
                }
                colorMe(curXPos, i, false);
            }
        } else {
            for (var i = 2; i <= 8; i++) {
                var reObj = isHereSomeone(curXPos, i);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos, i, true);
                    }
                    break;
                }
                colorMe(curXPos, i, false);
            }
        }

        // ------------------------------------------------------------------------------

        // Queen has bishop qualities

        // Between [0-90] degrees
        var tmpYPos = curYPos;
        for (var x = curXPos + 1; x <= 8; x++) {
            tmpYPos++;
            if (tmpYPos > 8)
                break;
            var reObj = isHereSomeone(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(x, tmpYPos, true);
                }
                break;
            } else {
                colorMe(x, tmpYPos, false);
            }
        }
        // Between [90-180] degrees
        tmpYPos = curYPos;
        for (var x = curXPos - 1; x >= 1; x--) {
            tmpYPos++;
            if (tmpYPos > 8)
                break;
            var reObj = isHereSomeone(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(x, tmpYPos, true);
                }
                break;
            } else {
                colorMe(x, tmpYPos, false);
            }
        }
        // Between [180-270] degrees
        tmpYPos = curYPos;
        for (var x = curXPos - 1; x >= 1; x--) {
            tmpYPos--;
            if (tmpYPos < 1)
                break;
            var reObj = isHereSomeone(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(x, tmpYPos, true);
                }
                break;
            } else {
                colorMe(x, tmpYPos, false);
            }
        }
        // Between [270-360] degrees
        tmpYPos = curYPos;
        for (var x = curXPos + 1; x <= 8; x++) {
            tmpYPos--;
            if (tmpYPos < 1)
                break;
            var reObj = isHereSomeone(x, tmpYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(x, tmpYPos, true);
                }
                break;
            } else {
                colorMe(x, tmpYPos, false);
            }
        }

    }

    else if ($(chessSymbol).attr("Type") === "KING") {
        // Where is he now? (curXPos,curYPos)
        var curXPos = convertRealXPos($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));
        // #Logic 1 in current X position
        if (curYPos + 1 < 9) {
            var reObj = isHereSomeone(curXPos, curYPos + 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(curXPos, curYPos + 1, true);
                }
            } else {
                colorMe(curXPos, curYPos + 1, false);
            }
        }
        if (curYPos - 1 > 0) {
            var reObj = isHereSomeone(curXPos, curYPos - 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(curXPos, curYPos - 1, true);
                }
            } else {
                colorMe(curXPos, curYPos - 1, false);
            }
        }
        // #Logic 2 in (current X + 1) position
        if (curXPos + 1 < 9) {
            // Case 1: current Y
            var reObj = isHereSomeone(curXPos + 1, curYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(curXPos + 1, curYPos, true);
                }
            } else {
                colorMe(curXPos + 1, curYPos, false);
            }
            // Case 2: (current Y + 1)
            reObj = isHereSomeone(curXPos + 1, curYPos + 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(curXPos + 1, curYPos + 1, true);
                }
            } else {
                colorMe(curXPos + 1, curYPos + 1, false);
            }
            // Case 3: (current Y - 1)
            reObj = isHereSomeone(curXPos + 1, curYPos - 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(curXPos + 1, curYPos - 1, true);
                }
            } else {
                colorMe(curXPos + 1, curYPos - 1, false);
            }
        }
        // #Logic 3 in (current X - 1) position
        if (curXPos + 1 < 9) {
            // Case 1: current Y
            var reObj = isHereSomeone(curXPos - 1, curYPos);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(curXPos - 1, curYPos, true);
                }
            } else {
                colorMe(curXPos - 1, curYPos, false);
            }
            // Case 2: (current Y + 1)
            reObj = isHereSomeone(curXPos - 1, curYPos + 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(curXPos - 1, curYPos + 1, true);
                }
            } else {
                colorMe(curXPos - 1, curYPos + 1, false);
            }
            // Case 3: (current Y - 1)
            reObj = isHereSomeone(curXPos - 1, curYPos - 1);
            if (reObj.is) {
                if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                    colorMe(curXPos - 1, curYPos - 1, true);
                }
            } else {
                colorMe(curXPos - 1, curYPos - 1, false);
            }
        }
    }

    else {
        // Where is he now? (curXPos,curYPos)
        var curXPos = convertRealXPos($(chessSymbol).attr("XPos"));
        var curYPos = parseInt($(chessSymbol).attr("YPos"));

        if (curYPos + 1 < 9) {

            if ($(chessSymbol).attr("Team") === "WHITE") {
                var reObj = isHereSomeone(curXPos, curYPos + 1);
                if (!reObj.is) {
                    colorMe(curXPos, curYPos + 1, false);
                    if (curYPos === 2) {
                        reObj = isHereSomeone(curXPos, curYPos + 2);
                        if (!reObj.is) {
                            colorMe(curXPos, curYPos + 2, false);
                        }
                    }
                }
            }
            if (curXPos - 1 > 0) {
                reObj = isHereSomeone(curXPos - 1, curYPos + 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos - 1, curYPos + 1, true);
                    }
                }
            }
            if (curXPos + 1 < 9) {
                reObj = isHereSomeone(curXPos + 1, curYPos + 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos + 1, curYPos + 1, true);
                    }
                }
            }
        }
        if (curYPos - 1 > 0) {

            if ($(chessSymbol).attr("Team") === "BLACK") {
                var reObj = isHereSomeone(curXPos, curYPos - 1);
                if (!reObj.is) {
                    colorMe(curXPos, curYPos - 1, false);
                    if (curYPos === 7) {
                        reObj = isHereSomeone(curXPos, curYPos - 2);
                        if (!reObj.is) {
                            colorMe(curXPos, curYPos - 2, false);
                        }
                    }
                }
            }
            if (curXPos - 1 > 0) {
                reObj = isHereSomeone(curXPos - 1, curYPos - 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos - 1, curYPos - 1, true);
                    }
                }
            }
            if (curXPos + 1 < 9) {
                reObj = isHereSomeone(curXPos + 1, curYPos - 1);
                if (reObj.is) {
                    if ($(reObj.who).attr("Team") !== $(chessSymbol).attr("Team")) {
                        colorMe(curXPos + 1, curYPos - 1, true);
                    }
                }
            }
        }
    }
}

function convertRealXPos(charXPos) {
    switch (charXPos) {
        case "a":
            {
                return 1;
                break;
            }
        case "b":
            {
                return 2;
                break;
            }
        case "c":
            {
                return 3;
                break;
            }
        case "d":
            {
                return 4;
                break;
            }
        case "e":
            {
                return 5;
                break;
            }
        case "f":
            {
                return 6;
                break;
            }
        case "g":
            {
                return 7;
                break;
            }
        case "h":
            {
                return 8;
                break;
            }
    }
}

function isHereSomeone(xPos, yPos) {
    var chessSymbols = $(".chessSymbols");
    var returnObject = new Object();
    returnObject.who = null;
    returnObject.is = false;
    for (var i = 0; i < chessSymbols.length; i++) {
        if ((convertRealXPos($(chessSymbols[i]).attr("XPos")) === xPos) &&
                (parseInt($(chessSymbols[i]).attr("YPos")) === yPos)) {
            returnObject.is = true;
            returnObject.who = $(chessSymbols[i]);
            return returnObject;
        }
    }
    return returnObject;
}

function initializeBoxes() {
    $("div.higlightedBoxes").droppable('destroy');
    $("div.enemyBoxes").droppable('destroy');
    var divBoxes = $(".higlightedBoxes");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("higlightedBoxes");
    }
    divBoxes = $(".enemyBoxes");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("enemyBoxes");
    }
    divBoxes = $(".colorOwnBox");
    for (var i = 0; i < divBoxes.length; i++) {
        $(divBoxes[i]).removeClass("colorOwnBox");
    }    
}

function colorMe(xPos, yPos, enemy) {
    var divName = "#div" + yPos + " div.box";
    var divBoxes = $(divName);
    for (var i = 0; i < divBoxes.length; i++) {
        if ((i + 1) === xPos) {
            if (!enemy) {
                $(divBoxes[i]).addClass("higlightedBoxes");
            } else {
                $(divBoxes[i]).addClass("enemyBoxes");
            }
            break;
        }
    }
}

function colorOwn(Me) {
    // Where am I now? (curXPos,curYPos)
    var curXPos = convertRealXPos($(Me).attr("XPos"));
    var curYPos = parseInt($(Me).attr("YPos"));
    var divName = "#div" + curYPos + " div.box";
    var divBoxes = $(divName);
    for (var i = 0; i < divBoxes.length; i++) {
        if ((i + 1) === curXPos) {
            $(divBoxes[i]).addClass("colorOwnBox");
            break;
        }
    }
}