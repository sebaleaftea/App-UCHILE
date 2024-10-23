package App_Uchile.demo.controller;

import App_Uchile.demo.model.Permission;
import App_Uchile.demo.model.User;
import App_Uchile.demo.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/permisos")
public class PermissionControler {
    @Autowired
    private PermissionService permissionService;

    @GetMapping
    public List<Permission> getAllPermissions(){
        return permissionService.findAll();
    }

    @PostMapping
    public Permission createPermission(@RequestBody Permission permission){
        return permissionService.save(permission);
    }

    @GetMapping("/{permissionName}")
    public Permission getPermissionByName(@PathVariable String permissionName){
        return permissionService.findByName(permissionName);
    }

    @DeleteMapping("/{id}")
    public void deletePermission(@PathVariable Long id){
        permissionService.delete(id);
    }
}
