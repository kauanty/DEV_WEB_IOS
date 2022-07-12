import java.util.Scanner;

public class Exercicio {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number;

        System.out.print("Digite um número: ");
        number = input.nextInt();
        double root = Math.sqrt(number);
        System.out.println(" Tabuada do " + number );
        for (int i = 0; i <= 10; i++) {
            System.out.println(+number + " x " + i + " = " + (i * number));
        }
        if (number % 2 == 0)
            System.out.println(number + " é par");
        else
            System.out.println(number + " é impar");
        System.out.printf("A raiz quadrada de " + number + " é %.2f %n ", root);
    }
}
