package pl.com.muca.signmeup;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleEndpoint {
    @RequestMapping("/api/endpoint")
    String getResponse(){
        return SignMeUpApplication.getMessage();
    }
}
