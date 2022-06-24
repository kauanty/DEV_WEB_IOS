import java.util.Scanner;

public class For_Idade  {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int idade;
        int contador, Idades = 0 ;

        for (contador = 0; contador < 5; contador++) {
            System.out.println(" Digite a sua idade ");
            idade = input.nextInt();

            Idades += idade;
        }
    }
}
