public class For_MultiploDois {
    public static void main(String[] args) {
        int num;

        for (num = 0; num < 100; num += 2) {
            System.out.print(num + " ");
            if (num % 25 == 0) System.out.println("");
        }
    }
}