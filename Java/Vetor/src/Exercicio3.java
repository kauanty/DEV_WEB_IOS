import java.util.Random;
import java.util.Scanner;

public class Exercicio8P3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int smaller = 99999999, numbers[] = new int[10];

        Random sorteio = new Random();

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = sorteio.nextInt(10) + 1;

            if (numbers[i] < smaller)
                smaller = numbers[i];

            System.out.print(" -->" + numbers[i] + "<-- ");


        }
        System.out.println(" ");
        System.out.println("O menor número é: " + smaller);
    }
}