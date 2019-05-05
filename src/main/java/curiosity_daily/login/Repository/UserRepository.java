package curiosity_daily.login.Repository;

import curiosity_daily.login.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {
    public List<User> findByTelephone(int telethone);
    public List<User> findByUsernameAndPassword(String username,String password);
    public List<User> findByTelephoneAndPassword(int telephone,String password);
}
