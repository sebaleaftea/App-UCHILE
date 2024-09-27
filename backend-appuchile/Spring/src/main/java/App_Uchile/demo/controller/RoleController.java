package App_Uchile.demo.controller;

import App_Uchile.demo.model.Role;
import App_Uchile.demo.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( "/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping
    public List<Role> getAllRoles(){
        return roleService.findAll();
    }

    @PostMapping
    public Role createRole(@RequestBody Role role){
        return roleService.save(role);
    }

    @GetMapping("/{roleName}")
    public Role getRoleByName(@PathVariable String roleName){
        return roleService.findByName(roleName);
    }

    @DeleteMapping("/{id}")
    public void deleteRole(@PathVariable Long id){
        roleService.delete(id);
    }
}
