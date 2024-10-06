package App_Uchile.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import App_Uchile.demo.model.Equipment;


@Repository
public interface  EquipmentRepository extends JpaRepository<Equipment, Long>{
        Equipment findByName(String name);
}
