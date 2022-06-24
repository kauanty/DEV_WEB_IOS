import java.util.Scanner;

public class While_Idade  {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int idade;
        int contador = 0;

        while(contador < 5){
            System.out.println("Digite Sua Idade");
            idade = input.nextInt();
            contador++;
        }
    }
}
