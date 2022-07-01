import java.util.Scanner;

public class Exercicio1 {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);
        int contador = 0;
        int[][] numeros = new int[4][4];

        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.println("Digite um número para a posição [" + i + "][" + j + "]:");
                System.out.print("---> ");
                numeros[i][j] = teclado.nextInt();
            }
        }

        System.out.println("\n");
        System.out.println("Imprimindo somente os números maiores que 10");
        System.out.println("== Sua matrix ==");
        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
               if (numeros[i][j] > 10){
                   contador++;
                   System.out.print(numeros[i][j] + "\t");
                }

            }

            System.out.println("");
        }
        System.out.println("\n");
        System.out.println( "Quantidade de numeros maior que 10:"+contador);
        System.out.println( "---> "+contador);
        teclado.close();
    }
}