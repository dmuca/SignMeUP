package pl.com.muca.signmeup;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

@SpringBootTest
class SignMeUpApplicationTests {
    private SignMeUpApplication signMeUpApplication;

    @BeforeClass
    void SetUp(){
        signMeUpApplication = new SignMeUpApplication();
    }

    @Test
    void winterMessage_isReturned() {
        Assert.hasText(signMeUpApplication.getMessage(), "Winter is coming...");
    }

}
