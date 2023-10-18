import java.util.Random;
import java.util.Arrays;
import java.util.Scanner;
public class shuffleArray{
    public static void main(String[] args){
        try (Scanner sc = new Scanner(System.in)) {
            int[] array=new int[5];
            for(int i=0;i<array.length;i++){
                int n=sc.nextInt();
                array[i]=n;
            }
            System.out.println("Initial  Array : "+Arrays.toString(array));
            Random rand=new Random();
            for(int i=0;i<array.length;i++){
                int randomIndex=rand.nextInt(array.length);
                int temp=array[randomIndex];
                array[randomIndex]=array[i];
                array[i]=temp;
                
            }
            System.out.println("shuffled Array : "+Arrays.toString(array));
        }
    }
}