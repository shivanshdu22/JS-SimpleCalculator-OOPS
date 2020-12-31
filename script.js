input="";   
var c1=0;
var operator= ["+"];
var res=0;   
$(document).ready(function(){           
    $(".operation").click(function(){		         
        var x= $(this).val();
        operator.unshift(x);
        c1 = document.getElementById("display").value;
        $.ajax({
                url:'cal.php',
                type:'POST',
                data:{operand:c1 ,
                        operator:operator[1],
                        res:res},
                success: function(result){ 
                            res=result;
                            document.getElementById("display").value=res;
                            input="";
                            if(operator.length==3){
                                operator.pop(2);
                            }
                            console.log(operator);
                            },
                error:function(){
                        alert ('error');
                    }
            });                    
    });
    $(".operatieq").click(function(){
        c1 = document.getElementById("display").value;
        $.ajax({
                url:'cal.php',
                type:'POST',
                data:{operand:c1 ,
                    operator:operator[0],
                    res:res },
                success: function(result){ 
                        res=result;
                        document.getElementById("display").value=res;
                        input="";
                        res=0;
                    },
                error:function(){
                    alert ('error');
                    }
        });
    });
});           
function store(n){   
    input+=n;
    document.getElementById("display").value=input;
}            
function cle(){    
    c1=0;
    res=0;
    document.getElementById("display").value =""
}    