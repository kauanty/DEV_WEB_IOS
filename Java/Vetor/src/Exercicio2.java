import java.util.Scanner;

public class Exercicio8P2 {
    public static void main(String[] args) {
        String people[] = new String[5];
        Scanner input = new Scanner(System.in);

        for (int i = 0; i < people.length; i++) {
            System.out.println("Digite um nome: ");
            people[i] = input.nextLine();
        }
            
        for (int k = 4; k >= 0; k--) {
            System.out.println(people[k]);
        }
    }
}
