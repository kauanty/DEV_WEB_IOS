import java.util.Locale;
import java.util.Scanner;

public class Exercicio9 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String fruits[] = new String[5];

        for (int i = 0; i < 5; i++) {
            System.out.println("Digite uma fruta " + (i + 1) + " :");
            String empty = input.nextLine();
            boolean verification = true;

            for (int j = 0; j < 5; j++) {
                if (fruits[j] == null) {
                    continue;
                }
                if (empty.compareTo(fruits[j]) == 0 || empty.isEmpty() || empty.length() < 3) {
                    System.out.println("Insira um nome válido");
                    verification = false;
                    break;
                }
            }

            if (verification) {
                fruits[i] = empty;
            }
        }



        for (int i = 0; i < fruits.length; i++) {
            if (fruits[i] != null) {
                System.out.print("Em maiúsculo: " + fruits[i].toUpperCase());
                System.out.print("Em minúsculo: " + fruits[i].toLowerCase());
                System.out.println(" ");
            }
        }
    }
}
