<?php

    function searchLinear($arr, $x){
        $arrayLength = sizeof($arr);
        for($i=0; $i<$arrayLength; $i++){
            if($arr[$i] == $x){
                return $i;
            }
        }

        return -1;
    }

    $x = 20;
    $array = [34, 45, 29, 30, 20, 18, 232, 63];
    $result = searchLinear($array, $x);
    echo 'The index is: ', $result;
?>