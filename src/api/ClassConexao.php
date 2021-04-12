<?php 

# Criar Classe de conexao 
abstract class ClassConexao
{
    # Criar método para conectar ao DB 
    protected function conectaDB() 
    {
        try {
            $Con = new PDO("mysql:host=localhost;dbname=reactphp","root","");
            return $Con;
        }catch (PDOException $Erro) {
            return $Erro->getMessage();
        }

    }

}

?>