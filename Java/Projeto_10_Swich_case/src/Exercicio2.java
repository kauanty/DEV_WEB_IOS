import java.util.Scanner;

public class Exercicio2 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double num1, num2, num3;
        System.out.println("    = = = = = Escolha o primeiro número = = = = =    ");
        num1 = input.nextDouble();
        System.out.println("    = = = = = Escolha o segundo número = = = = =    ");
        num2 = input.nextDouble();
        System.out.println("    = = = = = Escolha o terceiro número = = = = =    ");
        num3 = input.nextDouble();

        if (num1 == num2 & num1 == num3) {
            System.out.println("Os números são iguais");
        } else {
            if (num1 > num2 & num1 > num2) {
                System.out.println( + num1 + "  é o maior número");
            } else if (num2 > num1 & num2 > num3) {
                System.out.println( + num2 + "  é o maior número");
            } else {
                System.out.println( + num3 + "  é o maior número");
            }

            input.close();
        }
    }
}