import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int impar = 0;
        int par = 0;
        int num = 0;
        int i = 1;


        while (i <= 10) {
            System.out.println("Número: ");
            num = entrada.nextInt();
            if (num % 2 == 0)
                par++;
            else{
                impar++;
            } i++;
        }
        System.out.println(impar+ " números Impares");
        System.out.println(par+" números Pares");

    }
}
