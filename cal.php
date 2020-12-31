<?php
    include "operationclass.php";
    $op= new operation();
    $oper=$_POST["operator"];
    $operand=$_POST["operand"];
    $res=$_POST["res"];
    if($res==0){
        $res=$operand;
        echo $res;
    }
    else{
        if($oper=="*"){
            $rd= $op->multiply($res,$operand); 
            echo $rd;
        }
        if($oper=="+"){
            $rd= $op->add($res,$operand); 
            echo $rd;
        }
        if($oper=="-"){
            $rd= $op->sub($res,$operand); 
            echo $rd;
        }
        if($oper=="/" ){
           if($operand!=0){
            $rd= $op->divide($res,$operand); 
            echo $rd;
           }
           else{
            echo $res=0;
           }
        }
    }    
    
?>