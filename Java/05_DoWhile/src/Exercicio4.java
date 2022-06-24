import java.util.Scanner;

public class Exercicio4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite 10 números");
        int contador = 1;
        int n = 99;
        int p = 11;
        while (contador < p) {
            System.out.println("Número:");
            int num = input.nextInt();
            if(num < n){
                n = num;
            }
            contador++;
        }
        System.out.println(n+ " É o menor número");


        input.close();
    }
}