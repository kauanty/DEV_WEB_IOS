import java.util.Scanner;

public class Exercicio1 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num1, num2;

        System.out.println("    = = = = = Escolha um número = = = = =    ");
        num1 = input.nextInt();

        System.out.println("    = = = = = Escolha outro número = = = = =    ");
        num2 = input.nextInt();
        if (num1 > num2) {
            System.out.println("Números em ordem decrescente");
            System.out.println(num1);
            System.out.println(num2);
        }
        else {
            System.out.println("Números em ordem decrescente");
            System.out.println(num2);
            System.out.println(num1);
        }

        input.close();
    }
}
