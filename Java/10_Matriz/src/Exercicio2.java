public class Exercicio2 {
    public static void main(String[] args) {
        System.out.println("Matriz Identidade");

        //Inicia  a Matriz
        int numeros[][] = {{1, 0, 0, 0, 0}, {0, 1, 0, 0, 0}, {0, 0, 1, 0, 0 }, {0, 0, 0, 1, 0}, {0, 0, 0, 0, 1}};
        int i, j;
        for (i = 0; i < numeros.length; i++) {
            for (j = 0; j < numeros[i].length; j++) {
                System.out.print(numeros[i][j] + "\t");
            }

            //Não deixa ficar tudo em uma linha só
            System.out.println("");
        }

    }
}