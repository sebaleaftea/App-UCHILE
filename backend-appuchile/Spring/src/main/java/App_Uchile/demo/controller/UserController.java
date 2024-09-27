package App_Uchile.demo.controller;

import App_Uchile.demo.model.User;
import App_Uchile.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers(){
        return userService.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.save(user);
    }

    @GetMapping("/{username}")
    public User getUserByName(@PathVariable String username){
        return userService.findByName(username);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.delete(id);
    }
}
