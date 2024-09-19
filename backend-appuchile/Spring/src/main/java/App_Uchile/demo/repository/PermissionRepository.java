package App_Uchile.demo.repository;

import App_Uchile.demo.model.Permission;
import App_Uchile.demo.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissionRepository extends JpaRepository<Permission, Long> {
    Permission findByName(String name);
}
