package Trees;

public class Carry {
    public static void main(String[] args) {
      
        int num1=723;
        int num2=797;
        System.out.println(totalCarry(num1, num2));
        

        
    }
    static int totalCarry(int num1,int num2){
        int carry=0;
        int sum=num1+num2;
        Boolean doesCarry=false;
        while(num1>0){
            int rem1=num1%10;
            int rem2=num2%10;
            if(doesCarry){
                rem1+=1;
            }
            if(rem1+rem2>=10){
                carry++;
                doesCarry=true;

            }else{
                doesCarry=false;
            }
            num1=num1/=10;
            num2=num2/=10;
            

        }
        

        return carry;

    }
    
}
