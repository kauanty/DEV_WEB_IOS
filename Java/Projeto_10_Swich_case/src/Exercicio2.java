import java.util.Scanner;

public class Exercicio2 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num1, num2, num3;
        System.out.println("    = = = = = Escolha o primeiro número = = = = =    ");
        num1 = input.nextInt();
        System.out.println("    = = = = = Escolha o segundo número = = = = =    ");
        num2 = input.nextInt();
        System.out.println("    = = = = = Escolha o terceiro número = = = = =    ");
        num3 = input.nextInt();

        if (num1 == num2 & num1 == num3) {
            System.out.println("Os números sao iguais");
        } else {
            if (num1 > num2 & num1 > num2) {
                System.out.println("O " + num1 + "  é o maior número");
            } else if (num2 > num1 & num2 > num3) {
                System.out.println("O " + num2 + "  é o maior número");
            } else {
                System.out.println("O " + num3 + "  é o maior número");
            }

            input.close();
        }
    }
}