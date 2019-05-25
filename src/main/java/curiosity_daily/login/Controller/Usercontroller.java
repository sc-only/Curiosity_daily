package curiosity_daily.login.Controller;

import curiosity_daily.login.Repository.UserRepository;
import curiosity_daily.login.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class Usercontroller {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/login")
    public String userFindOne(@RequestParam("telephone") int telephone,
                              @RequestParam("password") String password, HttpServletRequest httpServletRequest){
        System.out.println("取得参数：" + telephone + " " + password);
        HttpSession httpSession = httpServletRequest.getSession();
        List<User> list =userRepository.findByTelephone(telephone);
        if(!list.isEmpty()){
            if(userRepository.findByTelephoneAndPassword(telephone,password).isEmpty()){
                return "no";
            }else{
                httpSession.setAttribute("username",telephone);
                httpSession.setAttribute("password",password);
                return "yes";
            }
        }else{
            return "no2";
        }
    }
}
