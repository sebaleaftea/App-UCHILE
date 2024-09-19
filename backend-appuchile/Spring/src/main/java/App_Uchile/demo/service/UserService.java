package App_Uchile.demo.service;

import App_Uchile.demo.model.User;
import App_Uchile.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User save(User user){
        return userRepository.save(user);
    }

    public User findByName(String name){
        return userRepository.findByUsername(name);
    }

    public void delete(Long id){
        userRepository.deleteById(id);
    }
}
