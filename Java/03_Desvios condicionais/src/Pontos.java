import java.util.Scanner;

public class Pontos {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int pontos = 0;

        //Numero de pontos
        System.out.println("Número de pontos: ");
        pontos = entrada.nextInt();

        if (pontos >= 1000) {
            System.out.println("Passou de fase");
        }
        else {
                System.out.println("Perdeu");
            }
    }
}