var block = {
    rows: 10,
    columns: 10,
    height: 20,
    width: 20,
    color: "blue",
    create: function() {
        for (var i = 0; i <= this.rows; i++) {
            var newRow = $("<tr>");
            for (var j = 1; j <= this.columns; j++) {
                var newBox = $("<td>");
                newBox.attr("id", String(i)+"x"+String(j));
                newBox.on("click", function() {
                    if(this.value == block.color) {
                        $("#" + String(this.id)).attr("style", "background: black;")
                        this.value = "black"
                    } else {
                        $("#" + String(this.id)).attr("style", "background: " +block.color +";")
                        this.value = block.color;
                    }
                })
                block.changeSize();
                newRow.append(newBox);
               
            }
            $("#box").append(newRow);
            
        }
        var temp =(parseInt(block.width) + 10)*parseInt(block.columns)
        $("#container").attr("style", "width: "+ String(temp) + "px;");
        
    },
    changeSize: function() {
        $("td").attr("style", "height: "+ String(block.height) + "px; width: "+ String(block.width) + "px;")
        
    }
}

$("#make").on("click", function(){
    $("#box").empty();
    block.rows = $("#row").val();
    block.columns = $("#col").val();
    block.height = $("#height").val();
    block.width = $("#width").val();
    block.create();
})

$(".color").on("click", function(){
    block.color = this.id;
    $(".color").attr("style", "border: 2px solid black");
    $("#" + String(this.id)).attr("style", "border: 7px solid black");
})




block.create();
$("#blue").attr("style", "border: 7px solid black");
