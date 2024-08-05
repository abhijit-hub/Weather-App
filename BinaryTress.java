package Trees;

import java.util.Scanner;

public class BinaryTress {

    public BinaryTress(){

    }

    private class Node{
        int value;
        Node left;
        Node right;

        Node(int value){
            this.value=value;
        }




    }
     private Node root;

     public void populate(Scanner scanner){
        System.out.println("Enter the root Node");
        int value=scanner.nextInt();
        root=new Node(value);
        populate(scanner,root);



     }

     public void populate(Scanner scanner, Node node){
        System.out.println("Do you want to enter left of "+node.value);
        boolean left=scanner.nextBoolean();
        if(left){
            System.out.println("Enter the value");
            int value=scanner.nextInt();
            node.left=new Node(value);
            populate(scanner, node.left);
        }
        System.out.println("Do you want to enter right of "+node.value);
        boolean right=scanner.nextBoolean();
        if(right){
            System.out.println("Enter the value");
            int value=scanner.nextInt();
            node.right=new Node(value);
            populate(scanner, node.right);
        }





           

     }



    
}
