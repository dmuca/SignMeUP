package pl.com.muca.signmeup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SignMeUpApplication {

    public static void main(String[] args) {
        SpringApplication.run(SignMeUpApplication.class, args);
    }

    // Temporary method for checking if tests are working properly.
    // TODO (Damian Muca): 12/4/19 Remove this method.
    public static String getMessage(){
        return "SignMeUP application is coming...";
    }

}
