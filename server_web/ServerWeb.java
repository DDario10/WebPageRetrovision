import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
public class ServerWeb {
 public static void main(String[] args) throws IOException {
  System.out.println("#########################################################################");
  System.out.println("Serverul asculta potentiali clienti.");
  // pornește un server pe portul 5678
  ServerSocket serverSocket = new ServerSocket(5678);
  while(true) {
   // așteaptă conectarea unui client la server
   // metoda accept este blocantă
   // clientSocket - socket-ul clientului conectat
   Socket clientSocket = serverSocket.accept();
   System.out.println("S-a conectat un client.");
   // socketWriter - wrapper peste fluxul de ieșire folosit pentru a
//transmite date clientului
   PrintWriter socketWriter = new PrintWriter(clientSocket.getOutputStream(), true);
   // socketReader - wrapper peste fluxul de intrare folosit pentru a
//primi date de la client
   BufferedReader socketReader = new BufferedReader(new
           InputStreamReader(clientSocket.getInputStream()));

   // este citită prima linie de text din cerere
   String linieDeStart = socketReader.readLine();
   System.out.println("S-a citit linia de start din cerere: ##### " +
           linieDeStart + " #####");
   // mesajul citit este transmis la client
   //# TODO interpretarea sirului de caractere `linieDeStart` pentru a
//extrage numele resursei cerute

//String Str = linieDeStart;


   //# TODO trimiterea răspunsului HTTP

   import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
   public class ServerWeb {
    public static void main(String[] args) throws IOException {
     System.out.println("#########################################################################");
     System.out.println("Serverul asculta potentiali clienti.");
     // pornește un server pe portul 5678
     ServerSocket serverSocket = new ServerSocket(5678);
     while(true) {
      // așteaptă conectarea unui client la server
      // metoda accept este blocantă
      // clientSocket - socket-ul clientului conectat
      Socket clientSocket = serverSocket.accept();
      System.out.println("S-a conectat un client.");
      // socketWriter - wrapper peste fluxul de ieșire folosit pentru a
//transmite date clientului
      PrintWriter socketWriter = new PrintWriter(clientSocket.getOutputStream(), true);
      // socketReader - wrapper peste fluxul de intrare folosit pentru a
//primi date de la client
      BufferedReader socketReader = new BufferedReader(new
              InputStreamReader(clientSocket.getInputStream()));

      // este citită prima linie de text din cerere
      String linieDeStart = socketReader.readLine();
      System.out.println("S-a citit linia de start din cerere: ##### " +
              linieDeStart + " #####");
      // mesajul citit este transmis la client
      //# TODO interpretarea sirului de caractere `linieDeStart` pentru a
//extrage numele resursei cerute

//String Str = linieDeStart;


      //# TODO trimiterea răspunsului HTTP

      String[] requestParts = linieDeStart.split(" ");
      String method = requestParts[0];
      String uri = requestParts[1];

      System.out.println("Metoda HTTP: " + method);
      System.out.println("URI cerut: " + uri);

      File file = new File("contiut" + uri);

      if(file.exists()) {
       String contentType = getContentType(uri);
       socketWriter.println("HTTP/1.1 200 OK");
       socketWriter.println("Content-Type: " + contentType);

       FileInputStream fileInputStream = new FileInputStream(file);
       OutputStream outputStream = clientSocket.getOutputStream();

       socketWriter.println("Content-Length: " + file.length());
       socketWriter.println();

       byte[] buffer = new byte[1024];
       int bytesRead;
       while ((bytesRead = fileInputStream.read(buffer)) != -1) {
        outputStream.write(buffer, 0, bytesRead);
       }

       fileInputStream.close();
      } else {
       // Trimitere răspuns 404 Not Found dacă fișierul nu există
       socketWriter.println("HTTP/1.1 404 Not Found");
       socketWriter.println();
      }
   // închide conexiunea cu clientul
   // la apelul metodei close() se închid automat fluxurile de intrare și
//ieșire (socketReader și socketWriter)
   clientSocket.close();
   System.out.println("S-a terminat comunicarea cu clientul.");
  }
  // închide serverul
  //serverSocket.close();
 }
}