package App_Uchile.demo.service;

import App_Uchile.demo.model.Role;
import App_Uchile.demo.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public List<Role> findAll(){
        return roleRepository.findAll();
    }

    public Role save(Role role){
        return roleRepository.save(role);
    }

    public Role findByName(String name){
        return roleRepository.findByName(name);
    }

    public void delete(Long id){
        roleRepository.findById(id);
    }
}
