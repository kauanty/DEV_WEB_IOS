import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8;
        for (int i = 0; i < 1; i++) {
            System.out.print("Digite a primeira nota:");
            nota1 = input.nextInt();
            System.out.print("Digite a segunda nota:");
            nota2 = input.nextInt();
            System.out.print("Digite a terceira nota:");
            nota3 = input.nextInt();
            System.out.print("Digite a quarta nota:");
            nota4 = input.nextInt();
            System.out.print("Digite a quinta nota:");
            nota5 = input.nextInt();
            System.out.print("Digite a sexta nota:");
            nota6 = input.nextInt();
            System.out.print("Digite a sétima nota:");
            nota7 = input.nextInt();
            System.out.print("Digite a oitava nota:");
            nota8 = input.nextInt();
            double media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8) / 8;
            System.out.print("A média do aluno é " + media);
        }
    }
}
