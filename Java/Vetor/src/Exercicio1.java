import java.util.Scanner;

public class Exercicio1 {
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        int menor = 0;
        int maior = 0;
        double media = 0;
        int[] numeros = new int[10];

        int tamanho = numeros.length;

        for (int i = 0; i < tamanho; i++) {
            System.out.println("Digite um número:");
            System.out.print("---> ");
            numeros[i] = entrada.nextInt();
            System.out.print("\n");
        }
        maior = numeros[0];
        // Maior número
        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
        }
        //Menor Número
        menor = numeros[0];
        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }
        //calculando média
        for (int i = 0; i < numeros.length; i++){
            media += numeros[i];
        }
        System.out.println("O maior número é: " + maior);
        System.out.println("E o menor número é: " + menor);
        System.out.println("A média é: " + media / numeros.length);

        entrada.close();
    }
}

