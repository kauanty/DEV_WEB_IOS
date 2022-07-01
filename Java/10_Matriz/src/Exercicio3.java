import java.util.Random;

public class Exercicio3 {
    public static void main(String[] args) {
        int nums;


        Random random = new Random();
        int matriz[][] = new int[100][100];

        System.out.println("Primeira Matrix:");

        for (int i = 0; i < matriz.length; i++) {

            for (int j = 0; j < matriz[i].length; j++) {
                nums = random.nextInt(100 + 1);
                matriz[i][j] = nums;
                System.out.print(matriz[i][j] + "\t");
            }

            System.out.println("");
        }

        System.out.println("Segunda Matrix:");
        for (int i = 0; i < matriz.length; i++){

            for (int j = 0; j < matriz[i].length; j++){
                if (matriz [i][j] %2 == 0){
                    matriz[i][j] = 1;
                } else {
                    matriz[i][j] = -1;
                }
                System.out.print(matriz[i][j] + "\t");
            }

            System.out.println("");
        }
    }
}