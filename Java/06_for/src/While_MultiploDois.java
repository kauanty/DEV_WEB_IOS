public class While_MultiploDois {
    public static void main(String[] args) {
        int num = 0;

        while (num < 100) {
            num += 2;
            System.out.print(num + " ");
            if (num % 25 == 0) System.out.println("");
        }
    }
}