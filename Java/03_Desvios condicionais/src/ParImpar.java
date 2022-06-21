import java.util.Scanner;

public class ParImpar {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);


        //Digite o númeroçç
        System.out.println("Digite o Número: ");
        int numero;

        numero = input.nextInt();

        //Calculando se é par ou impar
        if((numero % 2 ) == 0){
            System.out.println("O número " +numero+ "é par");
        }
        else{
            System.out.println("O número " +numero+  " é impar");
        }
        input.close();
    }
    }
