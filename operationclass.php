<?php

class operation{
    public function multiply($res,$operand)  
    {
        $res=$res*$operand;
        return $res;
    }
    public function add($res,$operand)  
    {
        $res=$res+$operand;
        return $res;
    }
    public function sub($res,$operand)  
    {
        $res=$res-$operand;
        return $res;
    }
    public function divide($res,$operand)  
    {
        $res=$res/$operand;
        return $res;
    }
}

?>