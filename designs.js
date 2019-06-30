// Select color input
// Select size input

var color;          // define a varibale for color
var height, width; // define a varibale for pixcel size


// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event){                   // choose grid size  jquery with id & event for value picker
    event.preventDefault();                               // will make the grid stable

    height = $('#inputHeight').val();                    // now we will get the values for height
    width =  $('#inputWidth').val();                    // now we will get the values for width

    makeGrid(height,width);                            // after getting values make Grid call
    
})
function makeGrid(row, col) {
    $('tr').remove();                                 //  remove any table that exist (refresh)

    //Your code goes here!
  
   for (var i =1; i<= row; i++){                    // creating a loop for tables
       $('table').append('<tr></tr>');             //use canvas and append table row
       for(var j =1; j <= col; j++){
           $('tr ; last'). append('<td></td>');   // pick table row and add column
          }
       }


    $('td'). click(function addColor(){         //find table data add color
    color = $('#colorPicker').val();         //get value from color picker and add it to pixels

    if ($(this).attr('style')){               //if cell has style attribute
        $(this).removeAttr('style')          // if existing attribute clear it, danamically we can add color as we desire
    }
    else{                                   //add color
        $(this).attr('style', 'background-color;' + color); 
     }
       
    })
}   
