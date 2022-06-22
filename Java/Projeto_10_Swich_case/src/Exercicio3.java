import java.util.Scanner;

public class Exercicio3 {

    public static void main(String[] args) {
        System.out.println("=====Escolha um dia semana=====");
        System.out.print("  1- Domingo");
        System.out.print("  2- Segunda-feira");
        System.out.print("  3- Terça-feira");
        System.out.println("    4- Quarta-feira");
        System.out.print("    5- Quinta-feira");
        System.out.print("    6- Sexta-feira");
        System.out.println("    7- Sabádo");

        Scanner input = new Scanner(System.in);
        int dia = input.nextInt(); // Lê a opção digitada

        switch (dia) {

            case 1:
                System.out.println("Sua consulta foi marcada para o Domingo");
                break;
            case 2:
                System.out.println("Sua consulta foi marcada para a Segunda-feira");
                break;
            case 3:
                System.out.println("Sua consulta foi marcada para o Terça-feira");
                break;
            case 4:
                System.out.println("Sua consulta foi marcada para a Quarta-feira");
                break;
            case 5:
                System.out.println("Sua consulta foi marcada para a Quinta-feira");
                break;
            case 6:
                System.out.println("Sua consulta foi marcada para a Sexta-feira");
                break;
            case 7:
                System.out.println("Sua consulta foi marcada para o Sabado");
                break;
            default:
                System.out.println("Escreva de 1 a 7 !!!");
        }

        input.close();
    }
}
