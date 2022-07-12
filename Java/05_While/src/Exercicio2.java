import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        int number, Backup = 999999999, counter = 0;
        Scanner input = new Scanner(System.in);

        while (counter  <= 10) {

            System.out.println("Digite um número:");
            number = input.nextInt();

            if (number < Backup) {
                Backup = number;
            }
            counter++;
        }
        System.out.println("O menor numero é: " + Backup);
    }
}
