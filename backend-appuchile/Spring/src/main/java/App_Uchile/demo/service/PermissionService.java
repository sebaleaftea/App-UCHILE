package App_Uchile.demo.service;

import App_Uchile.demo.model.Permission;
import App_Uchile.demo.repository.PermissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermissionService {
    @Autowired
    private PermissionRepository permissionRepository;

    public List<Permission> findAll() {
        return permissionRepository.findAll();
    }

    public Permission save(Permission permission) {
        return permissionRepository.save(permission);
    }

    public Permission findByName(String name) {
        return permissionRepository.findByName(name);
    }

    public void delete(Long id){
        permissionRepository.deleteById(id);
    }
}
