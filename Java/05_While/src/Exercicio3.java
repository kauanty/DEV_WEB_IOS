import java.util.Scanner;

public class Exercicio3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int counter = 1,pair = 0,  odd = 0, number = 0;

        while (counter <= 10) {
            System.out.println("Digite um número: ");
            number = input.nextInt();
            if (number % 2 == 0)
                pair++;
            else {
                odd++;
            }

            counter++;
        }
        System.out.println("A quantidade de números pares é:" + pair);
        System.out.println("A quantidade de números impares é:" + odd);

    }
}