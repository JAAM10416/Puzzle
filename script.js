function cambia(pos1, pos2) {
    var temp = document.getElementById(pos1).className;
    document.getElementById(pos1).className = document.getElementById(pos2).className;
    document.getElementById(pos2).className = temp;
}


function mover(row, column) {
    var pos = document.getElementById("pos" + row + column);
    var cuadro = pos.className;
    if (cuadro != "cuadro9") {

        if (column < 3) {
            if (document.getElementById("pos" + row + (column + 1)).className == "cuadro9") {
                cambia("pos" + row + column, "pos" + row + (column + 1));
                return;
            }
        }

        if (column > 1) {
            if (document.getElementById("pos" + row + (column - 1)).className == "cuadro9") {
                cambia("pos" + row + column, "pos" + row + (column - 1));
                return;
            }
        }

        if (row > 1) {
            if (document.getElementById("pos" + (row - 1) + column).className == "cuadro9") {
                cambia("pos" + row + column, "pos" + (row - 1) + column);
                return;
            }
        }

        if (row < 3) {
            if (document.getElementById("pos" + (row + 1) + column).className == "cuadro9") {
                cambia("pos" + row + column, "pos" + (row + 1) + column);
                return;
            }
        }
    }

}