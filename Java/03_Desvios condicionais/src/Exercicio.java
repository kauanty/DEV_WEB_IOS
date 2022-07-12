import java.util.Scanner;

    public class Exercicio{
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);
            String month;
            for (int i = 0; i < 12; i++) {
                System.out.println("Digite um mês: ");
                month = input.nextLine();
                if (month.equalsIgnoreCase("janeiro")) {
                    System.out.println("O mês de " + month + " é verão");
                }
                else if (month.equalsIgnoreCase("fevereiro")) {
                    System.out.println("O mês de " + month + " é verão");
                }
                else if (month.equalsIgnoreCase("março")) {
                    System.out.println("O mês de " + month + " é verão até dia 21");
                }
                else if (month.equalsIgnoreCase("abril")) {
                    System.out.println("O mês de " + month + " é outono");
                }
                else if (month.equalsIgnoreCase("maio")) {
                    System.out.println("O mês de " + month + " é outono");
                }
                else if (month.equalsIgnoreCase("junho")) {
                    System.out.println("O mês de " + month + " é outono até dia 21");
                }
                else if (month.equalsIgnoreCase("julho")) {
                    System.out.println("O mês de " + month + " é inverno");
                }
                else if (month.equalsIgnoreCase("agosto")) {
                    System.out.println("O mês de " + month + " é inverno");
                }
                else if (month.equalsIgnoreCase("setembro")) {
                    System.out.println("O mês de " + month + " é inverno até dia 23");
                }
                else if (month.equalsIgnoreCase("outubro")) {
                    System.out.println("O mês de " + month + " é primavera");
                }
                else if (month.equalsIgnoreCase("novembro")) {
                    System.out.println("O mês de " + month + " é primavera");
                }
                else if (month.equalsIgnoreCase("dezembro")) {
                    System.out.println("O mês de " + month + " é primavera até dia 21");
                }
            }
        }
    }

