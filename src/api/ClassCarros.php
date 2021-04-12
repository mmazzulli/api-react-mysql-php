<?php 

include('ClassConexao.php');

class ClassCarros extends ClassConexao 
{
    # Exibição dos carros em um JSON
    public function exibeCarros()
    {
        $BFetch=$this->conectaDB()->prepare("SELECT * from carros");
        $BFetch->execute();

        $j=[];
        $i=0;
        $id=0;
        $Marca="";
        $Modelo="";
        $Ano="";

        while(
            $fetch = $BFetch->fetch(PDO::FETCH_ASSOC)
            ) 
        {
            $json_array[] = $fetch;
            // $j[$i] = [
            //     "$id" => $fetch['id'],
            //     "$Marca" => $fetch['Marca'],
            //     "$Modelo" => $fetch['Modelo'],
            //     "$Ano" => $fetch['Ano']
            // ];
           
            // $i++;
            
        }

        Header("Access-Control-Allow-Origin: * ");
        Header("Content-type: Application/json");
        
        $myJson = json_encode($json_array);

        // print_r($myJson);
        echo  $myJson;


    }
}

?> 