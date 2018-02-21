// Jocelyn Lorrey 1.00 Pset 2 2/20/18
var exercise = {};


exercise.roman = function(time){

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    //  Looks like a javascript object b/c JSON objects require quots around keys
    //-------------------------------------
    hours   = String(time.getHours()); //make string for indexing
    minutes = String(time.getMinutes());
    seconds = String(time.getSeconds());

    var romanCols = {
        hour_col1 : hours[0], //index string, then make that value a number
        hour_col2 : hours[1],
        min_col1  : minutes[0], 
        min_col2  : minutes[1],
        sec_col1  : seconds[0], 
        sec_col2  : seconds[1]
    };
    return romanCols;
};

exercise.binary = function(time, col){

    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
    //    var binary = { 
    //        position8 : 'off', 
    //        position4 : 'on', 
    //        position2 : 'on', 
    //        position1 : 'on', 
    //    };    
    //----------------------------------------------------------
    romanCols = exercise.roman(time); //unclear if this is given in col or not
    romanVal = romanCols.col //the roman digit associated with column
    binaryVal = romanVal.toString(2) //convert to binary string (bonus: can index strings)
    var binary = {
        "position8" : 
        "position4" :
        "position2" :
        "position1" :
    }
};