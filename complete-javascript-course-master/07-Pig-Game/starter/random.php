<?php
    $random = rand(1, 6);
    $(document).ready(function(){
        $("button").click(function(){
            $(this).addClass("show");
        });
    });
?>